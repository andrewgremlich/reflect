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
const { matchKeys, successfulResponse } = require("../utils/index.js");
const { program: programSchema } = require("../model/index.js");

const programRouter = express.Router();
const COLLECTION_NAME = "program";

programRouter.get("/test", (req, res) => {
  res.status(200).send(successfulResponse("Hello from program!"));
});

programRouter.post("/create", async (req, res) => {
  const keysMatch = matchKeys(programSchema, req.body);

  if (keysMatch) {
    const { data, loaded } = await createProgramWithSetRefIds(req.body);
    const response = successfulResponse(
      `${req.body.name} program created`,
      {
        makeMd5: true,
        makeId: true,
      },
      { data }
    );

    if (loaded) {
      res.status(200).send(response);
    } else {
      res
        .status(data.statusCode)
        .send({ message: data.description, loaded: false });
    }
  } else {
    res
      .status(400)
      .send({ message: "Keys don't match for program post", loaded: false });
  }
});

programRouter.get("/getProgramById/:id", async (req, res) => {
  const { id } = req.params;

  const { data, loaded } = await getProgramWithSets(id);

  if (loaded) {
    const response = successfulResponse(
      "program fetched",
      {
        makeMd5: true,
        makeId: true,
      },
      { data }
    );

    res.status(200).send(response);
  } else {
    res.status(400).send({ message: data.description, loaded: false });
  }
});

programRouter.get("/all", async (req, res) => {
  const { data, loaded } = await getProgramsWithSets();

  if (loaded) {
    const response = successfulResponse(
      "all programs fetched!",
      {
        makeMd5: false,
        makeId: false,
      },
      { data }
    );

    res.status(200).send(response);
  } else {
    res.status(400).send({ message: data.description, loaded: false });
  }
});

programRouter.put("/updateProgramById/:id", async (req, res) => {
  const { id } = req.params;

  let keysMatch = matchKeys(programSchema, req.body);

  if (keysMatch) {
    const { data, loaded } = await updateProgramWithSetRefIds(id, req.body);
    const response = successfulResponse(
      `${req.body.name} program updated`,
      {
        makeMd5: true,
        makeId: true,
      },
      { data }
    );

    if (loaded) {
      res.status(200).send(response);
    } else {
      res
        .status(data.statusCode)
        .send({ message: data.description, loaded: false });
    }
  } else {
    res
      .status(400)
      .send({ message: "Keys don't match for program update", loaded: false });
  }
});

module.exports = programRouter;
