import { jsonFetch } from "../../utility";

import { setExerciseGroups } from "./Administration.slice";

const META_ROOT_API = "/.netlify/functions/index/meta";

const getMetaGroup = (groupName) => {
  return new Promise((resolve, reject) => {
    jsonFetch(`${META_ROOT_API}/${groupName}`).then((metaGroup) => {
      if (metaGroup.loaded) {
        resolve(metaGroup.data[0]);
      } else {
        reject(`could not load meta group ${groupName}`);
      }
    });
  });
};

export const getExerciseGroup = () => (dispatch) => {
  getMetaGroup("exercise-groups").then((groupData) => {
    dispatch(setExerciseGroups(groupData));
  });
};
