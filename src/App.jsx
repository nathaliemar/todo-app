import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { About, Dashboard, ItemDetails, NotFound } from "./pages";
import { useState } from "react";
import tasksData from "./assets/tasks.json";

function App() {
  const [todos, setTodos] = useState(tasksData);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Dashboard todos={todos} setTodos={setTodos} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/todos/:todoId"
          element={<ItemDetails todos={todos} setTodos={setTodos} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
