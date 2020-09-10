import React from "react";

import styles from "./Form.module.css";

export const Input = ({ placeholder, type, origValue, value, changeValue }) => {
  return (
    <label className={styles["input-label"]}>
      <span>{origValue ? `(Was: ${origValue})` : "New Input"}</span>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={changeValue}
      />
    </label>
  );
};
