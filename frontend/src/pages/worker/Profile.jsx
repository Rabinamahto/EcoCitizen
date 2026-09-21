import { Link } from "react-router-dom";

function Profile() {
  const worker = {
    name: "Shivani Kumari",
    workerId: "WRK-2026-001",
    email: "shivani@example.com",
    phone: "+91 9876543210",
    department: "Municipal Cleaning Department",
    area: "Ward 12, Muzaffarpur",
    joiningDate: "10 January 2026",
    role: "Field Worker",
    status: "ACTIVE",
  };

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
            My Profile
          </h1>

          <p className="mt-1 text-sm text-slate-500 md:text-base">
            View your worker account and assigned work information.
          </p>
        </div>
      </div>

      {/* Profile Card */}
      <div className="max-w-4xl rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Profile Header */}
        <div className="flex flex-col gap-5 border-b border-slate-200 p-5 sm:flex-row sm:items-center md:p-6">

          {/* Avatar */}
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-700">
            SK
          </div>

          {/* Basic Info */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-slate-800 md:text-2xl">
              {worker.name}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Worker ID: {worker.workerId}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                ✓ {worker.status}
              </span>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                {worker.role}
              </span>
            </div>
          </div>

        </div>

        {/* Worker Information */}
        <div className="p-5 md:p-6">

          <h2 className="text-lg font-bold text-slate-800">
            Worker Information
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Full Name */}
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-400">
                Full Name
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                {worker.name}
              </p>
            </div>

            {/* Worker ID */}
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-400">
                Worker ID
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                {worker.workerId}
              </p>
            </div>

            {/* Email */}
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-400">
                Email
              </p>

              <p className="mt-1 break-all font-semibold text-slate-800">
                {worker.email}
              </p>
            </div>

            {/* Phone */}
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-400">
                Phone
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                {worker.phone}
              </p>
            </div>

            {/* Department */}
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-400">
                Department
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                {worker.department}
              </p>
            </div>

            {/* Assigned Area */}
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-400">
                Assigned Area
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                📍 {worker.area}
              </p>
            </div>

            {/* Joining Date */}
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-400">
                Joining Date
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                {worker.joiningDate}
              </p>
            </div>

            {/* Role */}
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-400">
                Role
              </p>

              <p className="mt-1 font-semibold text-slate-800">
                {worker.role}
              </p>
            </div>

          </div>

          {/* Work Information */}
          <div className="mt-8 border-t border-slate-200 pt-6">

            <h2 className="text-lg font-bold text-slate-800">
              Work Information
            </h2>

            <div className="mt-4 rounded-xl border border-green-100 bg-green-50 p-4">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-sm font-semibold text-green-800">
                    Assigned Work Area
                  </p>

                  <p className="mt-1 text-sm text-green-700">
                    You are currently assigned to {worker.area}.
                  </p>
                </div>

                <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  Active
                </span>

              </div>

            </div>
          </div>

          {/* Account Actions */}
          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row">

            <button
              type="button"
              className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
            >
              Edit Profile
            </button>

            <Link
              to="/worker/dashboard"
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Back to Dashboard
            </Link>

          </div>

        </div>
      </div>

    </div>
  );
}

export default Profile;