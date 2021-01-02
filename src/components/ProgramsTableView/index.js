import React, { Fragment } from "react";

import styles from "./ProgramsTableView.module.css";

export const ProgramsTableView = ({ data, setEdit }) => (
  <div className={`table ${styles["program-table"]}`}>
    <p className={`table-header`}>Name</p>
    <p className={`table-header`}>Description</p>
    <p className={`table-header`}>Sets</p>
    <p className={`table-header`}>Edit Program</p>
    {data?.map(({ id, name, description, sets }) => (
      <Fragment key={id}>
        <p className={`table-cell`}>{name}</p>
        <p className={`table-cell`}>{description}</p>
        <p className={`table-cell`}>
          {sets?.length > 0
            ? sets.map(({ name: setName }) => `${setName}, `)
            : ""}
        </p>
        <div className={`table-cell`}>
          <button
            className={`secondary-button button`}
            onClick={() => {
              setEdit({ id, name, description, sets });
            }}
          >
            Edit Program
          </button>
        </div>
      </Fragment>
    ))}
  </div>
);
