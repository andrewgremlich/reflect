import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Nav } from "../features/Nav";
// import { Administration } from "../features/Administration";

import { ExerciseGroupsForm } from "../components/ExerciseGroupsForm/index.js";

export const ExerciseGroups = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    group: "",
    description: "",
    exercises: [],
  });

  return (
    <div>
      <Nav />
      <h2 style={{ paddingBottom: "20px" }}>Exercise Groups</h2>
      <ExerciseGroupsForm />
    </div>
  );
};
