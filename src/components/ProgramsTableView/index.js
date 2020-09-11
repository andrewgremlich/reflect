import React, { Fragment } from "react";
import classes from "classnames";

import styles from "./ProgramsTableView.module.css";

export const ProgramsTableView = ({ data, setEdit }) => (
  <div className={styles.table}>
    <p className={styles["table-header"]}>Name</p>
    <p className={styles["table-header"]}>Description</p>
    <p className={styles["table-header"]}>Sets</p>
    <p className={styles["table-header"]}>Edit Program</p>
    {data.map(({ id, name, description, sets }) => {
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
          <p className={styles["table-cell"]}>
            {sets.length > 0 ? sets.join(", ") : ""}
          </p>
          <div className={styles["table-cell"]}>
            <button
              onClick={() => {
                setEdit({ id, name, description, sets });
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
