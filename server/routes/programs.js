const express = require("express");

const {
  getDocByIdFromCollection,
  getAllDocumentsInCollection,
} = require("../db/generic.js");
const {
  createProgramWithSetRefIds,
  getProgramWithSets,
  updateProgramWithSetRefIds,
  getProgramsWithSets,
} = require("../db/programs.js");
const { matchKeys, successful } = require("../utils/index.js");
const { program: programSchema } = require("../model/index.js");

const programRouter = express.Router();
const COLLECTION_NAME = "program";

programRouter.get("/test", (req, res) => {
  res.status(200).send(successful("Hello from program!"));
});

programRouter.post("/createProgram", async (req, res) => {
  const keysMatch = matchKeys(programSchema, req.body);

  if (keysMatch) {
    const { data, loaded } = await createProgramWithSetRefIds(req.body);
    const response = successful(
      `${req.body.name} program created`,
      {
        makeMd5: true,
        makeId: true,
      },
      { data },
    );

    if (loaded) {
      res.status(200).send(response);
    } else {
      res.status(data.statusCode).send(unsuccessful(data.description));
    }
  } else {
    res.status(400).send(unsuccessful("Keys don't match for program post"));
  }
});

programRouter.get("/getProgramById/:id", async (req, res) => {
  const { id } = req.params;

  const { data, loaded } = await getProgramWithSets(id);

  if (loaded) {
    const response = successful(
      "program fetched",
      {
        makeMd5: true,
        makeId: true,
      },
      { data },
    );

    res.status(200).send(response);
  } else {
    res.status(400).send(unsuccessful(data.description));
  }
});

programRouter.get("/allPrograms", async (req, res) => {
  const { data, loaded } = await getProgramsWithSets();

  if (loaded) {
    const response = successful(
      "all programs fetched!",
      {
        makeMd5: false,
        makeId: false,
      },
      { data },
    );

    res.status(200).send(response);
  } else {
    res.status(400).send(unsuccessful(data.description));
  }
});

programRouter.put("/updateProgramById/:id", async (req, res) => {
  const { id } = req.params;

  let keysMatch = matchKeys(programSchema, req.body);

  if (keysMatch) {
    const { data, loaded } = await updateProgramWithSetRefIds(id, req.body);
    const response = successful(
      `${req.body.name} program updated`,
      {
        makeMd5: true,
        makeId: true,
      },
      { data },
    );

    if (loaded) {
      res.status(200).send(response);
    } else {
      res.status(data.statusCode).send(unsuccessful(data.description));
    }
  } else {
    res.status(400).send(unsuccessful("Keys don't match for program update"));
  }
});

module.exports = programRouter;
