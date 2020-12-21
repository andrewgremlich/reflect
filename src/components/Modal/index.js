import React from "react";

import styles from "./Modal.module.css";

export const Modal = ({ active, closeModal, children }) => {
  return (
    <div
      className={`${styles["modal-shade"]} ${
        active ? styles["active"] : styles["inactive"]
      }`}
    >
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
