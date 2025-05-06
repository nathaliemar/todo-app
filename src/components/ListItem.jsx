import { Link } from "react-router-dom";
import "./ListItem.style.css";
import "../assets/tasks.json";
function ListItem({ todo, deleteTodo }) {
  return (
    <div className="card">
      <p className="task-name">
        {todo.completed ? <span>✔ </span> : <span>❌ </span>}
        {todo.task}
      </p>
      <div className="button-box">
        <Link to={`/todos/${todo.id}`}>
          <button className="details-btn">Details</button>
        </Link>

        <button className="delete-btn" onClick={() => deleteTodo(todo.task)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListItem;
