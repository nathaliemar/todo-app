import logo from "../assets/logo.png";
import Sidebar from "./Sidebar";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="hero-box">
        <img src={logo} className="logo" alt="logo" />
        <h2 className="title">Todo-Tastic</h2>
      </div>
      <Sidebar />
    </nav>
  );
}
export default Navbar;
