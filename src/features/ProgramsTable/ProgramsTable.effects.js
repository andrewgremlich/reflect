import { jsonFetch, JSON_PUT, JSON_POST } from "../../utility";

import { setAllPrograms } from "./ProgramsTable.slice.js";

const PROGRAMS_ROOT_API = "/.netlify/functions/index/programs";

export const getPrograms = () => (dispatch) => {
  jsonFetch(`${PROGRAMS_ROOT_API}/allPrograms`).then(({ data }) =>
    dispatch(setAllPrograms(data)),
  );
};

export const createProgram = (payload) => (dispatch) => {
  jsonFetch(`${PROGRAMS_ROOT_API}/createProgram`, {
    body: JSON.stringify(payload),
    ...JSON_POST,
  }).then((resp) => dispatch(getPrograms()));
};

export const modifyProgram = ({ id, description, name, sets }) => (
  dispatch,
) => {
  jsonFetch(`${PROGRAMS_ROOT_API}/updateProgramById/${id}`, {
    body: JSON.stringify({ description, name, sets }),
    ...JSON_PUT,
  }).then((resp) => dispatch(getPrograms()));
};
