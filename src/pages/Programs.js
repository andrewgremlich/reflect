import React from "react";

import { Nav } from "../features/Nav";
import { ProgramsTable } from "../features/ProgramsTable";

export const Programs = () => {
  return (
    <div>
      <Nav />
      <h2>Exercise Programs</h2>
      <ProgramsTable />
    </div>
  );
};
