import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

import { selectLogin } from "../Nav/Nav.slice";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const protectedRoute = useSelector(selectLogin);

  return (
    protectedRoute.isAuthenticated && (
      <Route
        {...rest}
        render={(props) =>
          protectedRoute.isAuthenticated && <Component {...props} />
        }
      />
    )
  );
};
