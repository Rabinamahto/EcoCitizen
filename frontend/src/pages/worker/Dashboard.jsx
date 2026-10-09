import React from "react";
import {
  Bell,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock3,
  MapPin,
  Play,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

import Workersidebar from "./Workersidebar";
import "./Dashboard.css";

const Dashboard = () => {
  const stats = [
    {
      title: "Today's Tasks",
      value: "08",
      icon: CalendarDays,
      type: "blue",
    },
    {
      title: "Pending Tasks",
      value: "03",
      icon: Clock3,
      type: "orange",
    },
    {
      title: "In Progress",
      value: "02",
      icon: ClipboardList,
      type: "purple",
    },
    {
      title: "Completed",
      value: "15",
      icon: CheckCircle2,
      type: "green",
    },
  ];

  const tasks = [
    {
      id: "EC-2026-00124",
      category: "Garbage / Waste",
      location: "Ward 23, Main Road",
      priority: "High",
      status: "In Progress",
      time: "10:30 AM",
    },
    {
      id: "EC-2026-00129",
      category: "Water Leakage",
      location: "Station Road",
      priority: "Medium",
      status: "Pending",
      time: "12:00 PM",
    },
    {
      id: "EC-2026-00135",
      category: "Road Damage",
      location: "Market Area",
      priority: "Low",
      status: "Pending",
      time: "02:30 PM",
    },
  ];

  return (
    <div className="worker-dashboard">

      <Workersidebar />

      <main className="worker-content">

        {/* Header */}
        <header className="dashboard-header">

          <div>
            <span className="portal-label">
              FIELD WORKER PORTAL
            </span>

            <h1>Good Morning, Worker 👋</h1>

            <p>
              Here is your task overview for today.
            </p>
          </div>

          <div className="header-right">

            <button className="notification-btn">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>

            <div className="worker-profile">

              <div className="avatar">
                SK
              </div>

              <div>
                <strong>Shivani</strong>
                <small>Field Worker</small>
              </div>

            </div>

          </div>

        </header>

        {/* Stats */}
        <section className="stats-grid">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div className="stat-card" key={stat.title}>

                <div className={`stat-icon ${stat.type}`}>
                  <Icon size={21} />
                </div>

                <div>
                  <p>{stat.title}</p>
                  <h2>{stat.value}</h2>
                </div>

              </div>
            );
          })}

        </section>

        {/* Main Grid */}
        <section className="dashboard-grid">

          {/* Tasks */}
          <div className="tasks-container">

            <div className="section-header">

              <div>
                <h2>Today's Tasks</h2>
                <p>Your assigned tasks for today</p>
              </div>

              <a href="/worker/tasks">
                View All
                <ArrowRight size={15} />
              </a>

            </div>

            {tasks.map((task) => (

              <div className="task-card" key={task.id}>

                <div className="task-header">

                  <div className="task-title">

                    <div className="task-icon">
                      <ClipboardList size={18} />
                    </div>

                    <div>
                      <strong>{task.id}</strong>
                      <p>{task.category}</p>
                    </div>

                  </div>

                  <span
                    className={`priority ${task.priority.toLowerCase()}`}
                  >
                    {task.priority}
                  </span>

                </div>

                <div className="task-details">

                  <span>
                    <MapPin size={15} />
                    {task.location}
                  </span>

                  <span>
                    <Clock3 size={15} />
                    {task.time}
                  </span>

                </div>

                <div className="task-footer">

                  <span
                    className={`task-status ${
                      task.status === "In Progress"
                        ? "in-progress"
                        : "pending"
                    }`}
                  >
                    {task.status}
                  </span>

                  <button>
                    View Task
                    <ArrowRight size={14} />
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* Right */}
          <div className="dashboard-right">

            {/* Quick Actions */}
            <div className="quick-actions">

              <h2>Quick Actions</h2>
              <p>Manage your field work</p>

              <button className="quick-btn main">
                <Play size={17} />
                <span>Start Current Task</span>
                <ArrowRight size={15} />
              </button>

              <button className="quick-btn">
                <ClipboardList size={17} />
                <span>My Tasks</span>
                <ArrowRight size={15} />
              </button>

              <button className="quick-btn">
                <MapPin size={17} />
                <span>View Task Map</span>
                <ArrowRight size={15} />
              </button>

            </div>

            {/* Progress */}
            <div className="progress-card">

              <div className="progress-top">

                <div>
                  <h2>Today's Progress</h2>
                  <p>Task completion</p>
                </div>

                <strong>62%</strong>

              </div>

              <div className="progress-track">
                <div style={{ width: "62%" }}></div>
              </div>

              <div className="progress-info">
                <span>5 completed</span>
                <span>8 total tasks</span>
              </div>

            </div>

            {/* Priority */}
            <div className="priority-alert">

              <div className="alert-icon">
                <AlertCircle size={19} />
              </div>

              <div>
                <strong>Priority Task</strong>
                <p>
                  You have 1 high-priority task waiting.
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
};

export default Dashboard;
