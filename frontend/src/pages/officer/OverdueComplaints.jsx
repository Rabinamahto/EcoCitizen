import { Link } from "react-router-dom";

const overdueComplaints = [
  {
    id: "EC1018",
    title: "Drainage Overflow",
    location: "Civil Lines, Ward 03",
    priority: "High",
    daysOverdue: 3,
    assignedTo: "Rahul Kumar",
  },
  {
    id: "EC1017",
    title: "Garbage Accumulation",
    location: "Main Market, Ward 12",
    priority: "High",
    daysOverdue: 2,
    assignedTo: "Amit Singh",
  },
  {
    id: "EC1015",
    title: "Street Light Failure",
    location: "College Road, Ward 06",
    priority: "Medium",
    daysOverdue: 1,
    assignedTo: "Vikash Yadav",
  },
];

function OverdueComplaints() {
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
            className="mb-2 block rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
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
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold text-red-600">
              Officer Panel
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              Overdue Complaints
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Complaints that have crossed their expected resolution time.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl space-y-6 p-5 md:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-medium text-red-700">
                Total Overdue
              </p>

              <p className="mt-2 text-3xl font-bold text-red-800">
                {overdueComplaints.length}
              </p>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <p className="text-sm font-medium text-orange-700">
                High Priority
              </p>

              <p className="mt-2 text-3xl font-bold text-orange-800">
                {
                  overdueComplaints.filter(
                    (complaint) => complaint.priority === "High"
                  ).length
                }
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Maximum Delay
              </p>

              <p className="mt-2 text-3xl font-bold text-slate-900">
                {Math.max(
                  ...overdueComplaints.map(
                    (complaint) => complaint.daysOverdue
                  )
                )}{" "}
                Days
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Overdue Complaint List
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Review delayed complaints and take necessary action.
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {overdueComplaints.map((complaint) => (
                <div
                  key={complaint.id}
                  className="p-5 transition hover:bg-slate-50"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-100 font-bold text-red-700">
                        !
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-bold text-slate-900">
                            {complaint.title}
                          </h4>

                          <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700">
                            Overdue
                          </span>
                        </div>

                        <p className="mt-1 text-sm text-slate-500">
                          {complaint.id} • {complaint.location}
                        </p>

                        <p className="mt-2 text-sm text-slate-600">
                          Assigned to:{" "}
                          <span className="font-semibold text-slate-800">
                            {complaint.assignedTo}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <div className="rounded-xl bg-slate-100 px-4 py-3 text-center">
                        <p className="text-xs text-slate-500">Delayed By</p>

                        <p className="font-bold text-red-600">
                          {complaint.daysOverdue} Days
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-100 px-4 py-3 text-center">
                        <p className="text-xs text-slate-500">Priority</p>

                        <p className="font-bold text-slate-800">
                          {complaint.priority}
                        </p>
                      </div>

                      <Link
                        to={`/officer/complaints/${complaint.id}`}
                        className="rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
            <h3 className="font-bold text-red-900">
              Officer Attention Required
            </h3>

            <p className="mt-1 text-sm leading-6 text-red-800">
              Overdue complaints should be reviewed to check whether the
              assigned team needs a follow-up, reassignment, or priority
              escalation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default OverdueComplaints;