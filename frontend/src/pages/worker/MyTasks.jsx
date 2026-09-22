import { Link } from "react-router-dom";

function MyTasks() {
  const tasks = [
    {
      id: "EC-2026-00123",
      title: "Garbage Overflow",
      category: "Garbage",
      location: "Ward 12, Muzaffarpur",
      priority: "HIGH",
      status: "ASSIGNED",
    },
    {
      id: "EC-2026-00124",
      title: "Street Light Not Working",
      category: "Street Light",
      location: "Ward 8, Muzaffarpur",
      priority: "MEDIUM",
      status: "ACCEPTED",
    },
    {
      id: "EC-2026-00125",
      title: "Water Leakage",
      category: "Water",
      location: "Ward 5, Muzaffarpur",
      priority: "HIGH",
      status: "WORK_STARTED",
    },
    {
      id: "EC-2026-00126",
      title: "Road Cleaning",
      category: "Road",
      location: "Ward 3, Muzaffarpur",
      priority: "LOW",
      status: "COMPLETED",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
          My Tasks
        </h1>

        <p className="mt-1 text-sm text-gray-500 md:text-base">
          View and manage your assigned tasks.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="mb-6 flex flex-wrap gap-3">

        <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white">
          All
        </button>

        <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          Assigned
        </button>

        <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          In Progress
        </button>

        <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          Completed
        </button>

      </div>

      {/* Tasks */}
      <div className="grid gap-4">

        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >

            {/* Top */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  {task.id}
                </p>

                <h2 className="mt-1 text-lg font-bold text-gray-800">
                  {task.title}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Category: {task.category}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  📍 {task.location}
                </p>
              </div>

              {/* Priority + Status */}
              <div className="flex flex-wrap gap-2">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
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
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    task.status === "COMPLETED"
                      ? "bg-green-100 text-green-700"
                      : task.status === "WORK_STARTED"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {task.status}
                </span>

              </div>

            </div>

            {/* Bottom */}
            <div className="mt-5 flex justify-end border-t border-gray-100 pt-4">

              <Link
                to={`/worker/tasks/${task.id}`}
                className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
              >
                View Details
              </Link>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default MyTasks;