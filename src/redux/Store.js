import { combineReducers, compose, legacy_createStore } from "redux";

import changeServiceReducer from "./changeServiceReducer";
import serviceListReducer from "./serviceListReducer";
import listReducer from "./changeSearchField";

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureService() {
  return legacy_createStore(
    combineReducers({
      changeService: changeServiceReducer,
      listService: serviceListReducer,
      search: listReducer,
    }),
    undefined,
    compose(ReactReduxDevTools)
  );
}

export default configureService;