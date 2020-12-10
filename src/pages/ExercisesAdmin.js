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

import {
  getExerciseSets,
  selectAllExerciseSets,
} from "../features/ExerciseSetsTable/ExerciseSetsTable.slice";

import { ExerciseForm } from "../components/ExerciseForm";
import { SingleSelect } from "../components/Form";
import { ExercisesTableView } from "../components/ExercisesTableView";

export const ExercisesAdmin = () => {
  const dispatch = useDispatch();

  const allExercises = useSelector(selectAllExercises);
  const editExercise = useSelector(selectEditExercise);
  const exerciseGroups = useSelector(selectExerciseGroups);
  const allExerciseSets = useSelector(selectAllExerciseSets);

  const [sortByExerciseGroup, setSortByExerciseGroup] = useState("");
  const [inputValue, setInputValue] = useState({
    name: "",
    description: "",
    svgId: "",
    difficulty: 1,
    exerciseGroup: "",
  });

  const filteredGroups = allExercises.filter(
    (exercise) => exercise.exerciseGroup === sortByExerciseGroup
  );

  useEffect(() => {
    if (allExerciseSets.length === 0) {
      dispatch(getExerciseSets());
    }

    if (!exerciseGroups) {
      dispatch(getExerciseGroup());
    }

    if (sortByExerciseGroup) {
      dispatch(getExercises(sortByExerciseGroup));
    }
  }, [dispatch, sortByExerciseGroup, allExerciseSets, exerciseGroups]);

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
            allExerciseSets,
            inputValue,
            setInputValue,
            exerciseGroups,
          }}
        />
      </Administration>
      {exerciseGroups && (
        <SingleSelect
          value={exerciseGroups[0]}
          changeValue={({ target }) => setSortByExerciseGroup(target.value)}
          origValue="Filter Exercise Group"
        >
          <option value=""></option>
          {exerciseGroups.map((group, index) => (
            <option key={index} value={group}>
              {group}
            </option>
          ))}
        </SingleSelect>
      )}
      <ExercisesTableView
        data={filteredGroups.length > 0 ? filteredGroups : allExercises}
        setEdit={(exercise) => {
          dispatch(setEditExercise(exercise));
          dispatch(switchEdit());
        }}
      />
    </Fragment>
  );
};
