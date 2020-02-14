import loggedReducer from "./isLogged";
import counterReducer from "./counter";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});

export default rootReducer;
