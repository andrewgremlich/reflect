import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, withRouter, Link } from "react-router-dom";

import { authenticateUser, signoutUser, selectLogin } from "./loginSlice";
// import styles from "./Login.module.css";

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

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const login = useSelector(selectLogin);

  return (
    login.isAuthenticated && (
      <Route
        {...rest}
        render={(props) => login.isAuthenticated && <Component {...props} />}
      />
    )
  );
};

export const AuthButton = withRouter(({ history }) => {
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

export const AdminLink = () => {
  const login = useSelector(selectLogin);

  return (
    login.isAuthenticated &&
    login.userRoles.includes("Administrator") && (
      <p>
        <Link to="/admin">Admin</Link>
      </p>
    )
  );
};
