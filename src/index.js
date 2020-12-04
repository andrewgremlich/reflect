import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import store from "./app/store";

import { PrivateRoute } from "./features/PrivateRoute";

import { Home, Admin, Exercises, Programs, ExerciseSets, SetView } from "./pages";

import * as serviceWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/set/:id" component={SetView} />
        <PrivateRoute exact path="/admin" component={Admin} />
        <PrivateRoute exact path="/admin/programs" component={Programs} />
        <PrivateRoute
          exact
          path="/admin/exerciseSets"
          component={ExerciseSets}
        />
        <PrivateRoute exact path="/admin/exercises" component={Exercises} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
