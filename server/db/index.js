const faunadb = require("faunadb");

const {
  Get,
  Ref,
  Collection,
  Create,
  Replace,
  Map,
  Paginate,
  Match,
  Index,
  Lambda,
  Var,
} = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_KEY,
});

const extractData = (data) => {
  const mappedData = data.map((document) => ({
    ...document.data,
    id: document.ref.value.id,
  }));

  return mappedData;
};

const getDocByIdFromCollection = async (collectionName, id) => {
  const collection = Collection(collectionName);
  const ref = Ref(collection, id);
  const getRef = Get(ref);

  try {
    const { data } = await client.query(getRef);
    return { data, loaded: true };
  } catch (err) {
    const {
      description,
      requestResult: { statusCode },
    } = err;

    return { data: { statusCode, description }, loaded: false };
  }
};

const postBodyInCollection = async (collectionName, body) => {
  const collection = Collection(collectionName);
  const createDocInCollection = Create(collection, {
    data: body,
  });

  try {
    const { data } = await client.query(createDocInCollection);

    return { data, loaded: true };
  } catch (err) {
    const {
      description,
      requestResult: { statusCode },
    } = err;

    return { data: { statusCode, description }, loaded: false };
  }
};

const updateDocInCollection = async (collectionName, id, body) => {
  const collection = Collection(collectionName);
  const ref = Ref(collection, id);
  const replaceDoc = Replace(ref, {
    data: body,
  });

  try {
    const { data } = await client.query(replaceDoc);
    return { data, loaded: true };
  } catch (err) {
    const {
      description,
      requestResult: { statusCode },
    } = err;

    return { data: { statusCode, description }, loaded: false };
  }
};

const getIndexResultByInput = async (input, indexName) => {
  const index = Index(indexName);
  const matchIndex = Match(index, input);
  const paginateMatchIndex = Paginate(matchIndex);

  try {
    const { data } = await client.query(
      Map(paginateMatchIndex, Lambda("X", Get(Var("X"))))
    );

    return {
      data: extractData(data),
      loaded: true,
    };
  } catch (err) {
    const {
      description,
      requestResult: { statusCode },
    } = err;

    return { data: { statusCode, description }, loaded: false };
  }
};

const getAllDocumentsInCollection = async (IndexName) => {
  const index = Index(IndexName);
  const matchIndex = Match(index);
  const paginateMatchIndex = Paginate(matchIndex);

  try {
    const { data } = await client.query(
      Map(paginateMatchIndex, Lambda("X", Get(Var("X"))))
    );

    return { data: extractData(data), loaded: true };
  } catch (err) {
    const {
      description,
      requestResult: { statusCode },
    } = err;

    return { data: { statusCode, description }, loaded: false };
  }
};

module.exports = {
  getDocByIdFromCollection,
  postBodyInCollection,
  updateDocInCollection,
  getAllDocumentsInCollection,
  getMetaGroupByName: getIndexResultByInput,
};
