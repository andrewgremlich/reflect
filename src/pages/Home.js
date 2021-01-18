import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  getPrograms,
  selectAllPrograms,
} from "../features/ProgramsTable/ProgramsTable.slice";
import { setSelectedProgram } from "../features/Viewer/Viewer.slice";

import { Swiper, SwiperSlide } from "swiper/react";

/**
 * Home page to show all the programs in the system.
 */
export const Home = () => {
  const dispatch = useDispatch();

  const allPrograms = useSelector(selectAllPrograms);

  useEffect(() => {
    if (!allPrograms) {
      dispatch(getPrograms());
    }
  }, [dispatch, allPrograms]);

  return allPrograms ? (
    <Swiper>
      {allPrograms?.map(({ name, description, id, sets }) => (
        <SwiperSlide
          key={id}
          onClick={() =>
            dispatch(setSelectedProgram({ name, description, id, sets }))
          }
        >
          <div className="detail-block flex-center">
            <h2>
              <Link to={`/program/${id}`}>{name}</Link>
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <h2>no programs...</h2>
  );
};
