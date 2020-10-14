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

export const MultiSelect = ({ origValue, data, changeValue }) => (
  <FieldLabel>
    <SpanLabel origValue={origValue} />
    <select multiple onChange={changeValue}>
      {data?.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  </FieldLabel>
);

export const Submit = ({ submitter }) => (
  <button onClick={submitter}>Submit</button>
);
