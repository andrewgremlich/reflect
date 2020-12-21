import React, { Fragment } from "react";

import styles from "./ExerciseTableRow.module.css";

export const ExerciseTableRow = ({
  id,
  setEdit,
  name,
  description,
  exerciseGroup,
  difficulty,
  svgId,
}) => (
  <Fragment>
    <p className={`${styles["table-cell"]} ${styles["name-cell"]}`}>{name}</p>
    <p className={`${styles["table-cell"]} ${styles["description-cell"]}`}>
      {description}
    </p>
    <p className={`${styles["table-cell"]} ${styles["description-cell"]}`}>
      {difficulty}
    </p>
    <p className={`${styles["table-cell"]} ${styles["description-cell"]}`}>
      {exerciseGroup}
    </p>
    <div className={styles["table-cell"]}>
      <button
        className={`button secondary-button`}
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
