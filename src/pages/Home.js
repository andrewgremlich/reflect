import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  getPrograms,
  selectAllPrograms,
} from "../features/ProgramsTable/ProgramsTable.slice";
import { setSelectedProgram } from "../features/Viewer/Viewer.slice";

export const Home = () => {
  const dispatch = useDispatch();

  const allPrograms = useSelector(selectAllPrograms);

  useEffect(() => {
    if (!allPrograms) {
      dispatch(getPrograms());
    }
  }, [dispatch, allPrograms]);

  return (
    <main>
      {allPrograms?.map(({ name, description, id, sets }) => (
        <div
          key={id}
          onClick={() =>
            dispatch(setSelectedProgram({ name, description, id, sets }))
          }
        >
          <h2 className="detail-block">
            <Link to={`/program/${id}`}>{name}</Link>
          </h2>
        </div>
      ))}
    </main>
  );
};
