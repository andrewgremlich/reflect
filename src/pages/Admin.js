import React from "react";
import { Link } from "react-router-dom";

export const Admin = () => {
  return (
    <main>
      <p className="detail-block">
        <Link to="/admin/exercises">Edit Exercises</Link>
      </p>

      <p className="detail-block">
        <Link to="/admin/sets">Edit Exercise sets</Link>
      </p>

      <p className="detail-block">
        <Link to="/admin/programs">Edit programs</Link>
      </p>
    </main>
  );
};
