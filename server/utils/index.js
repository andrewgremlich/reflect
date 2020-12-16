const md5 = require("md5");
const { v4: uuidv4 } = require("uuid");

const matchKeys = (a, b) => {
  let keysMatch = true;

  Object.keys(b).forEach((key) => {
    if (!Object.keys(a).includes(key)) {
      keysMatch = false;
    }
  });

  return keysMatch;
};

const successfulResponse = (message, options, additionalItems) => {
  let baseResponse = {
    message,
    loaded: true,
  };

  if (options?.makeMd5) {
    baseResponse = {
      ...baseResponse,
      md5: md5(baseResponse),
    };
  }

  if (options?.makeId) {
    baseResponse = {
      ...baseResponse,
      id: uuidv4(),
    };
  }

  if (additionalItems) {
    baseResponse = {
      ...baseResponse,
      ...additionalItems,
    };
  }

  return baseResponse;
};

module.exports = {
  matchKeys,
  successfulResponse,
};
