// import { Link, useParams } from "react-router-dom";

// function TaskDetails() {
//   const { id } = useParams();

//   const tasks = [
//     {
//       id: "EC-2026-00123",
//       title: "Garbage Overflow",
//       category: "Garbage",
//       description:
//         "The garbage bin is overflowing and needs immediate cleaning.",
//       location: "Ward 12, Muzaffarpur",
//       priority: "HIGH",
//       status: "ASSIGNED",
//       assignedDate: "16 Sep 2026",
//       deadline: "17 Sep 2026",
//     },
//     {
//       id: "EC-2026-00124",
//       title: "Street Light Not Working",
//       category: "Street Light",
//       description:
//         "Street light is not working near the main road.",
//       location: "Ward 8, Muzaffarpur",
//       priority: "MEDIUM",
//       status: "ACCEPTED",
//       assignedDate: "16 Sep 2026",
//       deadline: "18 Sep 2026",
//     },
//     {
//       id: "EC-2026-00125",
//       title: "Water Leakage",
//       category: "Water",
//       description:
//         "Water pipe leakage has been reported near the residential area.",
//       location: "Ward 5, Muzaffarpur",
//       priority: "HIGH",
//       status: "WORK_STARTED",
//       assignedDate: "15 Sep 2026",
//       deadline: "16 Sep 2026",
//     },
//     {
//       id: "EC-2026-00126",
//       title: "Road Cleaning",
//       category: "Road",
//       description:
//         "Roadside area needs cleaning and waste removal.",
//       location: "Ward 3, Muzaffarpur",
//       priority: "LOW",
//       status: "COMPLETED",
//       assignedDate: "14 Sep 2026",
//       deadline: "15 Sep 2026",
//     },
//   ];

//   const task = tasks.find((item) => item.id === id);

//   if (!task) {
//     return (
//       <div className="min-h-screen bg-gray-100 p-6">
//         <h1 className="text-2xl font-bold text-red-600">
//           Task Not Found
//         </h1>

//         <Link
//           to="/worker/tasks"
//           className="mt-4 inline-block text-green-600"
//         >
//           ← Back to My Tasks
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 md:p-6">
//       <div className="mb-6">
//         <Link
//           to="/worker/tasks"
//           className="text-sm font-medium text-green-600 hover:text-green-700"
//         >
//           ← Back to My Tasks
//         </Link>

//         <h1 className="mt-3 text-2xl font-bold text-gray-800 md:text-3xl">
//           Task Details
//         </h1>
//       </div>

//       <div className="max-w-4xl rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
//         <div className="flex flex-col gap-4 border-b border-gray-200 pb-5 md:flex-row md:items-center md:justify-between">
//           <div>
//             <p className="text-sm text-gray-500">
//               Complaint ID
//             </p>

//             <h2 className="mt-1 text-xl font-bold text-gray-800">
//               {task.id}
//             </h2>
//           </div>

//           <span
//             className={`w-fit rounded-full px-4 py-2 text-xs font-semibold ${
//               task.priority === "HIGH"
//                 ? "bg-red-100 text-red-700"
//                 : task.priority === "MEDIUM"
//                 ? "bg-yellow-100 text-yellow-700"
//                 : "bg-green-100 text-green-700"
//             }`}
//           >
//             {task.priority} PRIORITY
//           </span>
//         </div>

//         <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
//           <div>
//             <p className="text-sm text-gray-500">
//               Problem
//             </p>

//             <p className="mt-1 font-semibold text-gray-800">
//               {task.title}
//             </p>
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">
//               Category
//             </p>

//             <p className="mt-1 font-semibold text-gray-800">
//               {task.category}
//             </p>
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">
//               Location
//             </p>

//             <p className="mt-1 font-semibold text-gray-800">
//               📍 {task.location}
//             </p>
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">
//               Current Status
//             </p>

//             <span className="mt-1 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
//               {task.status}
//             </span>
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">
//               Assigned Date
//             </p>

