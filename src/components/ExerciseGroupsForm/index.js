import React, { Fragment } from "react";

import { Input, Textarea, MultiSelect, setChosenOptions } from "../Form";

export const ExerciseGroupsForm = ({
  inputValue,
  setInputValue,
  group,
  description,
  exercises,
}) => (
  console.log(exercises),
  (
    <Fragment>
      <Input
        value={inputValue.group}
        placeholder="Exercise Group Name"
        origValue={group}
        changeValue={({ target }) =>
          setInputValue({ ...inputValue, group: target.value })
        }
      />
      <Textarea
        value={inputValue.description}
        placeholder="Exercise Group Description"
        origValue={description}
        changeValue={({ target }) =>
          setInputValue({ ...inputValue, description: target.value })
        }
      />
      <MultiSelect
        changeValue={setChosenOptions(setInputValue, inputValue, "exercises")}
      >
        {/* {exercises.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))} */}
      </MultiSelect>
    </Fragment>
  )
);
