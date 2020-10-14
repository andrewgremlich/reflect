import React, { Fragment } from "react";

import { Input, Textarea, MultiSelect } from "../Form";

export const ExerciseForm = ({
  inputValue,
  setInputValue,
  allExerciseSets,
  name,
  description,
  svgId,
  exerciseGroups,
  set,
  difficulty,
}) => (
  <Fragment>
    <Input
      value={inputValue.name}
      placeholder="Exercise Name"
      type="input"
      origValue={name}
      changeValue={({ target }) =>
        setInputValue({ ...inputValue, name: target.value })
      }
    />
    <Textarea
      value={inputValue.description}
      placeholder="Exercise Description"
      origValue={description}
      changeValue={({ target }) =>
        setInputValue({ ...inputValue, description: target.value })
      }
    />
    <Input
      value={inputValue.svgId}
      placeholder="SVG Name"
      type="input"
      origValue={svgId}
      changeValue={({ target }) =>
        setInputValue({ ...inputValue, svgId: target.value })
      }
    />
    <MultiSelect
      data={allExerciseSets}
      origValue={set}
      changeValue={({ target }) => {
        setInputValue({
          ...inputValue,
          sets: [...inputValue.sets, target.value],
        });
      }}
    />
    <MultiSelect />
    <Input
      value={inputValue.difficulty}
      placeholder="Difficulty"
      type="number"
      origValue={difficulty}
      changeValue={({ target }) =>
        setInputValue({ ...inputValue, difficulty: target.value })
      }
    />
  </Fragment>
);
