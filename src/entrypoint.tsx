import "c3/c3.css"; // tslint:disable-line no-submodule-imports
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Home from "./components/Home";
import configureStore from "./utils/configureStore";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("content")
);
