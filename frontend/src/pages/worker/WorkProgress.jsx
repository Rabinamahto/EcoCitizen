

import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function WorkProgress() {
  const { id } = useParams();

  const [workCompleted, setWorkCompleted] = useState(false);

  const task = {
    id: id,
    title: "Garbage Overflow",
    location: "Ward 12, Muzaffarpur",
    status: workCompleted ? "WORK_COMPLETED" : "WORK_STARTED",
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
      status: "completed",
      date: "16 Sep 2026",
    },
    {
      title: "Work Completed",
      status: workCompleted ? "completed" : "current",
      date: workCompleted ? "16 Sep 2026" : "-",
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

  const handleCompleteWork = () => {
    setWorkCompleted(true);
    alert("Work marked as completed. Please upload resolution evidence.");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">

      {/* Header */}
      <div className="mb-7">
        <Link
          to={`/worker/tasks/${task.id}`}
          className="text-sm font-semibold text-green-600 hover:text-green-700"
        >
          ← Back to Task Details
        </Link>

        <div className="mt-4">
          <p className="text-sm font-semibold text-green-600">
            Field Worker Portal
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-800 md:text-3xl">
            Work Progress
          </h1>

          <p className="mt-1 text-sm text-slate-500 md:text-base">
            Track and update the progress of your assigned task.
          </p>
        </div>
      </div>

      {/* Main Card */}
      <div className="max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">

        {/* Task Information */}
        <div className="border-b border-slate-200 pb-5">

          <p className="text-xs font-semibold text-slate-400">
            COMPLAINT ID
          </p>

          <h2 className="mt-1 text-xl font-bold text-green-600 md:text-2xl">
            {task.id}
          </h2>

          <p className="mt-2 font-semibold text-slate-800">
            {task.title}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            📍 {task.location}
          </p>

        </div>

        {/* Current Status */}
        <div className="mt-6">

          <p className="text-sm text-slate-500">
            Current Status
          </p>

          <span
            className={`mt-2 inline-block rounded-full px-4 py-2 text-xs font-bold ${
              task.status === "WORK_COMPLETED"
                ? "bg-green-100 text-green-700"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {task.status.replaceAll("_", " ")}
          </span>

        </div>

        {/* Timeline */}
        <div className="mt-8">

          <h2 className="text-lg font-bold text-slate-800">
            Task Timeline
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your task status history.
          </p>

          <div className="mt-6">

            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4"
              >

                {/* Circle + Line */}
                <div className="flex flex-col items-center">

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      step.status === "completed"
                        ? "bg-green-600 text-white"
                        : step.status === "current"
                        ? "bg-purple-600 text-white ring-4 ring-purple-100"
                        : "bg-slate-100 text-slate-400"
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
                          : "bg-slate-200"
                      }`}
                    ></div>
                  )}

                </div>

                {/* Step Details */}
                <div className="pb-8">

                  <h3
                    className={`font-semibold ${
                      step.status === "pending"
                        ? "text-slate-400"
                        : "text-slate-800"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {step.date}
                  </p>

                  {step.status === "current" && (
                    <span className="mt-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                      Current Step
                    </span>
                  )}

                  {step.status === "completed" && (
                    <span className="mt-2 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                      Completed
                    </span>
                  )}

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 border-t border-slate-200 pt-6">

          <h2 className="text-lg font-bold text-slate-800">
            Work Actions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Update your work after completing the field task.
          </p>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

            {!workCompleted ? (
              <button
                type="button"
                onClick={handleCompleteWork}
                className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
              >
                ✓ Mark Work Completed
              </button>
            ) : (
              <div className="rounded-lg bg-green-100 px-5 py-2.5 text-sm font-semibold text-green-700">
                ✓ Work Completed
              </div>
            )}

            <Link
              to={`/worker/upload-evidence/${task.id}`}
              className={`rounded-lg px-5 py-2.5 text-center text-sm font-semibold ${
                workCompleted
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border border-green-600 text-green-600 hover:bg-green-50"
              }`}
            >
              📷 Upload Evidence
            </Link>

            <Link
              to={`/worker/location/${task.id}`}
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              📍 View Location
            </Link>

          </div>
        </div>

        {/* Verification Notice */}
        <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">

          <h3 className="text-sm font-bold text-blue-800">
            ℹ️ Verification Process
          </h3>

          <p className="mt-2 text-xs leading-5 text-blue-700">
            After completing the work, upload resolution evidence.
            The task will then move to verification. Final
            <strong> RESOLVED </strong>
            status will be given after officer verification.
          </p>

        </div>

      </div>
    </div>
  );
}

export default WorkProgress;