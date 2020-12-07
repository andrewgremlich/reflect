import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Admin = () => {
  return (
    <Fragment>
      <h1>Admin Page.</h1>
      <div>
        <p>
          <Link to="/admin/exercises">Edit Exercises</Link>
        </p>
        <p>
          <Link to="/admin/sets">Edit Exercise Sets</Link>
        </p>
        <p>
          <Link to="/admin/programs">Edit Programs</Link>
        </p>
      </div>
    </Fragment>
  );
};
