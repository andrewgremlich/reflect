const express = require("express");

const {
  getDocByIdFromCollection,
  postBodyInCollection,
  updateDocInCollection,
  getMetaGroupByName,
} = require("../db/generic.js");
const { matchKeys, successful, unsuccessful } = require("../utils/index.js");
const { exercise: exerciseSchema } = require("../model/index.js");

const exercisesRouter = express.Router();
const COLLECTION_NAME = "exercises";

exercisesRouter.get("/test", (req, res) => {
  res.status(200).send(successful("hello from exercises!"));
});

exercisesRouter.post("/create", async (req, res) => {
  const keysMatch = matchKeys(exerciseSchema, req.body);

  if (keysMatch) {
    const { loaded, data } = await postBodyInCollection(
      COLLECTION_NAME,
      req.body
    );

    if (loaded) {
      const response = successful("exercise created", {
        makeMd5: true,
        makeId: true,
      });

      res.status(200).send(response);
    } else {
      res.status(data.statusCode).send(unsuccessful(data.description));
    }
  } else {
    res.status(400).send(unsuccessful("Keys don't match for exercise post"));
  }
});

exercisesRouter.get("/getExerciseById/:id", async (req, res) => {
  const { id } = req.params;

  const { loaded, data } = await getDocByIdFromCollection(COLLECTION_NAME, id);

  if (loaded) {
    const response = successful(
      "exercise Fetched!",
      {
        makeMd5: true,
        makeId: true,
      },
      { data }
    );

    res.status(200).send(response);
  } else {
    res.status(data.statusCode).send(unsuccessful(data.description));
  }
});

exercisesRouter.get("/group", async (req, res) => {
  const { exerciseGroupName } = req.query;

  if (Array.isArray(exerciseGroupName)) {
    res.status(200).send({
      message: "Exercise group array is not supported. Try individually.",
      loaded: false,
    });
  } else {
    const { loaded, data } = await getMetaGroupByName(
      exerciseGroupName,
      "index_exercises_by_exercise_group"
    );
    const response = successful(
      "exercise group fetched",
      {
        makeMd5: true,
        makeId: true,
      },
      {
        data,
      }
    );

    if (loaded) {
      res.status(200).send(response);
    } else {
      res.status(data.statusCode).send(unsuccessful(data.description));
    }
  }
});

exercisesRouter.put("/updateExerciseById/:id", async (req, res) => {
  const { id } = req.params;

  let keysMatch = matchKeys(exerciseSchema, req.body);

  if (keysMatch) {
    const { data, loaded } = await updateDocInCollection(
      COLLECTION_NAME,
      id,
      req.body
    );
    const response = successful(
      "exercise updated",
      {
        makeMd5: true,
        makeId: true,
      },
      { data }
    );

    if (loaded) {
      res.status(200).send(response);
    } else {
      res.status(data.statusCode).send(unsuccessful(data.description));
    }
  } else {
    res.status(400).send(unsuccessful("Keys don't match for exercise update"));
  }
});

module.exports = exercisesRouter;
