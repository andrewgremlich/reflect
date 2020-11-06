import React, { Fragment } from "react";

import { Input, Textarea } from "../Form";

export const ExerciseForm = ({
  inputValue,
  setInputValue,
  name,
  description,
  svgId,
  exerciseGroup,
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
    <Input
      value={inputValue.exerciseGroup}
      placeholder="Exercise Group"
      type="input"
      origValue={exerciseGroup}
      changeValue={({ target }) =>
        setInputValue({ ...inputValue, exerciseGroup: target.value })
      }
    />
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
