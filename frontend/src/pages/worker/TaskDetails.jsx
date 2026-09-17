import { Link, useParams } from "react-router-dom";

function TaskDetails() {
  const { id } = useParams();

  const tasks = [
    {
      id: "EC-2026-00123",
      title: "Garbage Overflow",
      category: "Garbage",
      description:
        "The garbage bin is overflowing and needs immediate cleaning.",
      location: "Ward 12, Muzaffarpur",
      priority: "HIGH",
      status: "ASSIGNED",
      assignedDate: "16 Sep 2026",
      deadline: "17 Sep 2026",
    },
    {
      id: "EC-2026-00124",
      title: "Street Light Not Working",
      category: "Street Light",
      description:
        "Street light is not working near the main road.",
      location: "Ward 8, Muzaffarpur",
      priority: "MEDIUM",
      status: "ACCEPTED",
      assignedDate: "16 Sep 2026",
      deadline: "18 Sep 2026",
    },
    {
      id: "EC-2026-00125",
      title: "Water Leakage",
      category: "Water",
      description:
        "Water pipe leakage has been reported near the residential area.",
      location: "Ward 5, Muzaffarpur",
      priority: "HIGH",
      status: "WORK_STARTED",
      assignedDate: "15 Sep 2026",
      deadline: "16 Sep 2026",
    },
    {
      id: "EC-2026-00126",
      title: "Road Cleaning",
      category: "Road",
      description:
        "Roadside area needs cleaning and waste removal.",
      location: "Ward 3, Muzaffarpur",
      priority: "LOW",
      status: "COMPLETED",
      assignedDate: "14 Sep 2026",
      deadline: "15 Sep 2026",
    },
  ];

  const task = tasks.find((item) => item.id === id);

  if (!task) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-red-600">
          Task Not Found
        </h1>

        <Link
          to="/worker/tasks"
          className="mt-4 inline-block text-green-600"
        >
          ← Back to My Tasks
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="mb-6">
        <Link
          to="/worker/tasks"
          className="text-sm font-medium text-green-600 hover:text-green-700"
        >
          ← Back to My Tasks
        </Link>

        <h1 className="mt-3 text-2xl font-bold text-gray-800 md:text-3xl">
          Task Details
        </h1>
      </div>

      <div className="max-w-4xl rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
        <div className="flex flex-col gap-4 border-b border-gray-200 pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Complaint ID
            </p>

            <h2 className="mt-1 text-xl font-bold text-gray-800">
              {task.id}
            </h2>
          </div>

          <span
            className={`w-fit rounded-full px-4 py-2 text-xs font-semibold ${
              task.priority === "HIGH"
                ? "bg-red-100 text-red-700"
                : task.priority === "MEDIUM"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {task.priority} PRIORITY
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">
              Problem
            </p>

            <p className="mt-1 font-semibold text-gray-800">
              {task.title}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Category
            </p>

            <p className="mt-1 font-semibold text-gray-800">
              {task.category}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Location
            </p>

            <p className="mt-1 font-semibold text-gray-800">
              📍 {task.location}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Current Status
            </p>

            <span className="mt-1 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              {task.status}
            </span>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Assigned Date
            </p>

            <p className="mt-1 font-semibold text-gray-800">
              {task.assignedDate}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Deadline
            </p>

            <p className="mt-1 font-semibold text-gray-800">
              {task.deadline}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Description
          </p>

          <p className="mt-2 leading-6 text-gray-700">
            {task.description}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {task.status === "ASSIGNED" && (
            <button
              type="button"
              className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700"
            >
              Accept Task
            </button>
          )}

          <Link
            to={`/worker/location/${task.id}`}
            className="rounded-lg border border-green-600 px-5 py-2.5 text-sm font-medium text-green-600 hover:bg-green-50"
          >
            View Location
          </Link>

          <Link
            to={`/worker/progress/${task.id}`}
            className="rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900"
          >
            Work Progress
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;