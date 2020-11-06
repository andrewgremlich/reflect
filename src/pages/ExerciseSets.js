import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Nav } from "../features/Nav";
import { Administration } from "../features/Administration";
import { switchEdit } from "../features/Administration/Administration.slice";
import {
  getExerciseSets,
  createExerciseSet,
  modifyExerciseSet,
  selectAllExerciseSets,
  setEditExerciseSet,
  selectEditExerciseSet,
} from "../features/ExerciseSetsTable/ExerciseSetsTable.slice";

import { ExerciseSetsForm } from "../components/ExerciseSetsForm";
import { ExerciseSetsTableView } from "../components/ExerciseSetsTableView";

export const ExerciseSets = () => {
  const dispatch = useDispatch();

  const allExerciseSets = useSelector(selectAllExerciseSets);
  const editExerciseSet = useSelector(selectEditExerciseSet);

  const [inputValue, setInputValue] = useState({
    name: "",
    description: "",
  });

  const editData = {
    ...editExerciseSet,
  };

  useEffect(() => {
    dispatch(getExerciseSets());
  }, [dispatch]);

  return (
    <div>
      <Nav />
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
          {...{ inputValue, setInputValue }}
        />
      </Administration>
      <ExerciseSetsTableView
        {...{
          data: allExerciseSets,
          setEdit: (exerciseSet) => {
            dispatch(setEditExerciseSet(exerciseSet));
            dispatch(switchEdit());
          },
        }}
      />
    </div>
  );
};
