const express = require("express");
const dotenv = require("dotenv");
const serverless = require("serverless-http");
const cors = require("cors");

const router = require("./routes/index.js");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/.netlify/functions/index", router);

module.exports = app;
module.exports.handler = serverless(app);
