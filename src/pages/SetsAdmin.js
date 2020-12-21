import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Administration } from "../features/Administration";
import {
  switchEdit,
  getExerciseGroup,
  selectExerciseGroups,
} from "../features/Administration/Administration.slice";
import {
  getSets,
  createSet,
  modifySet,
  selectAllSets,
  setEditSet,
  selectEditSet,
} from "../features/SetsTable/SetsTable.slice";

import { ExerciseSetsForm } from "../components/SetsForm";
import { SetsTableView } from "../components/SetsTableView";

export const SetsAdmin = () => {
  const dispatch = useDispatch();

  const allSets = useSelector(selectAllSets);
  const editExerciseSet = useSelector(selectEditSet);
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
    if (!allSets) {
      dispatch(getSets());
    }

    if (!allExerciseGroups) {
      dispatch(getExerciseGroup());
    }
  }, [dispatch, allSets, allExerciseGroups]);

  return (
    <Fragment>
      <Administration
        {...{
          name: "Exercise Set",
          create: () => dispatch(createSet(inputValue)),
          modify: () =>
            dispatch(modifySet({ ...inputValue, id: editExerciseSet.id })),
          editData,
        }}
      >
        <ExerciseSetsForm
          {...{
            inputValue,
            setInputValue,
            exerciseGroups: allExerciseGroups,
          }}
        />
      </Administration>
      <SetsTableView
        {...{
          data: allSets,
          setEdit: (exerciseSet) => {
            dispatch(
              setEditSet({
                ...exerciseSet,
                exerciseGroups: allExerciseGroups,
              }),
            );
            dispatch(switchEdit());
          },
        }}
      />
    </Fragment>
  );
};
