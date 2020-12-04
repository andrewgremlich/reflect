const express = require("express");

const {
  getDocByIdFromCollection,
  postBodyInCollection,
  updateDocInCollection,
  getAllDocumentsInCollection,
  getProgramsWithSetData,
} = require("../db/index.js");
const { matchKeys } = require("../utils/index.js");
const { program: programSchema, program } = require("../model/index.js");

const programRouter = express.Router();
const COLLECTION_NAME = "program";

programRouter.get("/test", (req, res) => {
  res.status(200).send({ message: "Hello from program!" });
});

programRouter.post("/create", async (req, res) => {
  const keysMatch = matchKeys(programSchema, req.body);

  if (keysMatch) {
    const { loaded, data } = await postBodyInCollection(
      COLLECTION_NAME,
      req.body
    );

    if (loaded) {
      res.status(200).send({ message: "program created", success: true });
    } else if (!loaded) {
      res.status(data.statusCode).send(data.description);
    }
  } else {
    res
      .status(400)
      .send({ message: "Keys don't match for program post", success: false });
  }
});

programRouter.get("/all", async (req, res) => {
  const programs = "all_programs";
  const sets = "all_exercise_sets";

  const fetchedPrograms = await getAllDocumentsInCollection(programs);
  const fetchedSets = await getAllDocumentsInCollection(sets);

  const programsWithSetsTranslated = fetchedPrograms.data.map((program) => ({
    ...program,
    sets: { ...program }.sets.map((id) =>
      fetchedSets.data.find((set) => set.id === id)
    ),
  }));

  if (fetchedPrograms.loaded) {
    res.status(200).send(programsWithSetsTranslated);
  } else {
    res
      .status(fetchedPrograms.data.statusCode)
      .send(fetchedPrograms.data.description);
  }
});

programRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const { loaded, data } = await getDocByIdFromCollection(COLLECTION_NAME, id);

  if (loaded) {
    res.status(200).send(data);
  } else if (!loaded) {
    res.status(data.statusCode).send(data.description);
  }
});

programRouter.get("/withSetData/:id", async (req, res) => {
  const { id } = req.params;

  await getProgramsWithSetData(COLLECTION_NAME, id);

  res.status(200).send("HELLO!!");
});

programRouter.put("/:id", async (req, res) => {
  const { id } = req.params;

  let keysMatch = matchKeys(programSchema, req.body);

  if (keysMatch) {
    const { data, loaded } = await updateDocInCollection(
      COLLECTION_NAME,
      id,
      req.body
    );

    if (loaded) {
      res.status(200).send({ message: "program updated" });
    } else if (!loaded) {
      res.status(data.statusCode).send(data.description);
    }
  } else {
    res.status(400).send({ message: "Keys don't match for program update" });
  }
});

module.exports = programRouter;
