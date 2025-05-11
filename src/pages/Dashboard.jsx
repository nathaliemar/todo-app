import "./Dashboard.style.css";
import TodoList from "../components/TodoList";
import { TodoForm } from "../components/TodoForm";

export function Dashboard({ todos, setTodos }) {
  const deleteTodo = (taskName) => {
    setTodos(todos.filter((todo) => todo.task !== taskName));
  };

  const generateNewId = () => {
    const maxId = todos.reduce(
      (max, curr) => (curr.id > max ? curr.id : max),
      0
    );
    return maxId + 1;
  };

  // const addNewTodo = (newTodo) => {
  //   const updatedTodos = [...todos, newTodo];
  //   setTodos(updatedTodos);
  //   console.log(updatedTodos);
  // };

  return (
    <div className="content dashboard-container">
      {/* <TodoForm addNewTodo={addNewTodo} todos={todos} /> */}
      <TodoForm
        mode="add"
        onSubmit={(newTodo) => {
          newTodo.id = generateNewId(); // Add a unique ID
          setTodos([...todos, newTodo]); // Update the todos state
        }}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
