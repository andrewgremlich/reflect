import React from "react";

import styles from "./Form.module.css";

export const SpanLabel = ({ origValue }) => (
  <span className={`text-color-white`}>
    {origValue ? `(${origValue})` : "New Input"}
  </span>
);

export const FieldLabel = ({ children }) => (
  <label className={`${styles["field-label"]}`}>{children}</label>
);
