import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "classnames";

import { ProgramsTableView } from "../../components/ProgramsTableView";
import { Modal } from "../../components/Modal";

import {
  getPrograms,
  selectAllPrograms,
  setEditProgram,
  selectEditProgram,
} from "./programsTableSlice";

import styles from "./ProgramsTable.module.css";

export const ProgramsTable = () => {
  const dispatch = useDispatch();
  const allPrograms = useSelector(selectAllPrograms);
  const editProgram = useSelector(selectEditProgram);

  useEffect(() => {
    dispatch(getPrograms());
  }, [dispatch]);

  return (
    <div>
      <h3 className={classes(styles["programs-header"])}>Programs Table</h3>
      <ProgramsTableView
        data={allPrograms}
        setEdit={(program) => {
          dispatch(setEditProgram(program));
        }}
      />
      <Modal
        active={editProgram == null ? true : false}
        closeModal={() => {
          dispatch(setEditProgram(null));
        }}
      >
        <h3>Edit Progarm</h3>
        <input placeholder="Name" type="input" value={editProgram?.name} />
        <input
          placeholder="description"
          type="input"
          value={editProgram?.description}
        />
        <input
          placeholder="Exercise Sets"
          type="input"
          value={editProgram?.exerciseGroups}
        />
        <input
          onClick={() => {
            console.log("submit changes");
          }}
          value="Submit Change"
          type="button"
        />
      </Modal>
    </div>
  );
};
