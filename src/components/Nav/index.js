import React from "react";
import { Link } from "react-router-dom";

import { AuthButton, AdminLink } from "../../features/Auth";

import "./style.css";

export const Nav = () => {
  return (
    <nav>
      <div>
        <p>
          <Link to="/">Home</Link>
        </p>
        <AdminLink />
      </div>
      <AuthButton />
    </nav>
  );
};
