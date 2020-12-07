const faunadb = require("faunadb");
const { sets } = require("../model/index.js");
const { client } = require("./util.js");

const {
  Get,
  Ref,
  Collection,
  Create,
  Let,
  Var,
  Map,
  Select,
  Lambda,
  Replace,
} = faunadb.query;

const PROGRAM_NAME = "program";
const SETS_NAME = "exerciseSets";

const linkSetIdsToRefs = (data) => {
  const dataToCreate = {
    ...data,
    sets: data.sets.map((id) => Ref(Collection(SETS_NAME), id)),
  };

  return dataToCreate;
};

const getProgramWithSets = async (id) => {
  const setsProperty = "sets";

  try {
    const resp = await client.query(
      Let(
        {
          programDoc: Get(Ref(Collection(PROGRAM_NAME), id)),
        },
        {
          program: Var("programDoc"),
          sets: Map(
            Select(["data", setsProperty], Var("programDoc")),
            Lambda(setsProperty, Get(Var(setsProperty)))
          ),
        }
      )
    );

    const cleanResp = {
      ...resp.program.data,
      sets: resp.sets.map(({ data }) => data),
    };

    return { data: cleanResp, loaded: true };
  } catch (err) {
    const {
      description,
      requestResult: { statusCode },
    } = err;

    return { data: { statusCode, description }, loaded: false };
  }
};

const createProgramWithSetRefIds = async (data) => {
  const dataToCreate = linkSetIdsToRefs(data);

  try {
    const { data: dbResp } = await client.query(
      Create(Collection(PROGRAM_NAME), { data: dataToCreate })
    );

    return { data: dbResp, loaded: true };
  } catch (err) {
    const {
      description,
      requestResult: { statusCode },
    } = err;

    return { data: { statusCode, description }, loaded: false };
  }
};

const updateProgramWithSetRefIds = async (id, data) => {
  const dataToCreate = linkSetIdsToRefs(data);

  try {
    await client.query(
      Replace(Ref(Collection(PROGRAM_NAME), id), { data: dataToCreate })
    );

    return { data: `${data.name} has been updated`, loaded: true };
  } catch (err) {
    const {
      description,
      requestResult: { statusCode },
    } = err;

    return { data: { statusCode, description }, loaded: false };
  }
};

module.exports = {
  getProgramWithSets,
  createProgramWithSetRefIds,
  updateProgramWithSetRefIds,
};
