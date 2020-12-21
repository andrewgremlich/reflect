import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { authenticateUser, signoutUser, selectLogin } from "./Nav.slice";

import styles from "./Nav.module.css";

export const Nav = () => {
  const login = useSelector(selectLogin);
  const dispatch = useDispatch();

  return (
    <nav className={`${styles["nav-bar"]} margin-bottom-20px`}>
      <div>
        <p className={styles["nav-item"]}>
          <Link to="/">Home</Link>
        </p>
        {login.isAuthenticated && login.userRoles.includes("Administrator") && (
          <p className={styles["nav-item"]}>
            <Link to="/admin">Admin</Link>
          </p>
        )}
      </div>
      {login.isAuthenticated ? (
        <button
          className="button secondary-button"
          onClick={() => {
            dispatch(signoutUser());
          }}
        >
          Sign out
        </button>
      ) : (
        <button
          className="button secondary-button"
          onClick={() => {
            dispatch(authenticateUser());
          }}
        >
          Log in
        </button>
      )}
    </nav>
  );
};
