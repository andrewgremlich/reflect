import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getSelectedProgram,
  getProgram,
  setSelectedSet,
} from "../features/Viewer/Viewer.slice";

import { Swiper, SwiperSlide } from "swiper/react";

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

  return selectedProgram ? (
    <Swiper>
      {selectedProgram?.sets.map((set) => (
        <SwiperSlide onClick={() => dispatch(setSelectedSet(set))} key={set.id}>
          <div className="detail-block flex-center flex-column">
            <h2>
              <Link to={`/set/${set.id}`}>{set.name}</Link>
            </h2>
            <p>{set.description}</p>
            {set.exerciseGroups.map((group, index) => (
              <p key={index}>{group}</p>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <h2>No set data... :(</h2>
  );
};
