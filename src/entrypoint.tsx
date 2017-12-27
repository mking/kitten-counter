import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import Home from "./components/Home";
import configureStore from "./utils/configureStore";

const store = configureStore();

function render(Component: any) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById("content")
  );
}

render(Home);

if (module.hot) {
  module.hot.accept("./components/Home", () =>
    render(require("./components/Home").default)
  );
}
