import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  MapPin,
  Activity,
  CheckCircle,
  Bell,
  User,
  LogOut,
  Leaf,
} from "lucide-react";

import "./WorkerSidebar.css";

const Workersidebar = () => {
  const menu = [
    {
      name: "Dashboard",
      path: "/worker/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "My Tasks",
      path: "/worker/tasks",
      icon: ClipboardList,
    },
    {
      name: "Task Location",
      path: "/worker/location",
      icon: MapPin,
    },
    {
      name: "Work Progress",
      path: "/worker/progress",
      icon: Activity,
    },
    {
      name: "Completed Tasks",
      path: "/worker/completed",
      icon: CheckCircle,
    },
    {
      name: "Notifications",
      path: "/worker/notifications",
      icon: Bell,
    },
    {
      name: "Profile",
      path: "/worker/profile",
      icon: User,
    },
  ];

  return (
    <aside className="worker-sidebar">

      {/* Logo */}
      <div className="worker-logo">
        <div className="logo-box">
          <Leaf size={22} />
        </div>

        <div>
          <h2>EcoCitizen</h2>
          <span>Worker Portal</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="worker-navigation">

        <p className="navigation-title">WORKER MENU</p>

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `worker-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}

      </nav>

      {/* Bottom */}
      <div className="worker-sidebar-bottom">

        <div className="worker-help">
          <div className="help-circle">?</div>

          <div>
            <strong>Need Help?</strong>
            <small>Contact support</small>
          </div>
        </div>

        <button className="worker-logout">
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
};

export default Workersidebar;