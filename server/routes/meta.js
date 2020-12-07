const express = require("express");

const { getMetaGroupByName } = require("../db/generic.js");
const metaRouter = express.Router();

const COLLECTION_NAME = "meta";

metaRouter.get("/test", (req, res) => {
  res.status(200).send({ message: "Meta router working" });
});

metaRouter.get("/:name", async (req, res) => {
  const { name } = req.params;

  const INDEX_NAME = "meta_index_by_name";

  const dbResponse = await getMetaGroupByName(name, INDEX_NAME);

  res.status(200).send(dbResponse);
});

module.exports = metaRouter;
