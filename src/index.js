import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import store from "./app/store";

import { PrivateRoute } from "./features/PrivateRoute";
import { Nav } from "./features/Nav";

import {
  Home,
  Program,
  Set,
  Admin,
  ExercisesAdmin,
  SetsAdmin,
  ProgramsAdmin,
} from "./pages";

import * as serviceWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/program/:id" component={Program} />
        <Route exact path="/set/:id" component={Set} />
        <PrivateRoute exact path="/admin" component={Admin} />
        <PrivateRoute
          exact
          path="/admin/exercises"
          component={ExercisesAdmin}
        />
        <PrivateRoute exact path="/admin/sets" component={SetsAdmin} />
        <PrivateRoute exact path="/admin/programs" component={ProgramsAdmin} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
