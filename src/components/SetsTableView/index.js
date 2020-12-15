import React, { Fragment } from "react";
import classes from "classnames";

import styles from "./ExerciseSetsTableView.module.css";

export const ExerciseSetsTableView = ({ data = [], setEdit }) => (
  <div className={styles.table}>
    <p className={styles["table-header"]}>Name</p>
    <p className={styles["table-header"]}>Description</p>
    <p className={styles["table-header"]}>Exercise Groups</p>
    <p className={styles["table-header"]}>Edit Exercise Set</p>
    {data.map(({ id, name, description, exerciseGroups }) => (
      <Fragment key={id}>
        <p className={classes(styles["table-cell"], styles["name-cell"])}>
          {name}
        </p>
        <p
          className={classes(styles["table-cell"], styles["description-cell"])}
        >
          {description}
        </p>
        <p className={styles["table-cell"]}>
          {exerciseGroups?.length > 0
            ? exerciseGroups.map((group) => `${group}, `)
            : ""}
        </p>
        <div className={styles["table-cell"]}>
          <button
            onClick={() => setEdit({ id, name, description, exerciseGroups })}
          >
            Edit Exercise Set
          </button>
        </div>
      </Fragment>
    ))}
  </div>
);
