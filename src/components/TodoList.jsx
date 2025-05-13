import "./TodoList.style.css";
import ListItem from "./ListItem";

function TodoList(props) {
  return (
    <div className="list-container">
      {props.todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} deleteTodo={props.deleteTodo} />
      ))}
    </div>
  );
}
export default TodoList;
