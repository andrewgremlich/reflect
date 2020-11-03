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

export const Submit = ({ submitter }) => (
  <button onClick={submitter}>Submit</button>
);

export const setChosenOptions = (setInputValue, inputValue, optionName) => ({
  target,
}) => {
  let optionsSelected = [];

  for (let option of target.options) {
    if (option.selected) {
      optionsSelected.push(option.value);
    }
  }

  setInputValue({ ...inputValue, [optionName]: optionsSelected });
};

export const MultiSelect = ({ origValue, changeValue, children }) => (
  <FieldLabel>
    <SpanLabel origValue={origValue} />
    <select onChange={changeValue} multiple>
      {children}
    </select>
  </FieldLabel>
);
