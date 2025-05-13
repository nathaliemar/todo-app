import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.style.css";
import Sidebar from "./Sidebar";
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="hero-box">
          <img src={logo} className="logo" alt="logo" />
          <h2 className="title">Todo-Tastic</h2>
        </div>
      </Link>
      <Sidebar />
    </nav>
  );
}
export default Navbar;
