import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Nav } from "../features/Nav";
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
    <div>
      <Nav />
      <h1>Home Page.</h1>
      {allPrograms.map(({ name, description, id }) => (
        <ProgramSelector key={id} {...{ setId: id, name, description }} />
      ))}
    </div>
  );
};
