import React from "react";

import styles from "./Form.module.css";

import { FieldLabel, SpanLabel } from "./Labels";

export const Input = ({ placeholder, type, origValue, value, changeValue }) => (
  <FieldLabel>
    <SpanLabel origValue={origValue} />
    <input
      placeholder={origValue || placeholder}
      type={type}
      value={value}
      onChange={changeValue}
    />
  </FieldLabel>
);

export const Textarea = ({
  placeholder,
  rows,
  columns,
  origValue,
  value,
  changeValue,
}) => (
  <FieldLabel>
    <SpanLabel origValue={origValue} />
    <textarea
      className={styles["textarea"]}
      rows={rows}
      cols={columns}
      placeholder={origValue || placeholder}
      onChange={changeValue}
      defaultValue={value}
    />
  </FieldLabel>
);
