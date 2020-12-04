import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Nav } from "../features/Nav";
import {
  getProgram,
  selectAllPrograms,
} from "../features/ProgramsTable/ProgramsTable.slice";

export const ProgramHome = () => {
  const { id: programId } = useParams();

  const dispatch = useDispatch();

  const programs = useSelector(selectAllPrograms);

  useEffect(() => {
    dispatch(getProgram(programId));
  }, [dispatch, programId]);

  console.log(programs);

  return (
    <div>
      <Nav />
      <h3>Program Home</h3>
    </div>
  );
};
