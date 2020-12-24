import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Administration } from "../features/Administration";
import { switchEdit } from "../features/Administration/Administration.slice";
import {
  getPrograms,
  createProgram,
  modifyProgram,
  selectAllPrograms,
  setEditProgram,
  selectEditProgram,
} from "../features/ProgramsTable/ProgramsTable.slice";
import { getSets, selectAllSets } from "../features/SetsTable/SetsTable.slice";

import { ProgramsForm } from "../components/ProgramsForm";
import { ProgramsTableView } from "../components/ProgramsTableView";

export const ProgramsAdmin = () => {
  const dispatch = useDispatch();

  const allPrograms = useSelector(selectAllPrograms);
  const allSets = useSelector(selectAllSets);
  const editProgram = useSelector(selectEditProgram);

  const [inputValue, setInputValue] = useState({
    name: "",
    description: "",
    sets: [],
  });

  const editData = {
    ...editProgram,
    sets: allSets,
  };

  useEffect(() => {
    if (!allPrograms) {
      dispatch(getPrograms());
    }

    if (!allSets) {
      dispatch(getSets());
    }
  }, [dispatch, allPrograms, allSets]);

  return (
    <section>
      <Administration
        {...{
          name: "Program",
          create: () => dispatch(createProgram(inputValue)),
          modify: () =>
            dispatch(modifyProgram({ ...inputValue, id: editProgram.id })),
          editData,
        }}
      >
        <ProgramsForm {...{ inputValue, setInputValue, sets: allSets }} />
      </Administration>
      <ProgramsTableView
        data={allPrograms}
        setEdit={(program) => {
          dispatch(setEditProgram(program));
          dispatch(switchEdit());
        }}
      />
    </section>
  );
};
