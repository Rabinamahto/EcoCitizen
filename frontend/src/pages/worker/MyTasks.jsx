
import { Link } from "react-router-dom";
import { useState } from "react";

function MyTasks() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const tasks = [
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
    {
      id: "EC-2026-00126",
      title: "Road Cleaning",
      category: "Road",
      location: "Ward 3, Muzaffarpur",
      priority: "LOW",
      status: "WORK_COMPLETED",
      deadline: "15 Sep 2026",
    },
  ];

  const filteredTasks = tasks.filter((task) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      task.id.toLowerCase().includes(searchValue) ||
      task.title.toLowerCase().includes(searchValue) ||
      task.category.toLowerCase().includes(searchValue) ||
      task.location.toLowerCase().includes(searchValue);

    let matchesFilter = true;

    if (activeFilter === "ASSIGNED") {
      matchesFilter = task.status === "ASSIGNED";
    }

    if (activeFilter === "IN_PROGRESS") {
      matchesFilter = [
        "ACCEPTED",
        "ON_THE_WAY",
        "ARRIVED",
        "WORK_STARTED",
      ].includes(task.status);
    }

    if (activeFilter === "COMPLETED") {
      matchesFilter = task.status === "WORK_COMPLETED";
    }

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">

      {/* Header */}
      <div className="mb-7">
        <Link
          to="/worker/dashboard"
          className="text-sm font-semibold text-green-600 hover:text-green-700"
        >
          ← Back to Dashboard
        </Link>

        <div className="mt-4">
          <p className="text-sm font-semibold text-green-600">
            Field Worker Portal
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-800 md:text-3xl">
            My Tasks
          </h1>

          <p className="mt-1 text-sm text-slate-500 md:text-base">
            View and manage your assigned field tasks.
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <label className="text-sm font-semibold text-slate-700">
          Search Tasks
        </label>

        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by complaint ID, task, category or location..."
          className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-3">

        {[
          { label: "All", value: "ALL" },
          { label: "Assigned", value: "ASSIGNED" },
          { label: "In Progress", value: "IN_PROGRESS" },
          { label: "Completed", value: "COMPLETED" },
        ].map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
              activeFilter === filter.value
                ? "bg-green-600 text-white"
                : "bg-white text-slate-700 shadow-sm hover:bg-green-50"
            }`}
          >
            {filter.label}
          </button>
        ))}

      </div>

      {/* Task Count */}
      <div className="mb-4">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-700">
            {filteredTasks.length}
          </span>{" "}
          task{filteredTasks.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Tasks */}
      <div className="space-y-4">

        {filteredTasks.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="text-5xl">📋</div>

            <h2 className="mt-4 text-lg font-bold text-slate-800">
              No tasks found
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Try another search or filter.
            </p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md md:p-6"
            >

              {/* Top Section */}
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    COMPLAINT ID
                  </p>

                  <p className="mt-1 font-bold text-green-600">
                    {task.id}
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-slate-800">
                    {task.title}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Category: {task.category}
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
                    {task.priority} PRIORITY
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      task.status === "ASSIGNED"
                        ? "bg-blue-100 text-blue-700"
                        : task.status === "ACCEPTED"
                        ? "bg-cyan-100 text-cyan-700"
                        : task.status === "WORK_STARTED"
                        ? "bg-purple-100 text-purple-700"
                        : task.status === "WORK_COMPLETED"
                        ? "bg-green-100 text-green-700"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {task.status.replaceAll("_", " ")}
                  </span>

                </div>

              </div>

              {/* Task Information */}
              <div className="mt-5 grid grid-cols-1 gap-4 border-t border-slate-100 pt-5 sm:grid-cols-3">

                <div>
                  <p className="text-xs text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    📍 {task.location}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Priority
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {task.priority}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Deadline
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    📅 {task.deadline}
                  </p>
                </div>

              </div>

              {/* Actions */}
              <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">

                <Link
                  to={`/worker/location/${task.id}`}
                  className="rounded-lg border border-green-600 px-5 py-2.5 text-center text-sm font-semibold text-green-600 hover:bg-green-50"
                >
                  📍 Location
                </Link>

                <Link
                  to={`/worker/tasks/${task.id}`}
                  className="rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-green-700"
                >
                  View Details
                </Link>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default MyTasks;