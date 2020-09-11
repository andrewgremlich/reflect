import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

import { selectProtectedRoute } from "./PrivateRoute.slice";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const protectedRoute = useSelector(selectProtectedRoute);

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
