import React from "react";

import { Input, Textarea, MultiSelect, setChosenOptions } from "../Form";

export const ProgramsForm = ({
  inputValue,
  setInputValue,
  name,
  description,
  sets,
}) => (
  <>
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
    <MultiSelect
      changeValue={setChosenOptions(setInputValue, inputValue, "sets")}
    >
      {sets &&
        sets?.map(({ id, name: setName }) => (
          <option key={id} value={id}>
            {setName}
          </option>
        ))}
    </MultiSelect>
  </>
);
