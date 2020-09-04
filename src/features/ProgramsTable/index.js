import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProgramsTableView } from "../../components/ProgramsTableView";

import { getPrograms, selectAllPrograms } from "./programsTableSlice";

export const ProgramsTable = () => {
  const dispatch = useDispatch();
  const allPrograms = useSelector(selectAllPrograms);

  useEffect(() => {
    dispatch(getPrograms());
  }, [dispatch]);

  return <ProgramsTableView allPrograms={allPrograms} />;
};
