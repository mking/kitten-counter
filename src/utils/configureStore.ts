import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "../reducers/counter";

export default function configureStore() {
  return createStore(
    reducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
