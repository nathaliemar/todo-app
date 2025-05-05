function ListItem({ todo, deleteTodo }) {
  return (
    <div className="card">
      <p className="task-name">
        {todo.completed ? <span>✔ </span> : <span>❌ </span>}
        {todo.task}
      </p>
      <button className="delete-btn" onClick={() => deleteTodo(todo.task)}>
        Delete
      </button>
    </div>
  );
}

export default ListItem;
