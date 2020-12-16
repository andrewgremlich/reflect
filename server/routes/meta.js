const express = require("express");

const { getMetaGroupByName } = require("../db/generic.js");
const { successfulResponse } = require("../utils/index.js");
const metaRouter = express.Router();

const COLLECTION_NAME = "meta";

metaRouter.get("/test", (req, res) => {
  res.status(200).send(successfulResponse("Meta router working"));
});

metaRouter.get("/getGroup/:name", async (req, res) => {
  const { name } = req.params;

  const INDEX_NAME = "meta_index_by_name";

  const { data, loaded } = await getMetaGroupByName(name, INDEX_NAME);

  if (loaded) {
    const response = successfulResponse(
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
      .send({ message: `could not load meta ${name}`, loaded: false });
  }
});

module.exports = metaRouter;
