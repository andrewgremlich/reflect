const express = require("express");

const {
  getDocByIdFromCollection,
  postBodyInCollection,
  updateDocInCollection,
  getAllDocumentsInCollection,
} = require("../db/index.js");
const { matchKeys } = require("../utils/index.js");
const { exerciseGroup: exerciseGroupSchema } = require("../model/index.js");

const exerciseGroupRouter = express.Router();
const COLLECTION_NAME = "exerciseGroup";

exerciseGroupRouter.get("/test", (req, res) => {
  res.status(200).send({ message: "Hello from exercise group router." });
});

exerciseGroupRouter.post("/create", async (req, res) => {
  const keysMatch = matchKeys(exerciseGroupSchema, req.body);

  if (keysMatch) {
    const { loaded, data } = await postBodyInCollection(
      COLLECTION_NAME,
      req.body
    );

    if (loaded) {
      res.status(200).send({ message: "exercise group created" });
    } else if (!loaded) {
      res.status(data.statusCode).send(data.description);
    }
  } else {
    res.status(400).send({ message: "Keys don't match for exercise post" });
  }
});

exerciseGroupRouter.get("/all", async (req, res) => {
  const exerciseGroups = "all_exercise_groups";
  const exercises = "all_exercises";

  const fetchedExerciseGroups = await getAllDocumentsInCollection(
    exerciseGroups
  );
  const fetchedExercises = await getAllDocumentsInCollection(exercises);

  const exerciseGroupsWithExercisesTranslated = fetchedExerciseGroups.data.map(
    (group) => ({
      ...group,
      exercises: { ...group }.exercises.map((id) =>
        fetchedExercises.data.find((exercise) => exercise.id === id)
      ),
    })
  );

  if (fetchedExerciseGroups.loaded) {
    res.status(200).send(exerciseGroupsWithExercisesTranslated);
  } else {
    res
      .status(fetchedExerciseGroups.data.statusCode)
      .send(fetchedExerciseGroups.data.description);
  }
});

exerciseGroupRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const { loaded, data } = await getDocByIdFromCollection(COLLECTION_NAME, id);

  if (loaded) {
    res.status(200).send(data);
  } else if (!loaded) {
    res.status(data.statusCode).send(data.description);
  }
});

exerciseGroupRouter.put("/:id", async (req, res) => {
  const { id } = req.params;

  let keysMatch = matchKeys(exerciseGroupSchema, req.body);

  if (keysMatch) {
    const { data, loaded } = await updateDocInCollection(
      COLLECTION_NAME,
      id,
      req.body
    );

    if (loaded) {
      res.status(200).send({ message: "exercise group updated" });
    } else if (!loaded) {
      res.status(data.statusCode).send(data.description);
    }
  } else {
    res
      .status(400)
      .send({ message: "Keys don't match for exercise group update" });
  }
});

module.exports = exerciseGroupRouter;
