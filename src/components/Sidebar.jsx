import { NavLink } from "react-router-dom";
import "./Sidebar.style.css";
function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="sidebar-link">
        Home
      </NavLink>
      <NavLink to="/about" className="sidebar-link">
        About
      </NavLink>
    </aside>
  );
}
export default Sidebar;
