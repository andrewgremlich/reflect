import { jsonFetch, JSON_POST, JSON_PUT } from "../../utility";

import { setAllExercises } from "./ExercisesTable.slice";

const EXERCISES_ROOT_API = "/.netlify/functions/index/exercises";

export const getExercises = () => (dispatch) => {
  jsonFetch(`${EXERCISES_ROOT_API}/all`).then((exercises) => {
    dispatch(setAllExercises(exercises));
  });
};

export const createExercise = (payload) => (dispatch) => {
  jsonFetch(`${EXERCISES_ROOT_API}/create`, {
    body: JSON.stringify(payload),
    ...JSON_POST,
  }).then((resp) => dispatch(getExercises()));
};

export const modifyExercise = ({
  id,
  name,
  description,
  svgId,
  exerciseGroups,
  set,
  difficulty,
}) => (dispatch) => {
  jsonFetch(`${EXERCISES_ROOT_API}/${id}`, {
    body: JSON.stringify({
      name,
      description,
      svgId,
      exerciseGroups,
      sets: set,
      difficulty,
    }),
    ...JSON_PUT,
  }).then((resp) => dispatch(getExercises()));
};
