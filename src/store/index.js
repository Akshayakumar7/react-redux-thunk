import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import todoReducer from "./reducer/todo";
import formReducer from "./reducer/form";
import logger from "redux-logger";

const store = createStore(
  combineReducers({ todoReducer, formReducer }),
  applyMiddleware(thunk, logger)
);

export default store;
