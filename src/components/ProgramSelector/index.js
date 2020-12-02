import React from "react";

export const ProgramSelector = ({
  name,
  description,
  sets,
  activateProgram,
}) => {
  return (
    <div>
      <h2
        onClick={() => {
          activateProgram({
            name,
            description,
            sets,
          });
        }}
      >
        {name}
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
};
