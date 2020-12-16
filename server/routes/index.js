const express = require("express");

const { successful } = require("../utils/index.js");

const exercisesRouter = require("./exercises.js");
const programRouter = require("./programs.js");
const setsRouter = require("./sets.js");
const metaRouter = require("./meta.js");

const appRouter = express.Router();

appRouter.get("/mainRouterTest", (req, res) => {
  res.status(200).send(successful("Hello from main router test."));
});

appRouter.use("/exercises", exercisesRouter);
appRouter.use("/programs", programRouter);
appRouter.use("/sets", setsRouter);
appRouter.use("/meta", metaRouter);

module.exports = appRouter;
