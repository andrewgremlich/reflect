const express = require("express");

const exercisesRouter = require("./exercises.js");
const programRouter = require("./programs.js");
const exerciseSetsRouter = require("./exerciseSets.js");
const metaRouter = require("./meta.js");

const appRouter = express.Router();

appRouter.get("/mainRouterTest", (req, res) => {
  res.status(200).send("Hello from main router test.");
});

appRouter.use("/exercises", exercisesRouter);
appRouter.use("/programs", programRouter);
appRouter.use("/sets", exerciseSetsRouter);
appRouter.use("/meta", metaRouter);

module.exports = appRouter;
