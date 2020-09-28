import React from "react";

import styles from "./ExerciseGroupsTableView.module.css";

import { ExerciseGroupsTableRow } from "./ExerciseGroupsTableRow";

export const ExerciseGroupsTableView = ({ data, setEdit }) => (
  <div className={styles.table}>
    <p className={styles["table-header"]}>Group</p>
    <p className={styles["table-header"]}>Description</p>
    <p className={styles["table-header"]}>Exercises</p>
    <p className={styles["table-header"]}>Edit Exercise Group</p>
    {data?.map(({ group, description, id }) => (
      <ExerciseGroupsTableRow key={id} {...{ group, description, id, setEdit }} />
    ))}
  </div>
);
