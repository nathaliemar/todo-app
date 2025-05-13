import { Link } from "react-router-dom";
import "./NotFound.style.css";
export function NotFound() {
  return (
    <div className="content">
      <h2>The page you are looking for does not exist! </h2>
      <Link to={"/"}>
        <button>Take me home 🏠</button>
      </Link>
    </div>
  );
}
