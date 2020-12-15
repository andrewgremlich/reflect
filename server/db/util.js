const faunadb = require("faunadb");

const paginateMatchIndex = (INDEX_NAME) => {
  const index = faunadb.query.Index(INDEX_NAME);
  const match = faunadb.query.Match(index);
  const paginate = faunadb.query.Paginate(match);

  return paginate;
};

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

module.exports = { extractData, client, paginateMatchIndex };
