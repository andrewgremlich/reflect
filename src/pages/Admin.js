import React from "react";
import { Link } from "react-router-dom";

export const Admin = () => {
  return (
    <main>
      <h2 className="detail-block">
        <Link to="/admin/exercises">Edit Exercises</Link>
      </h2>

      <h2 className="detail-block">
        <Link to="/admin/sets">Edit Exercise sets</Link>
      </h2>

      <h2 className="detail-block">
        <Link to="/admin/programs">Edit programs</Link>
      </h2>
    </main>
  );
};
