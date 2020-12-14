import React, { useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getSelectedProgram,
  getProgram,
  setSelectedSet,
} from "../features/Viewer/Viewer.slice";

export const Program = () => {
  const { id: programId } = useParams();

  const dispatch = useDispatch();

  const selectedProgram = useSelector(getSelectedProgram);

  useEffect(() => {
    if (!selectedProgram || programId !== selectedProgram.id) {
      dispatch(getProgram(programId));
    }
  }, [dispatch, programId, selectedProgram]);

  return (
    <Fragment>
      <h1>Program Home</h1>
      {selectedProgram &&
        selectedProgram.sets.map((set) => (
          <div onClick={() => dispatch(setSelectedSet(set))} key={set.id}>
            <h3>
              <Link to={`/set/${set.id}`}>{set.name}</Link>
            </h3>
            <p>{set.description}</p>
            {set.exerciseGroups.map((group, index) => (
              <p key={index}>{group}</p>
            ))}
          </div>
        ))}
    </Fragment>
  );
};
