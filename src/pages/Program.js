import React, { useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getSelectedProgram,
  getProgram,
} from "../features/Viewer/Viewer.slice";

const setsDisplayer = (set) => (
  <Fragment key={set.id}>
    <h3>{set.name}</h3>
    <p>{set.description}</p>
    {set.exerciseGroups.map((group, index) => (
      <p key={index}>{group}</p>
    ))}
  </Fragment>
);

export const Program = () => {
  const { id: programId } = useParams();

  const dispatch = useDispatch();

  const selectedProgram = useSelector(getSelectedProgram);

  useEffect(() => {
    if (!selectedProgram) {
      dispatch(getProgram(programId));
    }
  }, [dispatch, programId, selectedProgram]);

  return (
    <Fragment>
      <h1>Program Home</h1>
      {selectedProgram && selectedProgram.sets.map(setsDisplayer)}
    </Fragment>
  );
};
