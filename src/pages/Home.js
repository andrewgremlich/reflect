import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProgramSelector } from "../components/ProgramSelector";

import {
  getPrograms,
  selectAllPrograms,
} from "../features/ProgramsTable/ProgramsTable.slice";

export const Home = () => {
  const dispatch = useDispatch();

  const allPrograms = useSelector(selectAllPrograms);

  useEffect(() => {
    dispatch(getPrograms());
  }, [dispatch]);

  return (
    <Fragment>
      <h1>Home Page.</h1>
      {allPrograms.map(({ name, description, id }) => (
        <ProgramSelector key={id} {...{ setId: id, name, description }} />
      ))}
    </Fragment>
  );
};
