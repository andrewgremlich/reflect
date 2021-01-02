import React from "react";

import { Input, Textarea, MultiSelect, setChosenOptions } from "../Form";

export const ExerciseSetsForm = ({
  inputValue,
  setInputValue,
  name,
  description,
  exerciseGroups,
}) => (
  <>
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
    {exerciseGroups && (
      <MultiSelect
        changeValue={setChosenOptions(
          setInputValue,
          inputValue,
          "exerciseGroups",
        )}
      >
        {exerciseGroups.map((group, index) => (
          <option key={index} value={group}>
            {group}
          </option>
        ))}
      </MultiSelect>
    )}
  </>
);
