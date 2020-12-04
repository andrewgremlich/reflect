import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getExercises,
  selectAllExercises,
} from "../ExercisesTable/ExercisesTable.slice";

import {
  selectExerciseGroup,
  selectAllExerciseSets,
} from "../ExerciseSetsTable/ExerciseSetsTable.slice";

export const ExerciseGroupsView = ({ groupsInSet, selectedExerciseGroup }) => {
  const dispatch = useDispatch();

  const exerciseGroup = useSelector(selectExerciseGroup);
  const selectedExercises = useSelector(selectAllExercises);

  useEffect(() => {
    dispatch(getExercises(selectedExerciseGroup));
  }, [dispatch, selectedExerciseGroup]);

  console.log(groupsInSet);
  console.log(selectedExerciseGroup);
  console.log(selectedExercises);

  return (
    <div>
      <h2>Exercise Group</h2>
      <h3>{exerciseGroup}</h3>
    </div>
  );
};
