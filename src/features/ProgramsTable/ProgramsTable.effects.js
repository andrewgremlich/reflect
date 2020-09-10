import { setAllPrograms } from "./programsTableSlice.js";

const PROGRAMS_ROOT_API = "/.netlify/functions/index/programs";

export const getPrograms = () => (dispatch) => {
  fetch(`${PROGRAMS_ROOT_API}/all`)
    .then((data) => data.json())
    .then((allPrograms) => {
      dispatch(setAllPrograms(allPrograms));
    });
};

export const createProgram = (payload) => (dispatch) => {
  fetch(`${PROGRAMS_ROOT_API}/create`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  })
    .then((data) => data.json())
    .then((resp) => {
      console.log(resp);
      dispatch(getPrograms());
    });
};

export const modifyProgram = ({ id, description, name, exerciseGroups }) => (
  dispatch
) => {
  fetch(`${PROGRAMS_ROOT_API}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify({ description, name, exerciseGroups }),
  })
    .then((data) => data.json())
    .then((resp) => {
      console.log(resp);
      dispatch(getPrograms());
    });
};
