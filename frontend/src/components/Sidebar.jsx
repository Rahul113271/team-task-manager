import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>

      <div style={{ marginTop: "20px" }}>
        <p>
          <Link
            to="/dashboard"
            style={{ color: "white", textDecoration: "none" }}
          >
            Dashboard
          </Link>
        </p>

        <p style={{ marginTop: "10px" }}>
          <Link
            to="/projects"
            style={{ color: "white", textDecoration: "none" }}
          >
            Projects
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;