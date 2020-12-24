import React from "react";

import { ExerciseTableRow } from "./ExerciseTableRow";

import styles from "./ExercisesTableView.module.css";

export const ExercisesTableView = ({ data = [], setEdit }) => (
  <div className={`table ${styles["exercise-table"]}`}>
    <p className={`table-header`}>Name</p>
    <p className={`table-header`}>Description</p>
    <p className={`table-header`}>Difficulty</p>
    <p className={`table-header`}>Exercise Group</p>
    <p className={`table-header`}>Edit Exercise Group</p>
    {data.map(({ id, name, description, difficulty, svgId, exerciseGroup }) => (
      <ExerciseTableRow
        key={id}
        {...{
          id,
          setEdit,
          name,
          description,
          exerciseGroup,
          difficulty,
          svgId,
        }}
      />
    ))}
  </div>
);
