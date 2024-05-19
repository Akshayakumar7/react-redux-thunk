// it is a reducer function

import { TODO_ADD } from "../../action/constant/todo";

const initialState = {
  todos: [],
  selectedTodo: "demo todo",
};

export default function todoReducer(state = initialState, action) {
  const { type, myData } = action;
  console.log("todoReducer", type, myData);

  switch (type) {
    case TODO_ADD: {
      state.todos = [myData, ...state.todos];
      return { ...state };
    }
    default:
      return state;
  }
}
