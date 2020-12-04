import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Nav } from "../features/Nav";
import { ProgramSelector } from "../components/ProgramSelector";
import { ProgramView } from "../components/ProgramView";

import {
  getPrograms,
  selectAllPrograms,
} from "../features/ProgramsTable/ProgramsTable.slice";

export const Home = () => {
  const dispatch = useDispatch();

  const allPrograms = useSelector(selectAllPrograms);

  const [exerciseGroup, setExerciseGroup] = useState("");
  const [program, setProgram] = useState(undefined);
  const [selectedSet, setSelectedSet] = useState(undefined);

  useEffect(() => {
    dispatch(getPrograms());
  }, [dispatch]);

  console.log(exerciseGroup);
  console.log(program);

  return (
    <div>
      <Nav />
      <h1>Home Page.</h1>
      {program ? (
        <ProgramView
          {...{ setProgram, name: program.name, sets: program.sets }}
        />
      ) : (
        allPrograms.map(({ name, description, id, sets }) => (
          <ProgramSelector
            key={id}
            activateProgram={(data) => {
              setProgram(data);
            }}
            {...{ name, description, sets }}
          />
        ))
      )}
    </div>
  );
};
