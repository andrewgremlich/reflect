import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import { Nav } from "./components/Nav";
import { PrivateRoute } from "./features/Auth";

import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";

import store from "./app/store";

import * as serviceWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/admin" component={Admin} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
