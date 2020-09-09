import React from "react";
import { withRouter, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { authenticateUser, signoutUser, selectLogin } from "./navSlice";

import styles from "./Nav.module.css";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(authenticateUser());
      }}
    >
      Log in
    </button>
  );
};

const AuthButton = withRouter(({ history }) => {
  const login = useSelector(selectLogin);
  const dispatch = useDispatch();

  return login.isAuthenticated ? (
    <p>
      <button
        onClick={() => {
          dispatch(signoutUser());
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <Login />
  );
});

const AdminLink = () => {
  const login = useSelector(selectLogin);

  return (
    login.isAuthenticated &&
    login.userRoles.includes("Administrator") && (
      <p className={styles["nav-item"]}>
        <Link to="/admin">Admin</Link>
      </p>
    )
  );
};

export const Nav = () => {
  return (
    <nav className={styles["nav-bar"]}>
      <div>
        <p className={styles["nav-item"]}>
          <Link to="/">Home</Link>
        </p>
        <AdminLink />
      </div>
      <AuthButton />
    </nav>
  );
};
