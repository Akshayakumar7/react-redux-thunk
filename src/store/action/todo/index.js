import { TODO_ADD } from "../constant/todo";

export function addTodoAction(todo) {
  // console.log("addTodoAction", todo);
  return {
    type: TODO_ADD,
    myData: todo,
  };
}

export function addTodoAfterDelay(todo) {
  return function (trigger) {
    setTimeout(() => {
      trigger(addTodoAction(todo));
    }, 4000);
  };
}
