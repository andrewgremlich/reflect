const faunadb = require("faunadb");
const { sets } = require("../model/index.js");
const { client, paginateMatchIndex, extractData } = require("./util.js");

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
const PROGRAM_INDEX = "all_programs";
const SETS_NAME = "exerciseSets";
const SETS_PROPERTY = "sets";

const linkSetIdsToRefs = (data) => {
  const dataToCreate = {
    ...data,
    sets: data.sets.map((id) => Ref(Collection(SETS_NAME), id)),
  };

  return dataToCreate;
};

const getProgramsWithSets = async () => {
  const index = paginateMatchIndex(PROGRAM_INDEX);

  try {
    const { data } = await client.query(
      Map(
        index,
        Lambda(
          "p",
          Let(
            {
              programDoc: Get(Var("p")),
            },
            {
              program: Var("programDoc"),
              sets: Map(
                Select(["data", "sets"], Var("programDoc")),
                Lambda("sets", Get(Var("sets")))
              ),
            }
          )
        )
      )
    );

    const reducedProgramsResp = data.map(
      ({
        program: {
          ref: { id: programId },
          data: { name: programName, description: programDescription },
        },
        sets: setsData,
      }) => ({
        id: programId,
        name: programName,
        description: programDescription,
        sets: setsData.map(({ data: setData }) => setData),
      })
    );

    return { data: reducedProgramsResp, loaded: true };
  } catch (err) {
    const {
      description,
      requestResult: { statusCode },
    } = err;

    return { data: { statusCode, description }, loaded: false };
  }
};

const getProgramWithSets = async (id) => {
  try {
    const resp = await client.query(
      Let(
        {
          programDoc: Get(Ref(Collection(PROGRAM_NAME), id)),
        },
        {
          program: Var("programDoc"),
          sets: Map(
            Select(["data", SETS_PROPERTY], Var("programDoc")),
            Lambda(SETS_PROPERTY, Get(Var(SETS_PROPERTY)))
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
  getProgramsWithSets,
  getProgramWithSets,
  createProgramWithSetRefIds,
  updateProgramWithSetRefIds,
};
