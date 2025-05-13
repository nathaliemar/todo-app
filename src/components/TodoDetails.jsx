import "./TodoDetails.style.css";
export function TodoDetails({ foundTodo }) {
  return (
    <div className="todo-details-container">
      <div className="task-header">
        <p>Task: {foundTodo.task}</p>
      </div>
      <div className="task-details">
        <div className="detail-label">Details:</div>
        <div className="detail-content">{foundTodo.details}</div>
      </div>
      <div>
        <div className="detail-label">Status:</div>
        <div className="detail-content">
          {" "}
          {foundTodo.completed ? "Completed ✔" : "Not completed ❌"}
        </div>
      </div>
    </div>
  );
}
