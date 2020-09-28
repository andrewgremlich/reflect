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

import { ExerciseGroupsForm } from "../components/ExerciseGroupsForm/index.js";
import { ExerciseGroupsTableView } from "../components/ExerciseGroupsTableView";

export const ExerciseGroups = () => {
  const dispatch = useDispatch();

  const allExerciseGroups = useSelector(selectAllExerciseGroups);
  const editExerciseGroup = useSelector(selectEditExerciseGroup);

  const [inputValue, setInputValue] = useState({
    group: "",
    description: "",
    exercises: [],
  });

  useEffect(() => {
    dispatch(getExerciseGroups());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <h2>Exercise Groups</h2>
      <h2 style={{ paddingBottom: "20px" }}>Exercise Groups</h2>
      <Administration
        name="Exercise Group"
        create={() => dispatch(createExerciseGroup(inputValue))}
        modify={() =>
          dispatch(
            modifyExerciseGroup({ ...inputValue, id: editExerciseGroup.id })
          )
        }
        editData={editExerciseGroup}
      >
        <ExerciseGroupsForm {...{ inputValue, setInputValue }} />
      </Administration>
      <ExerciseGroupsTableView
        data={allExerciseGroups}
        setEdit={(exerciseGroup) => {
          dispatch(setEditExerciseGroup(exerciseGroup));
          dispatch(switchEdit());
        }}
      />
    </div>
  );
};
