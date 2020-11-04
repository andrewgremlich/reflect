import React, { Fragment } from "react";
import classes from "classnames";

import styles from "./ExerciseTableRow.module.css";

export const ExerciseTableRow = ({
  id,
  setEdit,
  name,
  description,
  sets,
  exerciseGroups,
  difficulty,
  svgId,
}) => (
  <Fragment>
    <p className={classes(styles["table-cell"], styles["name-cell"])}>{name}</p>
    <p className={classes(styles["table-cell"], styles["description-cell"])}>
      {description}
    </p>
    <p className={classes(styles["table-cell"], styles["description-cell"])}>
      {difficulty}
    </p>
    <div className={styles["table-cell"]}>
      <button
        onClick={() => {
          setEdit({
            id,
            name,
            description,
            difficulty,
            svgId,
          });
        }}
      >
        Edit Exercise
      </button>
    </div>
  </Fragment>
);
