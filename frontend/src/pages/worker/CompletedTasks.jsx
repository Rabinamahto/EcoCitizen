import { Link } from "react-router-dom";

function CompletedTasks() {
  const completedTasks = [
    {
      id: "EC-2026-00126",
      title: "Road Cleaning",
      category: "Road",
      location: "Ward 3, Muzaffarpur",
      completedDate: "15 Sep 2026",
      status: "COMPLETED",
    },
    {
      id: "EC-2026-00120",
      title: "Garbage Collection",
      category: "Garbage",
      location: "Ward 7, Muzaffarpur",
      completedDate: "13 Sep 2026",
      status: "COMPLETED",
    },
    {
      id: "EC-2026-00115",
      title: "Street Light Repair",
      category: "Street Light",
      location: "Ward 9, Muzaffarpur",
      completedDate: "10 Sep 2026",
      status: "COMPLETED",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="mb-6">
        <Link
          to="/worker/dashboard"
          className="text-sm font-medium text-green-600 hover:text-green-700"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="mt-3 text-2xl font-bold text-gray-800 md:text-3xl">
          Completed Tasks
        </h1>

        <p className="mt-1 text-sm text-gray-500 md:text-base">
          View all tasks completed by you.
        </p>
      </div>

      <div className="grid gap-4">
        {completedTasks.map((task) => (
          <div
            key={task.id}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
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

                <p className="mt-1 text-sm text-gray-500">
                  Completed: {task.completedDate}
                </p>
              </div>

              <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                {task.status}
              </span>
            </div>

            <div className="mt-5 border-t border-gray-100 pt-4">
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
  );
}

export default CompletedTasks;