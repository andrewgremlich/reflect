const faunadb = require("faunadb");

const extractData = (data) => {
  const mappedData = data.map((document) => ({
    ...document.data,
    id: document.ref.value.id,
  }));

  return mappedData;
};

const client = new faunadb.Client({
  secret: process.env.FAUNADB_KEY,
});

module.exports = { extractData, client };
