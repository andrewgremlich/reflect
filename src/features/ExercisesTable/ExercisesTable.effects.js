import { jsonFetch, JSON_POST, JSON_PUT } from "../../utility";

import { setAllExercises } from "./ExercisesTable.slice";

const EXERCISES_ROOT_API = "/.netlify/functions/index/exercises";

export const getExercises = (exerciseGroup) => (dispatch) => {
  const fetchString = `${EXERCISES_ROOT_API}/group?exerciseGroupName=${exerciseGroup}`;
  const fetchStringURIEncoded = encodeURI(fetchString);

  jsonFetch(fetchStringURIEncoded).then((exercises) => {
    dispatch(setAllExercises(exercises));
  });
};

export const createExercise = (payload) => (dispatch) => {
  jsonFetch(`${EXERCISES_ROOT_API}/create`, {
    body: JSON.stringify(payload),
    ...JSON_POST,
  }).then((resp) => dispatch(getExercises(payload.exerciseGroup)));
};

export const modifyExercise = ({
  id,
  name,
  description,
  svgId,
  exerciseGroup,
  difficulty,
}) => (dispatch) => {
  jsonFetch(`${EXERCISES_ROOT_API}/${id}`, {
    body: JSON.stringify({
      name,
      description,
      svgId,
      exerciseGroup,
      difficulty,
    }),
    ...JSON_PUT,
  }).then((resp) => dispatch(getExercises(exerciseGroup)));
};
