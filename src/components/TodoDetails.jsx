export function TodoDetails({ foundTodo }) {
  return (
    <div className="todo-details-container">
      <p className="task-name">Title: {foundTodo.task}</p>
      <p className="task-details">Details: {foundTodo.details}</p>
    </div>
  );
}
