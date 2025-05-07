import "./Dashboard.style.css";
import TodoList from "../components/TodoList";
import { AddForm } from "../components/AddForm";

export function Dashboard({ todos, setTodos }) {
  const deleteTodo = (taskName) => {
    setTodos(todos.filter((todo) => todo.task !== taskName));
  };
  const addNewTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    console.log(updatedTodos);
  };

  return (
    <div className="content dashboard-container">
      <AddForm addNewTodo={addNewTodo} todos={todos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
