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
import {
  getExerciseSets,
  selectAllExerciseSets,
} from "../features/ExerciseSetsTable/ExerciseSetsTable.slice";

import { ProgramsForm } from "../components/ProgramsForm";
import { ProgramsTableView } from "../components/ProgramsTableView";

export const ProgramsAdmin = () => {
  const dispatch = useDispatch();

  const allPrograms = useSelector(selectAllPrograms);
  const allExerciseSets = useSelector(selectAllExerciseSets);
  const editProgram = useSelector(selectEditProgram);

  const [inputValue, setInputValue] = useState({
    name: "",
    description: "",
    sets: [],
  });

  const editData = {
    ...editProgram,
    sets: allExerciseSets,
  };

  useEffect(() => {
    dispatch(getPrograms());
    dispatch(getExerciseSets());
  }, [dispatch]);

  return (
    <Fragment>
      <Administration
        {...{
          name: "Program",
          create: () => dispatch(createProgram(inputValue)),
          modify: () =>
            dispatch(modifyProgram({ ...inputValue, id: editProgram.id })),
          editData,
        }}
      >
        <ProgramsForm
          {...{ inputValue, setInputValue, sets: allExerciseSets }}
        />
      </Administration>
      <ProgramsTableView
        data={allPrograms}
        setEdit={(program) => {
          dispatch(setEditProgram(program));
          dispatch(switchEdit());
        }}
      />
    </Fragment>
  );
};
