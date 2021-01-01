import React, { useEffect } from "react";
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
    <main>
      {selectedProgram?.sets.map((set) => (
        <div
          className="detail-block"
          onClick={() => dispatch(setSelectedSet(set))}
          key={set.id}
        >
          <h2>
            <Link to={`/set/${set.id}`}>{set.name}</Link>
          </h2>
          <p>{set.description}</p>
          {set.exerciseGroups.map((group, index) => (
            <p key={index}>{group}</p>
          ))}
        </div>
      ))}
    </main>
  );
};
