import React, { Fragment } from "react";
import classes from "classnames";

import styles from "./ProgramsTableView.module.css";

export const ProgramsTableView = ({ data, setEdit }) => (
  <div className={styles.table}>
    <p className={styles["table-header"]}>Name</p>
    <p className={styles["table-header"]}>Description</p>
    <p className={styles["table-header"]}>Exercise Groups</p>
    <p className={styles["table-header"]}>Edit Program</p>
    {data.map(({ id, name, description, exerciseGroups }) => {
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
          <p className={styles["table-cell"]}>{exerciseGroups.join(", ")}</p>
          <div className={styles["table-cell"]}>
            <button
              onClick={() => {
                setEdit({ id, name, description, exerciseGroups });
              }}
            >
              Edit Program
            </button>
          </div>
        </Fragment>
      );
    })}
  </div>
);
