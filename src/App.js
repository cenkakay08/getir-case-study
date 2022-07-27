import "./App.css";
import Todo from "./components/Todo/Todo";
import { useEffect } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodoRequest } from "./store/todos/actions";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);

  return (
    <div className="app">
      <div className="add-todo-wrapper">
        <AddTodo />
      </div>
      <div className="todos-wrapper">
        {todos?.data?.map((todo) => (
          <Todo todo={todo} isLoading={todos.isLoading} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
