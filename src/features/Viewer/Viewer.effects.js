import { jsonFetch } from "../../utility";

import { setSelectedProgram } from "./Viewer.slice";

const PROGRAMS_ROOT_API = "/.netlify/functions/index/programs";

export const getProgram = (id) => (dispatch) => {
  jsonFetch(`${PROGRAMS_ROOT_API}/${id}`).then((program) => {
    dispatch(setSelectedProgram(program));
  });
};
