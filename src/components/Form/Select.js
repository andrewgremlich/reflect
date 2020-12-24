import React from "react";

import { FieldLabel, SpanLabel } from "./Labels";

import styles from "./Form.module.css";

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

export const SingleSelect = ({ origValue, changeValue, children }) => (
  <FieldLabel>
    <SpanLabel origValue={origValue} />
    <select
      className={`${styles["single-select"]} margin-bottom-20px`}
      onChange={changeValue}
    >
      <option className={`${styles["greyed"]}`} value="">
        Select Value
      </option>
      {children}
    </select>
  </FieldLabel>
);
