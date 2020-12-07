// I am putting this into the `./feature` folder because I want to
// integrate local storage or index db for analytics

import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Nav } from "../features/Nav";

import {
  getExerciseSet,
  selectAllExerciseSets,
  selectExerciseGroup,
} from "../features/ExerciseSetsTable/ExerciseSetsTable.slice";

export const Sets = () => {
  const { id: exercsiceSetId } = useParams();
  const dispatch = useDispatch();

  const selectedExerciseSet = useSelector(selectAllExerciseSets);
  const selectedExerciseGroup = useSelector(selectExerciseGroup);

  useEffect(() => {
    dispatch(getExerciseSet(exercsiceSetId));
  }, [dispatch, exercsiceSetId]);

  return (
    <Fragment>
      <h1>Set View</h1>
    </Fragment>
  );
};
