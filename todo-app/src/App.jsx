import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="content">
        <TodoList />
      </div>

      <Footer />
    </div>
  );
}

export default App;
