import React from "react";

import { Nav } from "../features/Nav";

import { AdminMain } from "../components/AdminMain";

export const Admin = () => {
  return (
    <div>
      <Nav />
      <h1>Admin Page.</h1>
      <AdminMain />
    </div>
  );
};
