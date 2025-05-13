import "./ItemDetails.style.css";
import { useParams } from "react-router-dom";
import "./ItemDetails.style.css";
import { TodoDetails } from "../components/TodoDetails";
import { TodoForm } from "../components/TodoForm";

// filter
export function ItemDetails({ todos, setTodos }) {
  const { todoId } = useParams(); //get page from URL to know what details to display
  const foundTodo = todos.find((todo) => todo.id === Number(todoId));

  //handler for edit button
  const handleUpdateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos); // Update the todos state
  };

  return (
    <div className="content item-details-page">
      <TodoDetails foundTodo={foundTodo} />
      <TodoForm
        mode="edit"
        todo={foundTodo}
        onSubmit={handleUpdateTodo} // Pass the update handler
      />
    </div>
  );
}
