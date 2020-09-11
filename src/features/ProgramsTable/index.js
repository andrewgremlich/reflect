import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "classnames";

import { ProgramsTableView } from "../../components/ProgramsTableView";
import { Modal } from "../../components/Modal";
import { ProgramsForm } from "../../components/ProgramsForm";

import {
  getPrograms,
  createProgram,
  setNewProgram,
  selectNewProgram,
  modifyProgram,
  selectAllPrograms,
  setEditProgram,
  selectEditProgram,
} from "./programsTableSlice";

import styles from "./ProgramsTable.module.css";

export const ProgramsTable = () => {
  const dispatch = useDispatch();

  const allPrograms = useSelector(selectAllPrograms);
  const editProgram = useSelector(selectEditProgram);
  const newProgram = useSelector(selectNewProgram);

  const [inputValue, setInputValue] = useState({
    name: "",
    description: "",
    sets: [],
  });

  useEffect(() => {
    dispatch(getPrograms());
  }, [dispatch]);

  return (
    <div>
      <h3 className={classes(styles["programs-header"])}>Programs Table</h3>
      <button
        onClick={() => {
          dispatch(setNewProgram(true));
        }}
      >
        New Program
      </button>
      <ProgramsTableView
        data={allPrograms}
        setEdit={(program) => {
          dispatch(setEditProgram(program));
        }}
      />
      <Modal
        active={!newProgram}
        closeModal={() => dispatch(setNewProgram(false))}
      >
        <h3>New Program</h3>
        <ProgramsForm
          {...{
            inputValue,
            setInputValue,
          }}
        />
        <button
          onClick={() => {
            dispatch(createProgram(inputValue));
            dispatch(setNewProgram(false));
          }}
        >
          Submit Change
        </button>
      </Modal>
      <Modal
        active={editProgram == null ? true : false}
        closeModal={() => {
          dispatch(setEditProgram(null));
        }}
      >
        <h3>Edit Program</h3>
        <ProgramsForm
          {...{
            inputValue,
            setInputValue,
            name: editProgram?.name,
            description: editProgram?.description,
            sets: editProgram?.sets,
          }}
        />
        <button
          onClick={() => {
            dispatch(modifyProgram({ ...inputValue, id: editProgram.id }));
            dispatch(setEditProgram(null));
          }}
        >
          Submit Change
        </button>
      </Modal>
    </div>
  );
};
