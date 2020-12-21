const express = require("express");

const {
  getDocByIdFromCollection,
  postBodyInCollection,
  updateDocInCollection,
  getAllDocumentsInCollection,
} = require("../db/generic.js");
const { matchKeys, successful } = require("../utils/index.js");
const { sets: setsSchema } = require("../model/index.js");

const exerciseSetsRouter = express.Router();
const COLLECTION_NAME = "exerciseSets";

exerciseSetsRouter.get("/test", (req, res) => {
  res.status(200).send(successful("Hello from Exercise Sets!"));
});

exerciseSetsRouter.post("/createSet", async (req, res) => {
  const keysMatch = matchKeys(setsSchema, req.body);

  if (keysMatch) {
    const { loaded, data } = await postBodyInCollection(
      COLLECTION_NAME,
      req.body,
    );

    if (loaded) {
      const response = successful("set created", {
        makeMd5: true,
        makeId: true,
      });

      res.status(200).send(response);
    } else {
      res.status(data.statusCode).send(unsuccessful(data.description));
    }
  } else {
    res.status(400).send(unsuccessful("Keys don't match for set post"));
  }
});

exerciseSetsRouter.get("/getSetById/:id", async (req, res) => {
  const { id } = req.params;

  const { loaded, data } = await getDocByIdFromCollection(COLLECTION_NAME, id);

  if (loaded) {
    const response = successful(
      "set loaded!",
      {
        makeMd5: true,
        makeId: true,
      },
      { data },
    );

    res.status(200).send(response);
  } else {
    res.status(data.statusCode).send(unsuccessful(data.description));
  }
});

exerciseSetsRouter.get("/allSets", async (req, res) => {
  const sets = "all_exercise_sets";

  const { data, loaded } = await getAllDocumentsInCollection(sets);

  if (loaded) {
    const response = successful(
      "all sets fetched!",
      {
        makeMd5: false,
        makeId: false,
      },
      { data },
    );

    res.status(200).send(response);
  } else {
    res.status(data.statusCode).send(unsuccessful(data.description));
  }
});

exerciseSetsRouter.put("/updateSetById/:id", async (req, res) => {
  const { id } = req.params;

  let keysMatch = matchKeys(setsSchema, req.body);

  if (keysMatch) {
    const { data, loaded } = await updateDocInCollection(
      COLLECTION_NAME,
      id,
      req.body,
    );
    const response = successful(
      "set updated!",
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
    res.status(400).send(unsuccessful("Keys don't match for set update"));
  }
});

module.exports = exerciseSetsRouter;
