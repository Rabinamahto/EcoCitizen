import { Link } from "react-router-dom";

const complaints = [
  {
    id: "EC1024",
    title: "Garbage accumulation near residential area",
    category: "Garbage",
    citizen: "Rahul Kumar",
    location: "Shivaji Nagar",
    priority: "High",
    status: "Pending",
    time: "15 min ago",
  },
  {
    id: "EC1023",
    title: "Blocked drainage causing water overflow",
    category: "Drainage",
    citizen: "Amit Singh",
    location: "Kothrud",
    priority: "Medium",
    status: "In Progress",
    time: "42 min ago",
  },
  {
    id: "EC1022",
    title: "Street light not working",
    category: "Street Light",
    citizen: "Vikash Yadav",
    location: "Baner",
    priority: "Low",
    status: "Resolved",
    time: "1 hour ago",
  },
  {
    id: "EC1021",
    title: "Garbage collection missed",
    category: "Garbage",
    citizen: "Neha Kumari",
    location: "Aundh",
    priority: "Medium",
    status: "Pending",
    time: "2 hours ago",
  },
  {
    id: "EC1020",
    title: "Water supply interruption",
    category: "Water",
    citizen: "Priya Sharma",
    location: "Wakad",
    priority: "High",
    status: "In Progress",
    time: "3 hours ago",
  },
  {
    id: "EC1019",
    title: "Overflowing public dustbin",
    category: "Garbage",
    citizen: "Rohit Verma",
    location: "Viman Nagar",
    priority: "Medium",
    status: "Pending",
    time: "4 hours ago",
  },
];

const filters = ["All", "Pending", "In Progress", "Resolved"];

function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-orange-50 text-orange-600",
    "In Progress": "bg-blue-50 text-blue-600",
    Resolved: "bg-emerald-50 text-emerald-600",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-[11px] font-bold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function PriorityBadge({ priority }) {
  const styles = {
    High: "bg-red-50 text-red-600",
    Medium: "bg-amber-50 text-amber-600",
    Low: "bg-slate-100 text-slate-500",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${styles[priority]}`}
    >
      {priority}
    </span>
  );
}

function CategoryIcon({ category }) {
  const icons = {
    Garbage: "🗑️",
    Drainage: "💧",
    "Street Light": "💡",
    Water: "🚰",
  };

  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg">
      {icons[category]}
    </div>
  );
}

function Complaints() {
  return (
    <div className="min-h-screen bg-[#f6f8f7] px-4 py-4 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[28px] bg-slate-950 p-6 shadow-xl sm:p-8">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-center justify-between">
              <Link
                to="/officer/dashboard"
                className="flex items-center gap-3"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 text-xl shadow-lg shadow-emerald-500/20">
                  🌿
                </div>

                <div>
                  <p className="text-base font-black text-white">
                    EcoCitizen
                  </p>
                  <p className="text-xs text-slate-400">
                    Officer Portal
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-2">
                <Link
                  to="/officer/notifications"
                  className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg transition hover:bg-white/10"
                >
                  🔔
                  <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-400" />
                </Link>

                <Link
                  to="/officer/profile"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-xs font-black text-white"
                >
                  SK
                </Link>
              </div>
            </div>

            <div className="mt-9 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold text-emerald-300">
                  Civic Operations
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Every complaint deserves
                <span className="block text-emerald-400">
                  a meaningful response.
                </span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Review citizen reports, track their progress and take action
                on issues that need your attention.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-slate-400">Total</p>
                <p className="mt-1 text-2xl font-black text-white">248</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-slate-400">Pending</p>
                <p className="mt-1 text-2xl font-black text-orange-400">42</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-slate-400">In Progress</p>
                <p className="mt-1 text-2xl font-black text-blue-400">31</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-slate-400">Resolved</p>
                <p className="mt-1 text-2xl font-black text-emerald-400">
                  175
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm">
                🔍
              </span>

              <input
                type="text"
                placeholder="Search complaint, citizen or location..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-emerald-400 focus:bg-white"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  className={`rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                    index === 0
                      ? "bg-slate-900 text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-5">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                Complaint Center
              </p>

              <h2 className="mt-1 text-2xl font-black text-slate-900">
                Recent Reports
              </h2>
            </div>

            <p className="text-xs font-medium text-slate-400">
              Showing 6 of 248 complaints
            </p>
          </div>

          <div className="space-y-3">
            {complaints.map((complaint) => (
              <Link
                key={complaint.id}
                to={`/officer/complaints/${complaint.id}`}
                className="group block rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-lg sm:p-5"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                  <div className="flex min-w-0 flex-1 items-start gap-4">
                    <CategoryIcon category={complaint.category} />

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-black text-emerald-600">
                          {complaint.id}
                        </span>

                        <PriorityBadge priority={complaint.priority} />
                      </div>

                      <h3 className="mt-1.5 text-sm font-black text-slate-800 sm:text-base">
                        {complaint.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                        <span>👤 {complaint.citizen}</span>
                        <span>📍 {complaint.location}</span>
                        <span>🕒 {complaint.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-3 lg:w-44 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                    <div>
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Status
                      </p>

                      <StatusBadge status={complaint.status} />
                    </div>

                    <span className="text-lg text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-500">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-5 grid gap-4 sm:grid-cols-3">
          <Link
            to="/officer/assign-team"
            className="rounded-2xl bg-emerald-600 p-5 text-white shadow-lg shadow-emerald-600/10 transition hover:-translate-y-1 hover:bg-emerald-700"
          >
            <span className="text-2xl">👥</span>
            <h3 className="mt-4 text-base font-black">Assign Team</h3>
            <p className="mt-1 text-xs leading-5 text-emerald-100">
              Assign pending complaints to field teams.
            </p>
          </Link>

          <Link
            to="/officer/map"
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="text-2xl">🗺️</span>
            <h3 className="mt-4 text-base font-black text-slate-900">
              View Complaint Map
            </h3>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              See reported issues across your operational area.
            </p>
          </Link>

          <Link
            to="/officer/overdue"
            className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="text-2xl">⚠️</span>
            <h3 className="mt-4 text-base font-black text-slate-900">
              Check Overdue
            </h3>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              12 complaints currently need urgent attention.
            </p>
          </Link>
        </section>

        <div className="mt-6 pb-4 text-center">
          <p className="text-xs text-slate-400">
            EcoCitizen • Turning citizen reports into meaningful action
          </p>
        </div>
      </div>
    </div>
  );
}

export default Complaints;