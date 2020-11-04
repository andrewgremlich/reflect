import React, { Fragment } from "react";

import styles from "./ExerciseGroupsTableRow.module.css";

export const ExerciseGroupsTableRow = ({
  group,
  description,
  exercises,
  id,
  setEdit,
}) => (
  <Fragment>
    <p className={styles["table-cell"]}>{group}</p>
    <p className={styles["table-cell"]}>{description}</p>
    <p className={styles["table-cell"]}>
      {exercises?.length > 0 ? exercises.map(({ name }) => `${name}, `) : ""}
    </p>
    <div className={styles["table-cell"]}>
      <button
        onClick={() => {
          setEdit({
            id,
            group,
            description,
            exercises,
          });
        }}
      >
        Edit Exercise
      </button>
    </div>
  </Fragment>
);
