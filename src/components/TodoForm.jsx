//OLD ADD-FORM
// import "./TodoForm.style.css";
// import { useState } from "react";

// export function TodoForm(props) {
//   const [task, setTask] = useState("");
//   const [details, setDetails] = useState("");
//   const [completed, setCompleted] = useState(false);
//   //const [createdAt, setCreatedAt] = useState("");

//   const handleTaskInput = (e) => setTask(e.target.value);
//   const handleDetailsInput = (e) => setDetails(e.target.value);
//   const handleCopletedInput = (e) => setCompleted(e.target.checked);
//   const handleCreatedAtInput = (e) => setCreatedAt(e.target.value); //That may need to be sth else than value since its a date

//   const generateNewId = () => {
//     const maxId = props.todos.reduce((max, curr) => {
//       return curr.id > max ? curr.id : max;
//     }, 0);
//     console.log(maxId);
//     return maxId + 1;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newTodo = {
//       task,
//       details,
//       completed,
//       createdAt: new Date().toISOString(),
//       id: generateNewId(),
//     };
//     props.addNewTodo(newTodo);
//     console.log(newTodo);
//     //Restore defaults
//     setTask("");
//     setDetails("");
//     setCompleted(false);
//   };

//   return (
//     <div className="add-form-container">
//       <h4 className="add-form-title">Add a new todo</h4>
//       <form className="add-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Title </label>
//           <input
//             type="text"
//             name="title"
//             value={task}
//             onChange={handleTaskInput}
//           />
//         </div>
//         <div className="form-group">
//           <label>Details </label>
//           <input
//             type="text"
//             name="details"
//             value={details}
//             onChange={handleDetailsInput}
//           />
//         </div>
//         <div className="form-group checkbox">
//           <label>Completed? </label>
//           <input
//             type="checkbox"
//             name="completed"
//             value={completed}
//             onChange={handleCopletedInput}
//           />
//         </div>

//         <button type="submit">Add todo</button>
//       </form>
//     </div>
//   );
// }

//// NEW V
import { useState, useEffect } from "react";
import "./TodoForm.style.css";

export function TodoForm({ mode = "add", todo = {}, onSubmit }) {
  const [task, setTask] = useState("");
  const [details, setDetails] = useState("");
  const [completed, setCompleted] = useState(false);

  // Populate the form fields if in "edit" mode
  useEffect(() => {
    if (mode === "edit" && todo) {
      setTask(todo.task || "");
      setDetails(todo.details || "");
      setCompleted(todo.completed || false);
    }
  }, [mode, todo]);

  const handleTaskInput = (e) => setTask(e.target.value);
  const handleDetailsInput = (e) => setDetails(e.target.value);
  const handleCompletedInput = (e) => setCompleted(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      ...todo, // Include existing todo data (useful for "edit" mode)
      task,
      details,
      completed,
      createdAt: mode === "add" ? new Date().toISOString() : todo.createdAt,
    };
    onSubmit(formData); // Call the parent-provided handler (may be moved to here)

    if (mode === "add") {
      // Reset form fields only in "add" mode
      setTask("");
      setDetails("");
      setCompleted(false);
    }
  };

  return (
    <div className="todo-form-container">
      <h4 className="todo-form-title">
        {mode === "add" ? "Add a new todo" : "Edit todo"}
      </h4>
      <form className="todo-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" value={task} onChange={handleTaskInput} required />
        </div>
        <div className="form-group">
          <label>Details</label>
          <input
            type="text"
            value={details}
            onChange={handleDetailsInput}
            required
          />
        </div>
        <div className="form-group checkbox">
          <label>Completed?</label>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleCompletedInput}
          />
        </div>
        <button type="submit">
          {mode === "add" ? "Add Todo" : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
