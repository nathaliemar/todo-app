import tasksData from "../assets/tasks.json";
import { useState } from "react";
import ListItem from "./ListItem";

function TodoList() {
  const [todos, setTodos] = useState(tasksData);
  const deleteTodo = (taskName) => {
    setTodos(todos.filter((todo) => todo.task !== taskName));
  };

  return (
    <div className="list-container">
      {todos.map((todo, index) => (
        <ListItem key={index} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}
export default TodoList;
