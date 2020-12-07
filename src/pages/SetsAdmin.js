import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Administration } from "../features/Administration";
import {
  switchEdit,
  getExerciseGroup,
  selectExerciseGroups,
} from "../features/Administration/Administration.slice";
import {
  getExerciseSets,
  createExerciseSet,
  modifyExerciseSet,
  selectAllExerciseSets,
  setEditExerciseSet,
  selectEditExerciseSet,
} from "../features/ExerciseSetsTable/ExerciseSetsTable.slice";

import { ExerciseSetsForm } from "../components/SetsForm";
import { ExerciseSetsTableView } from "../components/SetsTableView";

export const SetsAdmin = () => {
  const dispatch = useDispatch();

  const allExerciseSets = useSelector(selectAllExerciseSets);
  const editExerciseSet = useSelector(selectEditExerciseSet);
  const allExerciseGroups = useSelector(selectExerciseGroups);

  const [inputValue, setInputValue] = useState({
    name: "",
    description: "",
    exerciseGroups: [],
  });

  const editData = {
    ...editExerciseSet,
  };

  useEffect(() => {
    dispatch(getExerciseSets());
    dispatch(getExerciseGroup());
  }, [dispatch]);

  return (
    <Fragment>
      <Administration
        {...{
          name: "Exercise Set",
          create: () => dispatch(createExerciseSet(inputValue)),
          modify: () =>
            dispatch(
              modifyExerciseSet({ ...inputValue, id: editExerciseSet.id })
            ),
          editData,
        }}
      >
        <ExerciseSetsForm
          {...{ inputValue, setInputValue, exerciseGroups: allExerciseGroups }}
        />
      </Administration>
      <ExerciseSetsTableView
        {...{
          data: allExerciseSets,
          setEdit: (exerciseSet) => {
            dispatch(
              setEditExerciseSet({
                ...exerciseSet,
                exerciseGroups: allExerciseGroups,
              })
            );
            dispatch(switchEdit());
          },
        }}
      />
    </Fragment>
  );
};
