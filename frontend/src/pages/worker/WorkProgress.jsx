import { Link, useParams } from "react-router-dom";

function WorkProgress() {
  const { id } = useParams();

  const task = {
    id: id,
    title: "Garbage Overflow",
    location: "Ward 12, Muzaffarpur",
    status: "WORK_STARTED",
  };

  const steps = [
    {
      title: "Task Assigned",
      status: "completed",
      date: "16 Sep 2026",
    },
    {
      title: "Task Accepted",
      status: "completed",
      date: "16 Sep 2026",
    },
    {
      title: "On The Way",
      status: "completed",
      date: "16 Sep 2026",
    },
    {
      title: "Arrived",
      status: "completed",
      date: "16 Sep 2026",
    },
    {
      title: "Work Started",
      status: "current",
      date: "16 Sep 2026",
    },
    {
      title: "Work Completed",
      status: "pending",
      date: "-",
    },
    {
      title: "Under Verification",
      status: "pending",
      date: "-",
    },
    {
      title: "Resolved",
      status: "pending",
      date: "-",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="mb-6">
        <Link
          to={`/worker/tasks/${task.id}`}
          className="text-sm font-medium text-green-600 hover:text-green-700"
        >
          ← Back to Task Details
        </Link>

        <h1 className="mt-3 text-2xl font-bold text-gray-800 md:text-3xl">
          Work Progress
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Track the progress of your assigned task.
        </p>
      </div>

      {/* Task Information */}
      <div className="max-w-4xl rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
        <div className="border-b border-gray-200 pb-5">
          <p className="text-sm text-gray-500">Complaint ID</p>

          <h2 className="mt-1 text-xl font-bold text-gray-800">
            {task.id}
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            {task.title}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            📍 {task.location}
          </p>
        </div>

        {/* Current Status */}
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Current Status
          </p>

          <span className="mt-2 inline-block rounded-full bg-purple-100 px-4 py-2 text-xs font-semibold text-purple-700">
            {task.status}
          </span>
        </div>

        {/* Progress Timeline */}
        <div className="mt-8">
          <h2 className="text-lg font-bold text-gray-800">
            Task Timeline
          </h2>

          <div className="mt-6">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                
                {/* Circle + Line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                      step.status === "completed"
                        ? "bg-green-600 text-white"
                        : step.status === "current"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step.status === "completed"
                      ? "✓"
                      : index + 1}
                  </div>

                  {index !== steps.length - 1 && (
                    <div
                      className={`h-12 w-0.5 ${
                        step.status === "completed"
                          ? "bg-green-600"
                          : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </div>

                {/* Step Details */}
                <div className="pb-8">
                  <h3
                    className={`font-semibold ${
                      step.status === "pending"
                        ? "text-gray-400"
                        : "text-gray-800"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {step.date}
                  </p>

                  {step.status === "current" && (
                    <span className="mt-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                      Current Step
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-wrap gap-3 border-t border-gray-200 pt-5">
          <button
            type="button"
            className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700"
          >
            Mark Work Completed
          </button>

          <Link
            to={`/worker/upload-evidence/${task.id}`}
            className="rounded-lg border border-green-600 px-5 py-2.5 text-sm font-medium text-green-600 hover:bg-green-50"
          >
            Upload Evidence
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WorkProgress;