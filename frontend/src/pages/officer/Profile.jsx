import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-slate-200 bg-white lg:block">
        <div className="border-b border-slate-200 p-6">
          <h1 className="text-2xl font-bold text-emerald-700">EcoCitizen</h1>
          <p className="mt-1 text-sm text-slate-500">Officer Panel</p>
        </div>

        <nav className="p-4">
          <Link
            to="/officer/dashboard"
            className="mb-2 block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Dashboard
          </Link>

          <Link
            to="/officer/complaints"
            className="mb-2 block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Complaints
          </Link>

          <Link
            to="/officer/map"
            className="mb-2 block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Complaint Map
          </Link>

          <Link
            to="/officer/analytics"
            className="mb-2 block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Analytics
          </Link>

          <Link
            to="/officer/notifications"
            className="mb-2 block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Notifications
          </Link>

          <Link
            to="/officer/overdue"
            className="mb-2 block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Overdue
          </Link>

          <Link
            to="/officer/profile"
            className="mb-2 block rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"
          >
            Profile
          </Link>
        </nav>
      </aside>

      <main className="lg:ml-64">
        <div className="border-b border-slate-200 bg-white px-5 py-5 md:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold text-emerald-600">
              Officer Panel
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              Officer Profile
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              View and manage your officer account information.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl space-y-6 p-5 md:p-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-3xl font-bold text-emerald-700">
                SK
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Sakshi Kumar
                </h3>

                <p className="mt-1 text-slate-500">Environmental Officer</p>

                <span className="mt-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Active Officer
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Personal Information
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Basic account information for the officer.
              </p>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Full Name
                </p>

                <p className="mt-2 font-semibold text-slate-800">
                  Sakshi Kumar
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Role
                </p>

                <p className="mt-2 font-semibold text-slate-800">
                  Environmental Officer
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Email
                </p>

                <p className="mt-2 font-semibold text-slate-800">
                  officer@ecocitizen.com
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Phone
                </p>

                <p className="mt-2 font-semibold text-slate-800">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Department
                </p>

                <p className="mt-2 font-semibold text-slate-800">
                  Municipal Environment Department
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Jurisdiction
                </p>

                <p className="mt-2 font-semibold text-slate-800">
                  Ward 01 - Ward 20
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Officer Activity
              </h3>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Assigned Reports</p>

                <p className="mt-2 text-3xl font-bold text-slate-900">248</p>
              </div>

              <div className="rounded-2xl bg-amber-50 p-5">
                <p className="text-sm text-amber-700">Pending</p>

                <p className="mt-2 text-3xl font-bold text-amber-800">42</p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-5">
                <p className="text-sm text-emerald-700">Resolved</p>

                <p className="mt-2 text-3xl font-bold text-emerald-800">139</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
              Edit Profile
            </button>

            <button className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Change Password
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;