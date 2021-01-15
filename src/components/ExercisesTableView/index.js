import React from "react";

import style from "./style.module.css";

export const ExercisesTableView = ({ data = [], setEdit }) => (
  <div className={`table`}>
    <div className={`table-row ${style["exercise-table-row"]}`}>
      <p className={`table-header`}>Name</p>
      <p className={`table-header`}>Description</p>
      <p className={`table-header`}>Difficulty</p>
      <p className={`table-header`}>Exercise Group</p>
      <p className={`table-header`}>Edit Exercise Group</p>
    </div>
    {data.map(({ id, name, description, difficulty, svgId, exerciseGroup }) => (
      <div key={id} className={`table-row ${style["exercise-table-row"]}`}>
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
      </div>
    ))}
  </div>
);
