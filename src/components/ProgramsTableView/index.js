import React from "react";

export const ProgramsTableView = ({ allPrograms }) => {
  return (
    <div>
      <h3>Programs Table</h3>
      <div>
        {allPrograms.map((program, index) => {
          return (
            <div key={index}>
              <p>{program.name}</p>
              <p>{program.description}</p>
              <p>{program.exerciseGroups.join(", ")}</p>
              <button>Edit Program</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
