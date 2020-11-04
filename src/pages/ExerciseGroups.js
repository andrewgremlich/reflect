import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Nav } from "../features/Nav";
import { Administration } from "../features/Administration";
import { switchEdit } from "../features/Administration/Administration.slice";
import {
  setEditExerciseGroup,
  selectAllExerciseGroups,
  selectEditExerciseGroup,
  getExerciseGroups,
  createExerciseGroup,
  modifyExerciseGroup,
} from "../features/ExerciseGroupsTable/ExerciseGroupsTable.slice";
import {
  getExercises,
  selectAllExercises,
} from "../features/ExercisesTable/ExercisesTable.slice";

import { ExerciseGroupsForm } from "../components/ExerciseGroupsForm/index.js";
import { ExerciseGroupsTableView } from "../components/ExerciseGroupsTableView";

export const ExerciseGroups = () => {
  const dispatch = useDispatch();

  const allExerciseGroups = useSelector(selectAllExerciseGroups);
  const allExercises = useSelector(selectAllExercises);
  const editExerciseGroup = useSelector(selectEditExerciseGroup);

  const [inputValue, setInputValue] = useState({
    group: "",
    description: "",
    exercises: [],
  });

  const editData = {
    ...editExerciseGroup,
    exercises: allExercises,
  };

  useEffect(() => {
    dispatch(getExerciseGroups());
    dispatch(getExercises());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <Administration
        {...{
          name: "Exercise Group",
          create: () => dispatch(createExerciseGroup(inputValue)),
          modify: () =>
            dispatch(
              modifyExerciseGroup({ ...inputValue, id: editExerciseGroup.id })
            ),
          editData,
        }}
      >
        <ExerciseGroupsForm
          {...{ inputValue, setInputValue, exercises: allExercises }}
        />
      </Administration>
      <ExerciseGroupsTableView
        {...{
          data: allExerciseGroups,
          setEdit: (exerciseGroup) => {
            dispatch(setEditExerciseGroup(exerciseGroup));
            dispatch(switchEdit());
          },
        }}
      />
    </div>
  );
};
