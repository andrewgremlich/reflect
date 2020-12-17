const express = require("express");

const { getMetaGroupByName } = require("../db/generic.js");
const { successful } = require("../utils/index.js");
const metaRouter = express.Router();

const COLLECTION_NAME = "meta";

metaRouter.get("/test", (req, res) => {
  res.status(200).send(successful("Meta router working"));
});

metaRouter.get("/getMetaGroup/:name", async (req, res) => {
  const { name } = req.params;

  const INDEX_NAME = "meta_index_by_name";

  const { data, loaded } = await getMetaGroupByName(name, INDEX_NAME);

  if (loaded) {
    const response = successful(
      `loaded meta ${name}`,
      {
        makeMd5: false,
        makeId: true,
      },
      { data }
    );
    res.status(200).send(response);
  } else {
    res
      .status(400)
      .send(unsuccessful(`could not load meta ${name}`));
  }
});

module.exports = metaRouter;
