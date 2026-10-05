import { Link } from "react-router-dom";

const stats = [
  {
    label: "Total Complaints",
    value: "248",
    detail: "+18 this week",
    icon: "📋",
  },
  {
    label: "Pending",
    value: "42",
    detail: "Needs attention",
    icon: "⏳",
  },
  {
    label: "In Progress",
    value: "31",
    detail: "Being handled",
    icon: "🔄",
  },
  {
    label: "Resolved",
    value: "175",
    detail: "71% resolution rate",
    icon: "✓",
  },
];

const recentComplaints = [
  {
    id: "EC1024",
    title: "Garbage accumulation near residential area",
    category: "Garbage",
    priority: "High",
    status: "Pending",
    time: "15 min ago",
  },
  {
    id: "EC1023",
    title: "Blocked drainage causing water overflow",
    category: "Drainage",
    priority: "Medium",
    status: "In Progress",
    time: "42 min ago",
  },
  {
    id: "EC1022",
    title: "Street light not working",
    category: "Street Light",
    priority: "Low",
    status: "Resolved",
    time: "1 hour ago",
  },
  {
    id: "EC1021",
    title: "Garbage collection missed",
    category: "Garbage",
    priority: "Medium",
    status: "Pending",
    time: "2 hours ago",
  },
];

const categoryData = [
  {
    name: "Garbage",
    count: 86,
    percentage: 35,
    icon: "🗑️",
  },
  {
    name: "Drainage",
    count: 52,
    percentage: 21,
    icon: "💧",
  },
  {
    name: "Water",
    count: 41,
    percentage: 17,
    icon: "🚰",
  },
  {
    name: "Street Light",
    count: 38,
    percentage: 15,
    icon: "💡",
  },
];

function PriorityBadge({ priority }) {
  const styles = {
    High: "bg-red-50 text-red-600",
    Medium: "bg-amber-50 text-amber-600",
    Low: "bg-blue-50 text-blue-600",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${styles[priority]}`}
    >
      {priority}
    </span>
  );
}

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

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f6f8f7] px-4 py-4 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[28px] bg-slate-950 p-6 shadow-xl sm:p-8 lg:p-10">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 text-xl shadow-lg shadow-emerald-500/20">
                  🌿
                </div>

                <div>
                  <p className="text-base font-black text-white">
                    EcoCitizen
                  </p>
                  <p className="text-xs text-slate-400">
                    Officer Dashboard
                  </p>
                </div>
              </div>

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

            <div className="mt-10 max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold text-emerald-300">
                  Good evening
                </span>
              </div>

              <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Turn civic challenges into
                <span className="block text-emerald-400">
                  visible change.
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Monitor complaints, coordinate field teams and keep every
                civic response moving forward.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/officer/complaints"
                  className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
                >
                  Review Complaints
                </Link>

                <Link
                  to="/officer/map"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/10"
                >
                  Explore Map
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-5"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold text-slate-500 sm:text-sm">
                    {stat.label}
                  </p>

                  <p className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                    {stat.value}
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-base sm:h-11 sm:w-11 sm:text-lg">
                  {stat.icon}
                </div>
              </div>

              <p className="mt-3 text-[11px] font-semibold text-emerald-600 sm:text-xs">
                {stat.detail}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[1.65fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                  Live activity
                </p>

                <h2 className="mt-1 text-xl font-black text-slate-900">
                  Recent Complaints
                </h2>
              </div>

              <Link
                to="/officer/complaints"
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 sm:text-sm"
              >
                View all →
              </Link>
            </div>

            <div className="mt-5 space-y-3">
              {recentComplaints.map((complaint) => (
                <Link
                  key={complaint.id}
                  to={`/officer/complaints/${complaint.id}`}
                  className="block rounded-2xl border border-slate-100 p-4 transition hover:border-emerald-200 hover:bg-emerald-50/40"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg">
                      {complaint.category === "Garbage" && "🗑️"}
                      {complaint.category === "Drainage" && "💧"}
                      {complaint.category === "Street Light" && "💡"}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-black text-emerald-600">
                          {complaint.id}
                        </span>

                        <PriorityBadge priority={complaint.priority} />
                      </div>

                      <h3 className="mt-1.5 truncate text-sm font-bold text-slate-800">
                        {complaint.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-400">
                        {complaint.category} • {complaint.time}
                      </p>
                    </div>

                    <StatusBadge status={complaint.status} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
              Issue breakdown
            </p>

            <h2 className="mt-1 text-xl font-black text-slate-900">
              Complaint Categories
            </h2>

            <div className="mt-6 space-y-5">
              {categoryData.map((category) => (
                <div key={category.name}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{category.icon}</span>

                      <span className="text-sm font-bold text-slate-700">
                        {category.name}
                      </span>
                    </div>

                    <span className="text-sm font-black text-slate-900">
                      {category.count}
                    </span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>

                  <p className="mt-1 text-right text-[10px] font-medium text-slate-400">
                    {category.percentage}% of total
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/officer/analytics"
              className="mt-6 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
            >
              <span>View detailed analytics</span>
              <span>→</span>
            </Link>
          </div>
        </section>

        <section className="mt-5 grid gap-5 md:grid-cols-3">
          <Link
            to="/officer/assign-team"
            className="group rounded-3xl bg-emerald-600 p-6 text-white shadow-lg shadow-emerald-600/15 transition hover:-translate-y-1 hover:bg-emerald-700"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl">👥</span>

              <span className="text-xl transition group-hover:translate-x-1">
                →
              </span>
            </div>

            <h3 className="mt-7 text-lg font-black">
              Assign Field Team
            </h3>

            <p className="mt-2 text-sm leading-5 text-emerald-100">
              Connect pending complaints with available field teams.
            </p>
          </Link>

          <Link
            to="/officer/overdue"
            className="group rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl">⚠️</span>

              <span className="text-xl text-red-500 transition group-hover:translate-x-1">
                →
              </span>
            </div>

            <h3 className="mt-7 text-lg font-black text-slate-900">
              Overdue Complaints
            </h3>

            <p className="mt-2 text-sm leading-5 text-slate-500">
              12 complaints need attention before crossing their SLA.
            </p>
          </Link>

          <Link
            to="/officer/notifications"
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl">🔔</span>

              <span className="text-xl text-emerald-600 transition group-hover:translate-x-1">
                →
              </span>
            </div>

            <h3 className="mt-7 text-lg font-black text-slate-900">
              Notifications
            </h3>

            <p className="mt-2 text-sm leading-5 text-slate-500">
              Stay updated with urgent complaints and team activity.
            </p>
          </Link>
        </section>

        <section className="mt-5 overflow-hidden rounded-3xl bg-emerald-50 p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                Today's progress
              </p>

              <h2 className="mt-2 text-2xl font-black text-emerald-950">
                Keep the civic response moving.
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-emerald-800/70">
                175 complaints have already been resolved. Continue monitoring
                pending issues and keep field teams coordinated.
              </p>
            </div>

            <div className="min-w-[220px] rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    Resolution rate
                  </p>

                  <p className="mt-1 text-3xl font-black text-slate-900">
                    71%
                  </p>
                </div>

                <span className="text-2xl text-emerald-500">✓</span>
              </div>

              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-emerald-500"
                  style={{ width: "71%" }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;