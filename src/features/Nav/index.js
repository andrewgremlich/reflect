import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { FiHome, FiEdit, FiLogIn, FiLogOut } from "react-icons/fi";

import { authenticateUser, signoutUser, selectLogin } from "./Nav.slice";

import styles from "./Nav.module.css";

const iconProps = { size: "30px" };

export const Nav = () => {
  const login = useSelector(selectLogin);
  const dispatch = useDispatch();

  return (
    <nav className={`${styles["nav-bar"]} margin-bottom-20px`}>
      <div>
        <p className={styles["nav-item"]}>
          <Link to="/">
            <IconContext.Provider value={iconProps}>
              <FiHome />
            </IconContext.Provider>
          </Link>
        </p>
        {login.isAuthenticated && login.userRoles.includes("Administrator") && (
          <p className={styles["nav-item"]}>
            <Link to="/admin">
              <IconContext.Provider value={iconProps}>
                <FiEdit />
              </IconContext.Provider>
            </Link>
          </p>
        )}
      </div>
      {login.isAuthenticated ? (
        <IconContext.Provider value={iconProps}>
          <div
            onClick={() => {
              dispatch(signoutUser());
            }}
          >
            <FiLogOut />
          </div>
        </IconContext.Provider>
      ) : (
        <IconContext.Provider value={iconProps}>
          <div
            onClick={() => {
              dispatch(authenticateUser());
            }}
          >
            <FiLogIn />
          </div>
        </IconContext.Provider>
      )}
    </nav>
  );
};
