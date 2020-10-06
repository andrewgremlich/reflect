import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Nav } from "../features/Nav";
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

import { ProgramsForm } from "../components/ProgramsForm";
import { ProgramsTableView } from "../components/ProgramsTableView";

export const Programs = () => {
  const dispatch = useDispatch();

  const allPrograms = useSelector(selectAllPrograms);
  const editProgram = useSelector(selectEditProgram);

  const [inputValue, setInputValue] = useState({
    name: "",
    description: "",
    sets: [],
  });

  useEffect(() => {
    dispatch(getPrograms());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <Administration
        name={"Program"}
        create={() => dispatch(createProgram(inputValue))}
        modify={() =>
          dispatch(modifyProgram({ ...inputValue, id: editProgram.id }))
        }
        editData={editProgram}
      >
        <ProgramsForm {...{ inputValue, setInputValue }} />
      </Administration>
      <ProgramsTableView
        data={allPrograms}
        setEdit={(program) => {
          dispatch(setEditProgram(program));
          dispatch(switchEdit());
        }}
      />
    </div>
  );
};
