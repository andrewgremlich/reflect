import React, { Fragment, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getSelectedProgram,
  getProgram,
  setSelectedSet,
} from "../features/Viewer/Viewer.slice";

import { Swiper } from "../components/Swiper";

/**
 * Program page to see the sets in a program.
 */
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
      {selectedProgram ? (
        <Swiper>
          {selectedProgram?.sets.map((set) => (
            <div onClick={() => dispatch(setSelectedSet(set))} key={set.id}>
              <div className="detail-block">
                <h2>
                  <Link to={`/set/${set.id}`}>{set.name}</Link>
                </h2>
                <p>{set.description}</p>
                {set.exerciseGroups.map((group, index) => (
                  <p key={index}>{group}</p>
                ))}
              </div>
            </div>
          ))}
        </Swiper>
      ) : (
        <h2>No set data... :(</h2>
      )}
    </main>
  );
};
