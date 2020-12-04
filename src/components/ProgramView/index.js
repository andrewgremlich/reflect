import React from "react";
import { Link } from "react-router-dom";

export const ProgramView = ({ setProgram, name: programName, sets }) => {
  return (
    <div>
      <p className="clicky" onClick={() => setProgram(undefined)}>
        X
      </p>
      <h3>{programName}</h3>
      {sets.map(({ name: setName, id }) => (
        <Link to={`/set/${id}`} key={id}>
          {setName}
        </Link>
      ))}
    </div>
  );
};
