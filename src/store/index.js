import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import todoReducer from "./reducer/todo";
import formReducer from "./reducer/form";

const store = createStore(
  combineReducers({ todoReducer, formReducer }),
  applyMiddleware(thunk)
);

export default store;
