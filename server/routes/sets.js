const express = require("express");

const {
  getDocByIdFromCollection,
  postBodyInCollection,
  updateDocInCollection,
  getAllDocumentsInCollection,
} = require("../db/generic.js");
const { matchKeys } = require("../utils/index.js");
const { sets: setsSchema } = require("../model/index.js");

const exerciseSetsRouter = express.Router();
const COLLECTION_NAME = "exerciseSets";

exerciseSetsRouter.get("/test", (req, res) => {
  res.status(200).send({ message: "Hello from Exercise Sets!" });
});

exerciseSetsRouter.post("/create", async (req, res) => {
  const keysMatch = matchKeys(setsSchema, req.body);

  if (keysMatch) {
    const { loaded, data } = await postBodyInCollection(
      COLLECTION_NAME,
      req.body
    );

    if (loaded) {
      res.status(200).send({ message: "set created" });
    } else {
      res.status(data.statusCode).send(data.description);
    }
  } else {
    res.status(400).send({ message: "Keys don't match for set post" });
  }
});

exerciseSetsRouter.get("/all", async (req, res) => {
  const sets = "all_exercise_sets";

  const fetchedSets = await getAllDocumentsInCollection(sets);

  if (fetchedSets.loaded) {
    res.status(200).send(fetchedSets.data);
  } else {
    res.status(fetchedSets.data.statusCode).send(fetchedSets.data.description);
  }
});

exerciseSetsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const { loaded, data } = await getDocByIdFromCollection(COLLECTION_NAME, id);

  if (loaded) {
    res.status(200).send(data);
  } else {
    res.status(data.statusCode).send(data.description);
  }
});

exerciseSetsRouter.put("/:id", async (req, res) => {
  const { id } = req.params;

  let keysMatch = matchKeys(setsSchema, req.body);

  if (keysMatch) {
    const { data, loaded } = await updateDocInCollection(
      COLLECTION_NAME,
      id,
      req.body
    );

    if (loaded) {
      res.status(200).send({ message: "set updated" });
    } else {
      res.status(data.statusCode).send(data.description);
    }
  } else {
    res.status(400).send({ message: "Keys don't match for set update" });
  }
});

module.exports = exerciseSetsRouter;