import { jsonFetch, JSON_PUT, JSON_POST } from "../../utility";

import { setAllExerciseSets } from "./ExerciseSetsTable.slice";

const EXERCISE_SETS_ROOT_API = "/.netlify/functions/index/sets";

export const getExerciseSets = () => (dispatch) => {
  jsonFetch(`${EXERCISE_SETS_ROOT_API}/all`).then((allExerciseSets) =>
    dispatch(setAllExerciseSets(allExerciseSets))
  );
};

export const getExerciseSet = (id) => (dispatch) => {
  jsonFetch(`${EXERCISE_SETS_ROOT_API}/${id}`).then((exerciseSet) =>
    dispatch(setAllExerciseSets(exerciseSet))
  );
};

export const createExerciseSet = (payload) => (dispatch) => {
  jsonFetch(`${EXERCISE_SETS_ROOT_API}/create`, {
    body: JSON.stringify(payload),
    ...JSON_POST,
  }).then((resp) => dispatch(getExerciseSets()));
};

export const modifyExerciseSet = ({
  id,
  description,
  name,
  exerciseGroups,
}) => (dispatch) => {
  jsonFetch(`${EXERCISE_SETS_ROOT_API}/${id}`, {
    body: JSON.stringify({ description, name, exerciseGroups }),
    ...JSON_PUT,
  }).then((resp) => dispatch(getExerciseSets()));
};
