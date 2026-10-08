import { Link } from "react-router-dom";

function Dashboard() {
  const stats = [
    {
      title: "Total Tasks",
      value: 12,
      icon: "📋",
    },
    {
      title: "Pending Tasks",
      value: 5,
      icon: "⏳",
    },
    {
      title: "In Progress",
      value: 3,
      icon: "🔧",
    },
    {
      title: "Completed",
      value: 4,
      icon: "✅",
    },
  ];

  const recentTasks = [
    {
      id: "EC-2026-00123",
      title: "Garbage Overflow",
      location: "Ward 12, Muzaffarpur",
      priority: "HIGH",
      status: "ASSIGNED",
    },
    {
      id: "EC-2026-00124",
      title: "Street Light Not Working",
      location: "Ward 8, Muzaffarpur",
      priority: "MEDIUM",
      status: "ACCEPTED",
    },
    {
      id: "EC-2026-00125",
      title: "Water Leakage",
      location: "Ward 5, Muzaffarpur",
      priority: "HIGH",
      status: "WORK_STARTED",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
          Worker Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500 md:text-base">
          Manage your assigned tasks and work progress.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-800">
                  {stat.value}
                </h2>
              </div>

              <span className="text-3xl">
                {stat.icon}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">

        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              My Recent Tasks
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Recently assigned tasks
            </p>
          </div>

          <Link
            to="/worker/tasks"
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-4">
          {recentTasks.map((task) => (
            <div
              key={task.id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    {task.id}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-gray-800">
                    {task.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    📍 {task.location}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      task.priority === "HIGH"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {task.priority}
                  </span>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {task.status}
                  </span>

                </div>
              </div>

              <div className="mt-4 border-t border-gray-100 pt-4">

                <Link
                  to={`/worker/tasks/${task.id}`}
                  className="inline-block rounded-lg border border-green-600 px-4 py-2 text-sm font-medium text-green-600 hover:bg-green-50"
                >
                  View Task
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Dashboard;