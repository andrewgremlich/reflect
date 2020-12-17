import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Administration } from "../features/Administration";
import {
  switchEdit,
  getExerciseGroup,
  selectExerciseGroups,
} from "../features/Administration/Administration.slice";

import {
  getExercises,
  selectAllExercises,
  createExercise,
  modifyExercise,
  selectEditExercise,
  setEditExercise,
} from "../features/ExercisesTable/ExercisesTable.slice";

import { ExerciseForm } from "../components/ExerciseForm";
import { SingleSelect } from "../components/Form";
import { ExercisesTableView } from "../components/ExercisesTableView";

export const ExercisesAdmin = () => {
  const dispatch = useDispatch();

  const allExercises = useSelector(selectAllExercises);
  const editExercise = useSelector(selectEditExercise);
  const exerciseGroups = useSelector(selectExerciseGroups);

  const [sortByExerciseGroup, setSortByExerciseGroup] = useState(
    exerciseGroups || ""
  );
  const [inputValue, setInputValue] = useState({
    name: "",
    description: "",
    svgId: "",
    difficulty: 1,
    exerciseGroup: "",
  });

  const filteredGroups = allExercises?.data?.filter(
    (exercise) => exercise.exerciseGroup === sortByExerciseGroup
  );

  useEffect(() => {
    if (!exerciseGroups) {
      dispatch(getExerciseGroup());
    }

    if (sortByExerciseGroup) {
      dispatch(getExercises(sortByExerciseGroup));
    }
  }, [dispatch, sortByExerciseGroup, exerciseGroups]);

  return (
    <Fragment>
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
            inputValue,
            setInputValue,
            exerciseGroups,
          }}
        />
      </Administration>
      {exerciseGroups && (
        <SingleSelect
          value={exerciseGroups}
          changeValue={({ target }) => setSortByExerciseGroup(target.value)}
          origValue="Filter Exercise Group"
        >
          <option value=""></option>
          {exerciseGroups?.map((group, index) => (
            <option key={index} value={group}>
              {group}
            </option>
          ))}
        </SingleSelect>
      )}
      <ExercisesTableView
        data={filteredGroups}
        setEdit={(exercise) => {
          dispatch(setEditExercise(exercise));
          dispatch(switchEdit());
        }}
      />
    </Fragment>
  );
};
