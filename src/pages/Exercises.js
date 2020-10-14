import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Nav } from "../features/Nav";
import { Administration } from "../features/Administration";
import { switchEdit } from "../features/Administration/Administration.slice";

import {
  getExercises,
  selectAllExercises,
  createExercise,
  modifyExercise,
  selectEditExercise,
  setEditExercise,
} from "../features/ExercisesTable/ExercisesTable.slice";

import {
  getExerciseSets,
  selectAllExerciseSets,
} from "../features/ExerciseSetsTable/ExerciseSetsTable.slice";

import { ExerciseForm } from "../components/ExerciseForm";
import { ExercisesTableView } from "../components/ExercisesTableView";

export const Exercises = () => {
  const dispatch = useDispatch();

  const allExercises = useSelector(selectAllExercises);
  const editExercise = useSelector(selectEditExercise);

  const allExerciseSets = useSelector(selectAllExerciseSets);

  const [inputValue, setInputValue] = useState({
    name: "",
    description: "",
    svgId: "",
    exerciseGroups: [],
    sets: [],
    difficulty: 1,
  });

  useEffect(() => {
    dispatch(getExercises());
    dispatch(getExerciseSets());
  }, [dispatch]);

  console.log(allExercises);

  return (
    <div>
      <Nav />
      <Administration
        name="Exercise"
        create={() => dispatch(createExercise(inputValue))}
        modify={() =>
          dispatch(
            modifyExercise({
              ...inputValue,
              id: editExercise.id,
            })
          )
        }
        editData={editExercise}
      >
        <ExerciseForm
          {...{
            allExerciseSets,
            inputValue,
            setInputValue,
          }}
        />
      </Administration>
      <ExercisesTableView
        data={allExercises}
        setEdit={(exercise) => {
          dispatch(setEditExercise(exercise));
          dispatch(switchEdit());
        }}
      />
    </div>
  );
};
