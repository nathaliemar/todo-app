import "./ItemDetails.style.css";
import { useParams } from "react-router-dom";
import tasksData from "../assets/tasks.json";
import "./ItemDetails.style.css";

// filter
export function ItemDetails() {
  const { todoId } = useParams();
  const foundTodo = tasksData.find((todo) => todo.id === Number(todoId));
  console.log(foundTodo);
  return (
    <div className="content">
      <p className="task-name">Title: {JSON.stringify(foundTodo.task)}</p>
      <p className="task-details">
        Details:{JSON.stringify(foundTodo.details)}
      </p>
    </div>
  );
}
