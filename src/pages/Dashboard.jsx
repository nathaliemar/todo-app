import "./Dashboard.style.css";
import TodoList from "../components/TodoList";

export function Dashboard() {
  return (
    <div className="content">
      <TodoList />
    </div>
  );
}
