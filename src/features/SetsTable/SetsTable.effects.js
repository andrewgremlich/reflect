import { jsonFetch, JSON_PUT, JSON_POST } from "../../utility";

import { setAllSets, setSelectedGroup } from "./SetsTable.slice";

const EXERCISE_SETS_ROOT_API = "/.netlify/functions/index/sets";

export const getSets = () => (dispatch) => {
  jsonFetch(`${EXERCISE_SETS_ROOT_API}/allSets`).then(({ data }) =>
    dispatch(setAllSets(data)),
  );
};

export const getSet = (id) => (dispatch) => {
  jsonFetch(`${EXERCISE_SETS_ROOT_API}/getSetById/${id}`).then(
    (exerciseSet) => {
      dispatch(setAllSets([exerciseSet]));
      dispatch(setSelectedGroup(exerciseSet.exerciseGroups[0]));
    },
  );
};

export const createSet = (payload) => (dispatch) => {
  jsonFetch(`${EXERCISE_SETS_ROOT_API}/createSet`, {
    body: JSON.stringify(payload),
    ...JSON_POST,
  }).then((resp) => dispatch(getSets()));
};

export const modifySet = ({ id, description, name, exerciseGroups }) => (
  dispatch,
) => {
  jsonFetch(`${EXERCISE_SETS_ROOT_API}/updateSetById/${id}`, {
    body: JSON.stringify({ description, name, exerciseGroups }),
    ...JSON_PUT,
  }).then((resp) => dispatch(getSets()));
};
