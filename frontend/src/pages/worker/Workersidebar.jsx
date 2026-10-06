import { NavLink } from "react-router-dom";
import "./WorkerSidebar.css";

function WorkerSidebar() {
  return (
    <aside className="worker-sidebar">

      {/* Worker Profile */}
      <div className="worker-sidebar-header">
        <div className="worker-avatar">
          S
        </div>

        <div>
          <h3>Shivani</h3>
          <span>Field Worker</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="worker-menu">

        <NavLink
          to="/worker/dashboard"
          className={({ isActive }) =>
            isActive
              ? "worker-menu-item active"
              : "worker-menu-item"
          }
        >
          <span>📊</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/worker/tasks"
          className={({ isActive }) =>
            isActive
              ? "worker-menu-item active"
              : "worker-menu-item"
          }
        >
          <span>📋</span>
          <span>My Tasks</span>
        </NavLink>

        <NavLink
          to="/worker/completed-tasks"
          className={({ isActive }) =>
            isActive
              ? "worker-menu-item active"
              : "worker-menu-item"
          }
        >
          <span>✅</span>
          <span>Completed Tasks</span>
        </NavLink>

        <NavLink
          to="/worker/notifications"
          className={({ isActive }) =>
            isActive
              ? "worker-menu-item active"
              : "worker-menu-item"
          }
        >
          <span>🔔</span>
          <span>Notifications</span>
        </NavLink>

        <NavLink
          to="/worker/profile"
          className={({ isActive }) =>
            isActive
              ? "worker-menu-item active"
              : "worker-menu-item"
          }
        >
          <span>👤</span>
          <span>Profile</span>
        </NavLink>

      </nav>

      {/* Logout */}
      <div className="worker-sidebar-bottom">
        <button className="worker-logout">
          🚪 Logout
        </button>
      </div>

    </aside>
  );
}

export default WorkerSidebar;