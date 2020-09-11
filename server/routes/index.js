const express = require("express");

const exercisesRouter = require("./exercises.js");
const exerciseGroupRouter = require("./exerciseGroup.js");
const programRouter = require("./programs.js");
const exerciseSetsRouter = require("./exerciseSets.js");

const appRouter = express.Router();

appRouter.get("/mainRouterTest", (req, res) => {
  res.status(200).send("Hello from main router test.");
});

appRouter.use("/exercises", exercisesRouter);
appRouter.use("/exerciseGroups", exerciseGroupRouter);
appRouter.use("/programs", programRouter);
appRouter.use("/sets", exerciseSetsRouter);

module.exports = appRouter;
