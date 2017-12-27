import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "../reducers/counter";

export default function configureStore() {
  const store = createStore(
    reducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunk))
  );

  if (module.hot) {
    module.hot.accept("../reducers/counter", () =>
      store.replaceReducer(require("../reducers/counter").default)
    );
  }

  return store;
}
