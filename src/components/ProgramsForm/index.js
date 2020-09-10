import React, { Fragment } from "react";

import { Input } from "../Form";

export const ProgramsForm = ({
  inputValue,
  setInputValue,
  name,
  description,
  exerciseGroups,
}) => (
  <Fragment>
    <Input
      value={inputValue.name}
      placeholder="Program Name"
      type="input"
      origValue={name}
      changeValue={({ target }) =>
        setInputValue({ ...inputValue, name: target.value })
      }
    />
    <Input
      value={inputValue.description}
      placeholder="Program Description"
      type="input"
      origValue={description}
      changeValue={({ target }) =>
        setInputValue({ ...inputValue, description: target.value })
      }
    />
    <Input
      value={inputValue.exerciseSets}
      placeholder="Exercise Sets"
      type="input"
      origValue={exerciseGroups}
      changeValue={({ target }) =>
        setInputValue({ ...inputValue, exerciseSets: target.value })
      }
    />
  </Fragment>
);