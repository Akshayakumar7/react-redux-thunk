import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAfterDelay } from "./store/action/todo";
import { updateText } from "./store/action/form";
import { memo } from "react";

function App() {
  const dispatch = useDispatch();

  const todos = useSelector(function (state) {
    // console.log(state);
    return state.todoReducer.todos;
  });

  const text = useSelector(function (state) {
    // console.log(state);
    return state.formReducer.text;
  });

  function handleInput(e) {
    dispatch(updateText(e.target.value));
  }
  function addTodo() {
    dispatch(addTodoAfterDelay(text));
  }

  return (
    <div className="App">
      Hello
      <input onInput={handleInput} />
      <button onClick={addTodo}>Add Todo</button>
      {todos?.length &&
        todos?.map((d) => {
          return <div key={d}>{d}</div>;
        })}
      <MemoizedChildComponent />
    </div>
  );
}

function ChildComponent() {
  const selectedTodo = useSelector(function (state) {
    return state.todoReducer.selectedTodo;
  });
  // console.log("childcomponent called", selectedTodo);
  return (
    <div>
      <h1>This is child {selectedTodo}</h1>
    </div>
  );
}
const MemoizedChildComponent = memo(ChildComponent);

export default App;
