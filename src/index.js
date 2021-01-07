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
  Group,
  Admin,
  ExercisesAdmin,
  SetsAdmin,
  ProgramsAdmin,
} from "./pages";

import * as serviceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/program/:id" component={Program} />
        <Route exact path="/set/:id" component={Set} />
        <Route exact path="/group" component={Group} />
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
  document.getElementById("root"),
);

serviceWorker.unregister();
