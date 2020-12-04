// I am putting this into the `./feature` folder because I want to
// integrate local storage or index db for analytics

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Nav } from "../features/Nav";

import {
  getExerciseSet,
  selectAllExerciseSets,
} from "../features/ExerciseSetsTable/ExerciseSetsTable.slice";

export const SetView = () => {
  const { id: exercsiceSetId } = useParams();
  const dispatch = useDispatch();

  const selectedExerciseSet = useSelector(selectAllExerciseSets);

  useEffect(() => {
    //TODO: there needs to be some combination API call to get the exercises related to
    // the exercise groups
    dispatch(getExerciseSet(exercsiceSetId));
  }, [dispatch]);

  console.log(selectedExerciseSet);

  return (
    <div>
      <Nav />
      <h1>Set View</h1>
    </div>
  );
};
