import React from "react";
import classes from "classnames";

import styles from "./Modal.module.css";

export const Modal = ({ active, closeModal, children }) => {
  return (
    <div className={classes(styles["modal-shade"], active && styles["active"])}>
      <div className={styles["modal-container"]}>
        <button
          onClick={() => {
            closeModal();
          }}
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
};
