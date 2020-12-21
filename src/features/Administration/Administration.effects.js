import { jsonFetch } from "../../utility";

import { setExerciseGroups } from "./Administration.slice";

const META_ROOT_API = "/.netlify/functions/index/meta";

const getMetaGroup = (groupName) => {
  return new Promise((resolve, reject) => {
    jsonFetch(`${META_ROOT_API}/getMetaGroup/${groupName}`).then(
      ({ data: [{ data: groupData }], loaded }) => {
        if (loaded) {
          resolve(groupData);
        } else {
          reject(`could not load meta group ${groupName}`);
        }
      },
    );
  });
};

export const getExerciseGroup = () => (dispatch) => {
  getMetaGroup("exercise-groups").then((groupData) => {
    dispatch(setExerciseGroups(groupData));
  });
};