//             <p className="mt-1 font-semibold text-gray-800">
//               {task.assignedDate}
//             </p>
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">
//               Deadline
//             </p>

//             <p className="mt-1 font-semibold text-gray-800">
//               {task.deadline}
//             </p>
//           </div>
//         </div>

//         <div className="mt-6">
//           <p className="text-sm text-gray-500">
//             Description
//           </p>

//           <p className="mt-2 leading-6 text-gray-700">
//             {task.description}
//           </p>
//         </div>

//         <div className="mt-8 flex flex-wrap gap-3">
//           {task.status === "ASSIGNED" && (
//             <button
//               type="button"
//               className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700"
//             >
//               Accept Task
//             </button>
//           )}

//           <Link
//             to={`/worker/location/${task.id}`}
//             className="rounded-lg border border-green-600 px-5 py-2.5 text-sm font-medium text-green-600 hover:bg-green-50"
//           >
//             View Location
//           </Link>

//           <Link
//             to={`/worker/progress/${task.id}`}
//             className="rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900"
//           >
//             Work Progress
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TaskDetails;


import { Link, useParams } from "react-router-dom";

function TaskDetails() {
  const { id } = useParams();

  const tasks = [
    {
      id: "EC-2026-00123",
      title: "Garbage Overflow",
      category: "Garbage / Waste",
      description:
        "The garbage bin is overflowing and needs immediate cleaning. The waste is creating an unhygienic condition in the area.",
      location: "Ward 12, Muzaffarpur",
      priority: "HIGH",
      status: "ASSIGNED",
      assignedDate: "16 Sep 2026",
      deadline: "17 Sep 2026",
    },
    {
      id: "EC-2026-00124",
      title: "Street Light Not Working",
      category: "Streetlight",
      description:
        "Street light is not working near the main road and needs to be inspected and repaired.",
      location: "Ward 8, Muzaffarpur",
      priority: "MEDIUM",
      status: "ACCEPTED",
      assignedDate: "16 Sep 2026",
      deadline: "18 Sep 2026",
    },
    {
      id: "EC-2026-00125",
      title: "Water Leakage",
      category: "Water Leakage",
      description:
        "Water pipe leakage has been reported near the residential area. The leakage needs to be checked and repaired.",
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
      status: "WORK_COMPLETED",
      assignedDate: "14 Sep 2026",
      deadline: "15 Sep 2026",
    },
  ];

  const task = tasks.find((item) => item.id === id);

  const statusSteps = [
    "ASSIGNED",
    "ACCEPTED",
    "ON_THE_WAY",
    "ARRIVED",
    "WORK_STARTED",
    "WORK_COMPLETED",
    "UNDER_VERIFICATION",
    "RESOLVED",
  ];

  const currentStep = statusSteps.indexOf(task?.status);

  if (!task) {
    return (
      <div className="min-h-screen bg-slate-50 p-4 md:p-6">
        <div className="rounded-2xl border border-red-200 bg-white p-8 shadow-sm">
          <div className="text-5xl">🔍</div>

          <h1 className="mt-4 text-2xl font-bold text-red-600">
            Task Not Found
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            The requested task does not exist or is no longer available.
          </p>

          <Link
            to="/worker/tasks"
            className="mt-5 inline-block rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
          >
            ← Back to My Tasks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">

      {/* Header */}
      <div className="mb-7">
        <Link
          to="/worker/tasks"
          className="text-sm font-semibold text-green-600 hover:text-green-700"
        >
          ← Back to My Tasks
        </Link>

        <div className="mt-4">
          <p className="text-sm font-semibold text-green-600">
            Field Worker Portal
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-800 md:text-3xl">
            Task Details
          </h1>

          <p className="mt-1 text-sm text-slate-500 md:text-base">
            View complaint details and manage your assigned task.
          </p>
        </div>
      </div>

      {/* Main Card */}
      <div className="max-w-5xl rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Task Header */}
        <div className="flex flex-col gap-4 border-b border-slate-200 p-5 md:flex-row md:items-start md:justify-between md:p-6">

          <div>
            <p className="text-xs font-semibold text-slate-400">
              COMPLAINT ID
            </p>

            <h2 className="mt-1 text-xl font-bold text-green-600 md:text-2xl">
              {task.id}
            </h2>

            <h3 className="mt-2 text-lg font-bold text-slate-800">
              {task.title}
            </h3>
          </div>

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

            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
              {task.status.replaceAll("_", " ")}
            </span>

          </div>
        </div>

        {/* Task Information */}
        <div className="p-5 md:p-6">

          <h2 className="text-lg font-bold text-slate-800">
            Task Information
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">
                Problem
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                {task.title}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">
                Category
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                {task.category}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">
                Location
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                📍 {task.location}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">
                Current Status
              </p>

              <p className="mt-1 font-semibold text-green-600">
                {task.status.replaceAll("_", " ")}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">
                Assigned Date
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                📅 {task.assignedDate}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">
                Deadline
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                ⏰ {task.deadline}
              </p>
            </div>

          </div>

          {/* Description */}
          <div className="mt-7 border-t border-slate-200 pt-6">

            <h2 className="text-lg font-bold text-slate-800">
              Complaint Description
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              {task.description}
            </p>

          </div>

          {/* Workflow */}
          <div className="mt-8 border-t border-slate-200 pt-6">

            <h2 className="text-lg font-bold text-slate-800">
              Task Workflow
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Track the current progress of your assigned task.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">

              {statusSteps.map((step, index) => {
                const isCompleted =
                  currentStep >= 0 && index <= currentStep;

                const isCurrent = index === currentStep;

                return (
                  <div key={step} className="text-center">

                    <div
                      className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                        isCompleted
                          ? "bg-green-600 text-white"
                          : "bg-slate-100 text-slate-400"
                      } ${
                        isCurrent
                          ? "ring-4 ring-green-100"
                          : ""
                      }`}
                    >
                      {index + 1}
                    </div>

                    <p
                      className={`mt-2 text-xs font-semibold ${
                        isCompleted
                          ? "text-green-700"
                          : "text-slate-400"
                      }`}
                    >
                      {step.replaceAll("_", " ")}
                    </p>

                  </div>
                );
              })}

            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:flex-wrap">

            {task.status === "ASSIGNED" && (
              <button
                type="button"
                className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
              >
                ✓ Accept Task
              </button>
            )}

            {task.status === "ACCEPTED" && (
              <button
                type="button"
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                🚗 Start Travel
              </button>
            )}

            {task.status === "ON_THE_WAY" && (
              <Link
                to={`/worker/location/${task.id}`}
                className="rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-green-700"
              >
                📍 Mark Arrival
              </Link>
            )}

            {task.status === "ARRIVED" && (
              <Link
                to={`/worker/progress/${task.id}`}
                className="rounded-lg bg-purple-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-purple-700"
              >
                🔧 Start Work
              </Link>
            )}

            {task.status === "WORK_STARTED" && (
              <Link
                to={`/worker/progress/${task.id}`}
                className="rounded-lg bg-purple-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-purple-700"
              >
                🔧 Update Progress
              </Link>
            )}

            {task.status === "WORK_COMPLETED" && (
              <Link
                to={`/worker/progress/${task.id}`}
                className="rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-green-700"
              >
                📷 Upload Evidence
              </Link>
            )}

            <Link
              to={`/worker/location/${task.id}`}
              className="rounded-lg border border-green-600 px-5 py-2.5 text-center text-sm font-semibold text-green-600 hover:bg-green-50"
            >
              📍 View Location
            </Link>

            <Link
              to={`/worker/progress/${task.id}`}
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              📊 Work Progress
            </Link>

          </div>

        </div>
      </div>

    </div>
  );
}

export default TaskDetails;