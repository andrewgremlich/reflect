import React from "react";
import { Link } from "react-router-dom";

export const AdminMain = () => {
  return (
    <div>
      <p>
        <Link to="/admin/exercises">Edit Exercises</Link>
      </p>
      <p>
        <Link to="/admin/exerciseGroups">Edit Exercise Groups</Link>
      </p>
      {/* <p>
        <Link to="/admin/exerciseSets">Edit Exercise Sets</Link>
      </p> */}
      <p>
        <Link to="/admin/programs">Edit Programs</Link>
      </p>
    </div>
  );
};
