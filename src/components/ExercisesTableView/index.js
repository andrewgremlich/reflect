import React, { Fragment } from "react";
import classes from "classnames";

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
      {data?.map(({ id, name, description, sets, exerciseGroups, difficulty }) => {
        return (
          <Fragment key={id}>
            <p className={classes(styles["table-cell"], styles["name-cell"])}>
              {name}
            </p>
            <p
              className={classes(
                styles["table-cell"],
                styles["description-cell"]
              )}
            >
              {description}
            </p>
            <p
              className={classes(
                styles["table-cell"],
                styles["description-cell"]
              )}
            >
              {difficulty}
            </p>
            <p className={styles["table-cell"]}>
              {sets.length > 0 ? sets.join(", ") : ""}
            </p>
            <p className={styles["table-cell"]}>
              {exerciseGroups.length > 0 ? exerciseGroups.join(", ") : ""}
            </p>
            <div className={styles["table-cell"]}>
              <button
                onClick={() => {
                  setEdit({ id, name, description, sets, exerciseGroups, difficulty });
                }}
              >
                Edit Exercise
              </button>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
