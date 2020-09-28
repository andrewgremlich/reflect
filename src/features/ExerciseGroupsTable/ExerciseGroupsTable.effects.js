import { jsonFetch, JSON_POST, JSON_PUT } from "../../utility";

import { setAllExerciseGroups } from "./ExerciseGroupsTable.slice";

const EXERCISE_GROUPS_API = "/.netlify/functions/index/exerciseGroups";

export const getExerciseGroups = () => (dispatch) => {
  jsonFetch(`${EXERCISE_GROUPS_API}/all`).then((allPrograms) => {
    dispatch(setAllExerciseGroups(allPrograms));
  });
};

export const createExerciseGroup = (payload) => (dispatch) => {
  jsonFetch(`${EXERCISE_GROUPS_API}/create`, {
    body: JSON.stringify(payload),
    ...JSON_POST,
  }).then((resp) => dispatch(getExerciseGroups()));
};

export const modifyExerciseGroup = ({ id, group, description, exercises }) => (
  dispatch
) => {
  jsonFetch(`${EXERCISE_GROUPS_API}/${id}`, {
    body: JSON.stringify({ group, description, exercises }),
    ...JSON_PUT,
  }).then((resp) => dispatch(getExerciseGroups()));
};
