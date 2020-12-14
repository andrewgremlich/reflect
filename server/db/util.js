const faunadb = require("faunadb");

const { v4: uuidv4 } = require("uuid");

const paginateMatchIndex = (INDEX_NAME) => {
  const index = faunadb.query.Index(INDEX_NAME);
  const match = faunadb.query.Match(index);
  const paginate = faunadb.query.Paginate(match);

  return paginate;
};

const extractData = (data) => {
  console.log(data);

  const mappedData = data.map((document) => ({
    ...document.data,
    id: document.ref.value.id,
  }));

  return { data: mappedData, id: uuidv4() };
};

const client = new faunadb.Client({
  secret: process.env.FAUNADB_KEY,
});

module.exports = { extractData, client, paginateMatchIndex };
