import React, { Fragment } from "react";

import { Input, Textarea, MultiSelect } from "../Form";

export const ExerciseSetsForm = ({
  inputValue,
  setInputValue,
  name,
  description,
  exerciseGroups,
}) => (
  <Fragment>
    <Input
      value={inputValue.name}
      placeholder="Exercise Set Name"
      type="input"
      origValue={name}
      changeValue={({ target }) =>
        setInputValue({ ...inputValue, name: target.value })
      }
    />
    <Textarea
      value={inputValue.description}
      placeholder="Exercise Set Description"
      origValue={description}
      changeValue={({ target }) =>
        setInputValue({ ...inputValue, description: target.value })
      }
    />
    <MultiSelect
      changeValue={({ target }) => {
        let optionsSelected = [];

        for (let option of target.options) {
          if (option.selected) {
            optionsSelected.push(option.value);
          }
        }

        setInputValue({ ...inputValue, exerciseGroups: optionsSelected });
      }}
    >
      {exerciseGroups.map(({ id, group }) => (
        <option key={id} value={id}>
          {group}
        </option>
      ))}
    </MultiSelect>
  </Fragment>
);
