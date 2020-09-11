import React, { Fragment } from "react";

import { Input, Textarea, MultiSelect } from "../Form";

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
    <Textarea
      value={inputValue.description}
      placeholder="Program Description"
      origValue={description}
      changeValue={({ target }) =>
        setInputValue({ ...inputValue, description: target.value })
      }
    />
    <MultiSelect />
    {/* <Input
      value={inputValue.exerciseSets}
      placeholder="Exercise Sets"
      type="input"
      origValue={exerciseGroups}
      changeValue={({ target }) =>
        setInputValue({ ...inputValue, sets: target.value })
      }
    /> */}
  </Fragment>
);
