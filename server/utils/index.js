const matchKeys = (a, b) => {
  let keysMatch = true;

  Object.keys(b).forEach((key) => {
    if (!Object.keys(a).includes(key)) {
      keysMatch = false;
    }
  });

  return keysMatch;
};

module.exports = {
  matchKeys,
};
