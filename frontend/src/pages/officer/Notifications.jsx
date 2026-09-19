import { Link } from "react-router-dom";

const notifications = [
  {
    id: 1,
    title: "New complaint received",
    message: "A new garbage accumulation complaint was submitted in Main Market.",
    time: "10 minutes ago",
    type: "Complaint",
    unread: true,
  },
  {
    id: 2,
    title: "Complaint pending assignment",
    message: "Complaint EC1024 is waiting for a field worker assignment.",
    time: "35 minutes ago",
    type: "Assignment",
    unread: true,
  },
  {
    id: 3,
    title: "Complaint status updated",
    message: "Complaint EC1023 has been moved to In Progress.",
    time: "1 hour ago",
    type: "Status",
    unread: false,
  },
  {
    id: 4,
    title: "Complaint resolved",
    message: "Complaint EC1022 has been marked as resolved.",
    time: "3 hours ago",
    type: "Resolved",
    unread: false,
  },
  {
    id: 5,
    title: "Overdue complaint alert",
    message: "A complaint in Civil Lines requires officer attention.",
    time: "Yesterday",
    type: "Alert",
    unread: false,
  },
];

function Notifications() {
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
            className="mb-2 block rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"
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
            className="mb-2 block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
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
              Notifications
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Stay updated with complaints, assignments and important alerts.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl p-5 md:p-8">
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Total Notifications</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {notifications.length}
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm text-emerald-700">Unread</p>
              <p className="mt-2 text-3xl font-bold text-emerald-800">
                {notifications.filter((item) => item.unread).length}
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm text-amber-700">Alerts</p>
              <p className="mt-2 text-3xl font-bold text-amber-800">
                {notifications.filter((item) => item.type === "Alert").length}
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-6">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Recent Notifications
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Latest activity from your officer workspace.
                  </p>
                </div>

                <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">
                  Mark All Read
                </button>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-5 transition hover:bg-slate-50 ${
                    notification.unread ? "bg-emerald-50/40" : ""
                  }`}
                >
                  <div className="flex gap-4">
                    <div
                      className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        notification.type === "Alert"
                          ? "bg-amber-100 text-amber-700"
                          : notification.type === "Resolved"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      !
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-bold text-slate-900">
                              {notification.title}
                            </h4>

                            {notification.unread && (
                              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                                New
                              </span>
                            )}
                          </div>

                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {notification.message}
                          </p>
                        </div>

                        <span className="whitespace-nowrap text-xs text-slate-400">
                          {notification.time}
                        </span>
                      </div>

                      <span className="mt-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {notification.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Notifications;