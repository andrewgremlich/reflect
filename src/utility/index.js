export const jsonFetch = (url, options) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((data) => data.json())
      .then((parsedJson) => resolve(parsedJson))
      .catch((err) => reject(err));
  });
};

const JSON = {
  "Content-Type": "application/json",
};

export const JSON_PUT = {
  headers: { ...JSON },
  method: "PUT",
};

export const JSON_POST = {
  headers: { ...JSON },
  method: "POST",
};