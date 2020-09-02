const express = require("express");

const {
  getDocByIdFromCollection,
  postBodyInCollection,
  updateDocInCollection,
} = require("../db/index.js");
const { matchKeys } = require("../utils/index.js");
const { exercise: exerciseSchema } = require("../model/index.js");

const exercisesRouter = express.Router();
const COLLECTION_NAME = "exercises";

exercisesRouter.get("/test", (req, res) => {
  res.status(200).send({ message: "Hello from exercises!" });
});

exercisesRouter.post("/create", async (req, res) => {
  const keysMatch = matchKeys(exerciseSchema, req.body);

  if (keysMatch) {
    const { loaded, data } = await postBodyInCollection(COLLECTION_NAME, req.body);

    if (loaded) {
      res.status(200).send({ message: "exercise created" });
    } else if (!loaded) {
      res.status(data.statusCode).send(data.description);
    }
  } else {
    res.status(400).send({ message: "Keys don't match for exercise post" });
  }
});

exercisesRouter.get("/all", async (req, res) => {
  const indexName = "all_exercises";

  const { loaded, data } = await getAllDocumentsInCollection(indexName);

  if (loaded) {
    res.status(200).send(data);
  } else {
    res.status(data.statusCode).send(data.description);
  }
});

exercisesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const { loaded, data } = await getDocByIdFromCollection(COLLECTION_NAME, id);

  if (loaded) {
    res.status(200).send(data);
  } else if (!loaded) {
    res.status(data.statusCode).send(data.description);
  }
});

exercisesRouter.put("/:id", async (req, res) => {
  const { id } = req.params;

  let keysMatch = matchKeys(exerciseSchema, req.body);

  if (keysMatch) {
    const { data, loaded } = await updateDocInCollection(
      COLLECTION_NAME,
      id,
      req.body
    );

    if (loaded) {
      res.status(200).send({ message: "exercise updated" });
    } else if (!loaded) {
      res.status(data.statusCode).send(data.description);
    }
  } else {
    res.status(400).send({ message: "Keys don't match for exercise update" });
  }
});

module.exports = exercisesRouter;
