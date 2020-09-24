import React from "react";

import { ExerciseTableRow } from "./ExerciseTableRow";

import styles from "./ExercisesTableView.module.css";

export const ExercisesTableView = ({ data, setEdit }) => {
  return (
    <div className={styles.table}>
      <p className={styles["table-header"]}>Name</p>
      <p className={styles["table-header"]}>Description</p>
      <p className={styles["table-header"]}>Difficulty</p>
      <p className={styles["table-header"]}>Sets</p>
      <p className={styles["table-header"]}>Exercise Groups</p>
      <p className={styles["table-header"]}>Edit Exercise</p>
      {data?.map(
        ({
          id,
          name,
          description,
          sets,
          exerciseGroups,
          difficulty,
          svgId,
        }) => (
          <ExerciseTableRow
            key={id}
            {...{
              id,
              setEdit,
              name,
              description,
              sets,
              exerciseGroups,
              difficulty,
              svgId,
            }}
          />
        )
      )}
    </div>
  );
};
