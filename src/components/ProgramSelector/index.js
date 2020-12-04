import React from "react";
import { Link } from "react-router-dom";

export const ProgramSelector = ({ name, description, setId }) => {
  return (
    <div>
      <Link to={`/program/${setId}`}>{name}</Link>
      {description && <p>{description}</p>}
    </div>
  );
};
