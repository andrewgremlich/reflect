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
    <p className={`table-cell`}>{name}</p>
    <p className={`table-cell`}>{description}</p>
    <p className={`table-cell`}>{difficulty}</p>
    <p className={`table-cell`}>{exerciseGroup}</p>
    <div className={`table-cell`}>
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
