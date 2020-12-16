const express = require("express");

const {
  getDocByIdFromCollection,
  postBodyInCollection,
  updateDocInCollection,
  getAllDocumentsInCollection,
} = require("../db/generic.js");
const { matchKeys, successfulResponse } = require("../utils/index.js");
const { sets: setsSchema } = require("../model/index.js");

const exerciseSetsRouter = express.Router();
const COLLECTION_NAME = "exerciseSets";

exerciseSetsRouter.get("/test", (req, res) => {
  res.status(200).send(successfulResponse("Hello from Exercise Sets!"));
});

exerciseSetsRouter.post("/create", async (req, res) => {
  const keysMatch = matchKeys(setsSchema, req.body);

  if (keysMatch) {
    const { loaded, data } = await postBodyInCollection(
      COLLECTION_NAME,
      req.body
    );

    if (loaded) {
      const response = successfulResponse("set created", {
        makeMd5: true,
        makeId: true,
      });

      res.status(200).send(response);
    } else {
      res
        .status(data.statusCode)
        .send({ message: data.description, loaded: false });
    }
  } else {
    res
      .status(400)
      .send({ message: "Keys don't match for set post", loaded: false });
  }
});

exerciseSetsRouter.get("/getSetById/:id", async (req, res) => {
  const { id } = req.params;

  const { loaded, data } = await getDocByIdFromCollection(COLLECTION_NAME, id);

  if (loaded) {
    const response = successfulResponse(
      "set loaded!",
      {
        makeMd5: true,
        makeId: true,
      },
      { data }
    );

    res.status(200).send(response);
  } else {
    res
      .status(data.statusCode)
      .send({ message: data.description, loaded: false });
  }
});

exerciseSetsRouter.get("/all", async (req, res) => {
  const sets = "all_exercise_sets";

  const { data, loaded } = await getAllDocumentsInCollection(sets);

  if (loaded) {
    const response = successfulResponse(
      "all sets fetched!",
      {
        makeMd5: false,
        makeId: false,
      },
      { data }
    );

    res.status(200).send(response);
  } else {
    res
      .status(data.statusCode)
      .send({ message: data.description, loaded: false });
  }
});

exerciseSetsRouter.put("/updateSetById/:id", async (req, res) => {
  const { id } = req.params;

  let keysMatch = matchKeys(setsSchema, req.body);

  if (keysMatch) {
    const { data, loaded } = await updateDocInCollection(
      COLLECTION_NAME,
      id,
      req.body
    );
    const response = successfulResponse(
      "set updated!",
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
      .send({ message: "Keys don't match for set update", loaded: false });
  }
});

module.exports = exerciseSetsRouter;
