

import { Link } from "react-router-dom";

function Dashboard() {
  const stats = [
    {
      title: "Today's Tasks",
      value: 5,
      icon: "📋",
      color: "bg-blue-50",
    },
    {
      title: "Pending Tasks",
      value: 2,
      icon: "⏳",
      color: "bg-yellow-50",
    },
    {
      title: "In Progress",
      value: 1,
      icon: "🔧",
      color: "bg-purple-50",
    },
    {
      title: "Completed",
      value: 8,
      icon: "✅",
      color: "bg-green-50",
    },
  ];

  const recentTasks = [
    {
      id: "EC-2026-00123",
      title: "Garbage Overflow",
      category: "Garbage / Waste",
      location: "Ward 12, Muzaffarpur",
      priority: "HIGH",
      status: "ASSIGNED",
      deadline: "17 Sep 2026",
    },
    {
      id: "EC-2026-00124",
      title: "Street Light Not Working",
      category: "Streetlight",
      location: "Ward 8, Muzaffarpur",
      priority: "MEDIUM",
      status: "ACCEPTED",
      deadline: "18 Sep 2026",
    },
    {
      id: "EC-2026-00125",
      title: "Water Leakage",
      category: "Water Leakage",
      location: "Ward 5, Muzaffarpur",
      priority: "HIGH",
      status: "WORK_STARTED",
      deadline: "16 Sep 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">

      {/* Welcome Section */}
      <div className="mb-7">
        <p className="text-sm font-semibold text-green-600">
          Field Worker Portal
        </p>

        <h1 className="mt-1 text-2xl font-bold text-slate-800 md:text-3xl">
          Welcome, Shivani 👋
        </h1>

        <p className="mt-1 text-sm text-slate-500 md:text-base">
          Here is an overview of your work today.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-800">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${stat.color}`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-7 rounded-2xl bg-green-700 p-5 shadow-sm md:p-6">
        <h2 className="text-xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-green-100">
          Manage your assigned field work quickly.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            to="/worker/tasks"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-50"
          >
            📋 My Tasks
          </Link>

          <Link
            to="/worker/tasks/EC-2026-00123"
            className="rounded-lg border border-white px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-600"
          >
            🔧 Start Current Task
          </Link>

          <Link
            to="/worker/completed-tasks"
            className="rounded-lg border border-white px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-600"
          >
            ✅ Completed Tasks
          </Link>
        </div>
      </div>

      {/* Recent Tasks */}
      <div className="mt-8">

        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              My Recent Tasks
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Recently assigned tasks
            </p>
          </div>

          <Link
            to="/worker/tasks"
            className="text-sm font-semibold text-green-600 hover:text-green-700"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-4">
          {recentTasks.map((task) => (
            <div
              key={task.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                {/* Task Information */}
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    {task.id}
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-800">
                    {task.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {task.category}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    📍 {task.location}
                  </p>
                </div>

                {/* Priority + Status */}
                <div className="flex flex-wrap gap-2">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      task.priority === "HIGH"
                        ? "bg-red-100 text-red-700"
                        : task.priority === "MEDIUM"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {task.priority}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      task.status === "ASSIGNED"
                        ? "bg-blue-100 text-blue-700"
                        : task.status === "ACCEPTED"
                        ? "bg-cyan-100 text-cyan-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {task.status}
                  </span>

                </div>
              </div>

              {/* Bottom Section */}
              <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">

                <p className="text-xs text-slate-500">
                  Deadline:{" "}
                  <span className="font-semibold text-slate-700">
                    {task.deadline}
                  </span>
                </p>

                <div className="flex flex-wrap gap-2">

                  <Link
                    to={`/worker/location/${task.id}`}
                    className="rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-600 hover:bg-green-50"
                  >
                    📍 Location
                  </Link>

                  <Link
                    to={`/worker/tasks/${task.id}`}
                    className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    View Task
                  </Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Flow */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
        <h2 className="text-xl font-bold text-slate-800">
          Your Work Flow
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Follow these steps to complete an assigned task.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">

          {[
            "Assigned",
            "Accepted",
            "On The Way",
            "Arrived",
            "Work Started",
            "Work Completed",
            "Verification",
            "Resolved",
          ].map((step, index) => (
            <div key={step} className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                {index + 1}
              </div>

              <p className="mt-2 text-xs font-semibold text-slate-600">
                {step}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Dashboard;