import React, { useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getProgram,
  selectAllPrograms,
} from "../features/ProgramsTable/ProgramsTable.slice";

import { SetsViewer } from "../components/SetsViewer";

export const Program = () => {
  const { id: programId } = useParams();

  const dispatch = useDispatch();

  const programs = useSelector(selectAllPrograms);

  useEffect(() => {
    if (programs) {
      dispatch(getProgram(programId));
    }
  }, [dispatch, programId]);

  console.log(
    programs.filter((program) => {
      console.log(program);
      return true;
    })
  );

  return (
    <Fragment>
      <h1>Program Home</h1>
      {/* {programs
        .filter((program) => program.id === programId)
        .map((program) => (
          <SetsViewer />
        ))} */}
    </Fragment>
  );
};
