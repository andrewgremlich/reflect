import React, { useEffect, useState } from "react";
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

  const [sortByExerciseGroup, setSortByExerciseGroup] = useState("");
  const [program, setProgram] = useState({});

  useEffect(() => {
    dispatch(getPrograms());
  }, [dispatch]);

  console.log(sortByExerciseGroup);
  console.log(program);

  return (
    <div>
      <Nav />
      <h1>Home Page.</h1>
      {allPrograms.map(({ name, description, id, sets }) => (
        <ProgramSelector
          key={id}
          activateProgram={(data) => {
            setProgram(data);
          }}
          {...{ name, description, sets }}
        />
      ))}
    </div>
  );
};
