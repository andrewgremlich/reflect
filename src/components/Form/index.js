import React from "react";

import styles from "./Form.module.css";

const SpanLabel = ({ origValue }) => (
  <span>{origValue ? `(Was: ${origValue})` : "New Input"}</span>
);

const FieldLabel = ({ children }) => (
  <label className={styles["field-label"]}>{children}</label>
);

export const Input = ({ placeholder, type, origValue, value, changeValue }) => (
  <FieldLabel>
    <SpanLabel origValue={origValue} />
    <input
      placeholder={placeholder}
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
      placeholder={placeholder}
      onChange={changeValue}
      defaultValue={value}
    />
  </FieldLabel>
);

export const MultiSelect = ({ origValue }) => (
  <FieldLabel>
    <SpanLabel origValue={origValue} />
    <select multiple>
      <option value="Hello">Hello</option>
      <option value="World">World</option>
    </select>
  </FieldLabel>
);

export const Submit = ({ submitter }) => (
  <button onClick={submitter}>Submit</button>
);
