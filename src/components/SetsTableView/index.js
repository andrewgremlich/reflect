import React from "react";

import styles from "./SetsTableView.module.css";

export const SetsTableView = ({ data = [], setEdit }) => (
  <div className={`table`}>
    <div className={`table-row ${styles["set-table-row"]}`}>
      <p className={`table-header`}>Name</p>
      <p className={`table-header`}>Description</p>
      <p className={`table-header`}>Exercise Groups</p>
      <p className={`table-header`}>Edit Exercise Set</p>
    </div>
    {data.map(({ id, name, description, exerciseGroups }) => (
      <div key={id} className={`table-row ${styles["set-table-row"]}`}>
        <p className={`table-cell`}>{name}</p>
        <p className={`table-cell`}>{description}</p>
        <p className={`table-cell`}>
          {exerciseGroups?.length > 0
            ? exerciseGroups.map((group) => `${group}, `)
            : ""}
        </p>
        <div className={`table-cell`}>
          <button
            className={`secondary-button button`}
            onClick={() => setEdit({ id, name, description, exerciseGroups })}
          >
            Edit Exercise Set
          </button>
        </div>
      </div>
    ))}
  </div>
);
