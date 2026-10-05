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
  };

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
          My Profile
        </h1>

        <p className="mt-1 text-sm text-gray-500 md:text-base">
          View your worker account information.
        </p>
      </div>

      <div className="max-w-3xl rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">

        {/* Profile Header */}
        <div className="flex flex-col items-center gap-4 border-b border-gray-200 pb-6 sm:flex-row">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-700">
            SK
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold text-gray-800">
              {worker.name}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Worker ID: {worker.workerId}
            </p>

            <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Active Worker
            </span>
          </div>
        </div>

        {/* Profile Information */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">

          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="mt-1 font-semibold text-gray-800">
              {worker.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Worker ID</p>
            <p className="mt-1 font-semibold text-gray-800">
              {worker.workerId}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="mt-1 font-semibold text-gray-800">
              {worker.email}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="mt-1 font-semibold text-gray-800">
              {worker.phone}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Department</p>
            <p className="mt-1 font-semibold text-gray-800">
              {worker.department}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Assigned Area</p>
            <p className="mt-1 font-semibold text-gray-800">
              {worker.area}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Joining Date</p>
            <p className="mt-1 font-semibold text-gray-800">
              {worker.joiningDate}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Role</p>
            <p className="mt-1 font-semibold text-gray-800">
              Field Worker
            </p>
          </div>

        </div>

        {/* Edit Button */}
        <div className="mt-8 border-t border-gray-200 pt-5">
          <button
            type="button"
            className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;