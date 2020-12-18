import { jsonFetch } from "../../utility";

import {
  setSelectedGroup,
  setSelectedProgram,
  setSelectedSet,
} from "./Viewer.slice";

const PROGRAMS_ROOT_API = "/.netlify/functions/index/programs";
const SETS_ROOT_API = "/.netlify/functions/index/sets";
const EXERCISES_ROOT_API = "/.netlify/functions/index/exercises";

const makeGroupNameQueryString = (groups) => {
  if (Array.isArray(groups)) {
    return groups.map((group) => `groupName=${encodeURI(group)}`).join("&");
  } else {
    return `groupName=${groups}`;
  }
};

export const getProgram = (id) => (dispatch) => {
  jsonFetch(`${PROGRAMS_ROOT_API}/getProgramById/${id}`).then((program) => {
    dispatch(setSelectedProgram(program.data));
  });
};

export const getSet = (id) => (dispatch) => {
  jsonFetch(`${SETS_ROOT_API}/getSetById/${id}`).then((set) => {
    dispatch(setSelectedSet(set.data));
  });
};

export const getGroup = (groupNames) => (dispatch) => {
  jsonFetch(
    `${EXERCISES_ROOT_API}/getExercisesByGroupName?${makeGroupNameQueryString(
      groupNames
    )}`
  ).then((group) => {
    dispatch(setSelectedGroup(group.data));
  });
};
