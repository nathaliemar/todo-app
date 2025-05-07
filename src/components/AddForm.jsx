import { useState } from "react";

export function AddForm(props) {
  const [task, setTask] = useState("");
  const [details, setDetails] = useState("");
  const [completed, setCompleted] = useState(false);
  const [createdAt, setCreatedAt] = useState("");
  const [id, setId] = useState("");

  const handleTaskInput = (e) => setTask(e.target.value);
  const handleDetailsInput = (e) => setDetails(e.target.value);
  const handleCopletedInput = (e) => setCompleted(e.target.checked);
  const handleCreatedAtInput = (e) => setCreatedAt(e.target.value); //That may need to be sth else than value since its a date

  const generateNewId = () => {
    const maxId = props.todos.reduce((max, curr) => {
      return curr.id > max ? curr.id : max;
    }, 0);
    console.log(maxId);
    return maxId + 1;
  };

  const handleSubmit = (e) => {
    setId(generateNewId());
    e.preventDefault();
    const newTodo = {
      task,
      details,
      completed,
      createdAt,
      id: generateNewId(),
    };
    props.addNewTodo(newTodo);
    console.log(newTodo);
  };

  return (
    <div className="add-form">
      <h4>Add a new todo</h4>
      <br />
      <form className="add-form" onSubmit={handleSubmit}>
        <label>Title </label>
        <input
          type="text"
          name="title"
          value={task}
          onChange={handleTaskInput}
        />

        <label>Details </label>
        <input
          type="text"
          name="details"
          value={details}
          onChange={handleDetailsInput}
        />

        <label>Completed? </label>
        <input
          type="checkbox"
          name="completed"
          value={completed}
          onChange={handleCopletedInput}
        />
        <br />

        <button type="submit">Add todo</button>
      </form>
    </div>
  );
}
