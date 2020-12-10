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
    return groups
      .map((group) => `exerciseGroupName=${encodeURI(group)}`)
      .join("&");
  } else {
    return `exerciseGroupName=${groups}`;
  }
};

export const getProgram = (id) => (dispatch) => {
  jsonFetch(`${PROGRAMS_ROOT_API}/${id}`).then((program) => {
    dispatch(setSelectedProgram(program));
  });
};

export const getSet = (id) => (dispatch) => {
  jsonFetch(`${SETS_ROOT_API}/${id}`).then((set) => {
    dispatch(setSelectedSet(set));
  });
};

export const getGroup = (groupNames) => (dispatch) => {
  jsonFetch(
    `${EXERCISES_ROOT_API}/group?${makeGroupNameQueryString(groupNames)}`
  ).then((group) => {
    dispatch(setSelectedGroup(group));
  });
};
