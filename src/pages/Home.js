import React, { useEffect, Fragment } from "react";
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
    dispatch(getPrograms());
  }, [dispatch]);

  return (
    <Fragment>
      <h1>Home Page.</h1>
      {allPrograms.map(({ name, description, id, sets }) => (
        <div
          onClick={() =>
            dispatch(setSelectedProgram({ name, description, id, sets }))
          }
          key={id}
        >
          <Link to={`/program/${id}`}>{name}</Link>
          {description && <p>{description}</p>}
        </div>
      ))}
    </Fragment>
  );
};
