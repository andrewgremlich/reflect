import React from "react";

import { ExerciseTableRow } from "./ExerciseTableRow";

import styles from "./ExercisesTableView.module.css";

export const ExercisesTableView = ({ data, setEdit }) => (
  <div className={styles.table}>
    <p className={styles["table-header"]}>Name</p>
    <p className={styles["table-header"]}>Description</p>
    <p className={styles["table-header"]}>Difficulty</p>
    <p className={styles["table-header"]}>Edit Exercise</p>
    {data.map(({ id, name, description, difficulty, svgId }) => (
      <ExerciseTableRow
        key={id}
        {...{
          id,
          setEdit,
          name,
          description,
          difficulty,
          svgId,
        }}
      />
    ))}
  </div>
);
