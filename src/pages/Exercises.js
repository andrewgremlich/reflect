import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Nav } from "../features/Nav";
import { Administration } from "../features/Administration";
import { switchEdit } from "../features/Administration/Administration.slice";

import {
  getExercises,
  createExercise,
  modifyExercise,
  selectAllExercises,
  selectEditExercise,
  setEditExercise,
} from "../features/ExercisesTable/ExercisesTable.slice";

import { ExerciseForm } from "../components/ExerciseForm";
// import { ExercisesTableView } from "../components/ExercisesTableView";

export const Exercises = () => {
  const dispatch = useDispatch();

  const allExercises = useSelector(selectAllExercises);
  const editExercise = useSelector(selectEditExercise);

  const [inputValue, setInputValue] = useState({
    name: "",
    description: "",
    svgId: "",
    exerciseGroups: [],
    set: [],
    difficulty: 1,
  });

  useEffect(() => {
    dispatch(getExercises());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <h2 style={{ paddingBottom: "20px" }}>Exercises</h2>
      <Administration
        name="Exercise"
        create={() => dispatch(createExercise(inputValue))}
        modify={() =>
          dispatch(modifyExercise({ ...inputValue, id: editExercise.id }))
        }
        editData={editExercise}
      >
        <ExerciseForm {...{ inputValue, setInputValue }} />
      </Administration>
      {/* <ExercisesTableView /> */}
    </div>
  );
};
