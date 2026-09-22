import { Link } from "react-router-dom";

const overdueComplaints = [
  {
    id: "EC1018",
    category: "Garbage",
    title: "Garbage collection missed",
    citizen: "Rahul Kumar",
    age: "3 days overdue",
    priority: "High",
    status: "Pending",
    progress: 25,
    icon: "🗑️",
  },
  {
    id: "EC1015",
    category: "Drainage",
    title: "Blocked drainage near public road",
    citizen: "Amit Singh",
    age: "2 days overdue",
    priority: "High",
    status: "In Progress",
    progress: 55,
    icon: "💧",
  },
  {
    id: "EC1012",
    category: "Street Light",
    title: "Street light not working",
    citizen: "Vikash Yadav",
    age: "2 days overdue",
    priority: "Medium",
    status: "In Progress",
    progress: 65,
    icon: "💡",
  },
  {
    id: "EC1009",
    category: "Water",
    title: "Water supply interruption",
    citizen: "Neha Kumari",
    age: "1 day overdue",
    priority: "Medium",
    status: "Pending",
    progress: 15,
    icon: "🚰",
  },
];

const delayCategories = [
  {
    name: "Garbage",
    count: 5,
    average: "2.8 days",
    percentage: 82,
    icon: "🗑️",
  },
  {
    name: "Drainage",
    count: 3,
    average: "2.3 days",
    percentage: 61,
    icon: "💧",
  },
  {
    name: "Water",
    count: 2,
    average: "1.9 days",
    percentage: 44,
    icon: "🚰",
  },
  {
    name: "Street Light",
    count: 2,
    average: "1.5 days",
    percentage: 34,
    icon: "💡",
  },
];

function OverdueComplaints() {
  return (
    <div className="min-h-screen bg-[#f6f8f7] px-4 py-4 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[28px] bg-slate-950 p-6 shadow-xl sm:p-8 lg:p-10">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />

          <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

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
                    Overdue Complaints
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
              <div className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400" />

                <span className="text-xs font-bold text-red-300">
                  12 Complaints Need Attention
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Don't let civic issues
                <span className="block text-emerald-400">
                  wait any longer.
                </span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Identify delayed complaints, understand response gaps and
                move the right field teams into action.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <div className="rounded-2xl border border-red-100 bg-red-50 p-5 shadow-sm">
            <p className="text-xs font-semibold text-red-600">
              Total Overdue
            </p>

            <p className="mt-2 text-3xl font-black text-red-600">
              12
            </p>

            <p className="mt-2 text-[11px] font-bold text-red-500">
              Need immediate review
            </p>
          </div>

          <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5 shadow-sm">
            <p className="text-xs font-semibold text-amber-600">
              High Priority
            </p>

            <p className="mt-2 text-3xl font-black text-amber-600">
              5
            </p>

            <p className="mt-2 text-[11px] font-bold text-amber-500">
              Critical attention
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
            <p className="text-xs font-semibold text-blue-600">
              In Progress
            </p>

            <p className="mt-2 text-3xl font-black text-blue-600">
              7
            </p>

            <p className="mt-2 text-[11px] font-bold text-blue-500">
              Teams already assigned
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">
              Avg. Delay
            </p>

            <p className="mt-2 text-3xl font-black text-slate-900">
              2.1d
            </p>

            <p className="mt-2 text-[11px] font-bold text-slate-400">
              Across overdue cases
            </p>
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-red-500">
                  Action required
                </p>

                <h2 className="mt-1 text-xl font-black text-slate-900">
                  Overdue complaints
                </h2>
              </div>

              <div className="flex gap-2">
                <button className="rounded-xl bg-slate-900 px-3 py-2 text-[10px] font-black text-white">
                  All
                </button>

                <button className="rounded-xl border border-slate-200 px-3 py-2 text-[10px] font-bold text-slate-500">
                  High Priority
                </button>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {overdueComplaints.map((complaint) => (
                <div
                  key={complaint.id}
                  className="rounded-2xl border border-slate-100 bg-white p-4 transition hover:border-red-100 hover:shadow-md sm:p-5"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-xl">
                      {complaint.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600">
                              {complaint.id}
                            </span>

                            <span className="rounded-full bg-red-50 px-2 py-1 text-[9px] font-black text-red-600">
                              {complaint.age}
                            </span>
                          </div>

                          <h3 className="mt-1 text-sm font-black text-slate-800">
                            {complaint.title}
                          </h3>

                          <p className="mt-1 text-[10px] text-slate-400">
                            {complaint.category} • Reported by{" "}
                            {complaint.citizen}
                          </p>
                        </div>

                        <span
                          className={`w-fit rounded-full px-2.5 py-1 text-[9px] font-black ${
                            complaint.priority === "High"
                              ? "bg-red-100 text-red-600"
                              : "bg-amber-100 text-amber-600"
                          }`}
                        >
                          {complaint.priority} Priority
                        </span>
                      </div>

                      <div className="mt-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-slate-400">
                            Resolution progress
                          </span>

                          <span className="text-[10px] font-black text-slate-600">
                            {complaint.progress}%
                          </span>
                        </div>

                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={`h-full rounded-full ${
                              complaint.status === "Pending"
                                ? "bg-red-400"
                                : "bg-blue-500"
                            }`}
                            style={{
                              width: `${complaint.progress}%`,
                            }}
                          />
                        </div>
                      </div>

                      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <span
                          className={`w-fit rounded-full px-2.5 py-1 text-[9px] font-black ${
                            complaint.status === "Pending"
                              ? "bg-amber-50 text-amber-600"
                              : "bg-blue-50 text-blue-600"
                          }`}
                        >
                          {complaint.status}
                        </span>

                        <div className="flex gap-2">
                          <Link
                            to={`/officer/complaints/${complaint.id}`}
                            className="rounded-xl border border-slate-200 px-3 py-2 text-[10px] font-black text-slate-600 transition hover:bg-slate-50"
                          >
                            View
                          </Link>

                          <Link
                            to="/officer/assign-team"
                            className="rounded-xl bg-slate-900 px-3 py-2 text-[10px] font-black text-white transition hover:bg-slate-800"
                          >
                            Assign Team
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-red-500">
                Delay analysis
              </p>

              <h2 className="mt-1 text-xl font-black text-slate-900">
                Where delays happen
              </h2>

              <div className="mt-6 space-y-5">
                {delayCategories.map((category) => (
                  <div key={category.name}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{category.icon}</span>

                        <div>
                          <p className="text-xs font-black text-slate-800">
                            {category.name}
                          </p>

                          <p className="text-[9px] text-slate-400">
                            {category.count} overdue • Avg.{" "}
                            {category.average}
                          </p>
                        </div>
                      </div>

                      <span className="text-xs font-black text-slate-700">
                        {category.percentage}%
                      </span>
                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-red-400"
                        style={{
                          width: `${category.percentage}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-5 text-white shadow-xl sm:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-red-400">
                    Attention score
                  </p>

                  <h2 className="mt-2 text-3xl font-black">
                    68%
                  </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-xl">
                  ⏰
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-400">
                Current overdue workload requires active field coordination.
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[68%] rounded-full bg-red-400" />
              </div>

              <p className="mt-2 text-[10px] text-slate-500">
                Based on priority, delay and unresolved cases
              </p>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-3xl border border-amber-100 bg-amber-50 p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-amber-700">
                Recommended action
              </p>

              <h2 className="mt-1 text-xl font-black text-amber-950">
                Prioritize high-impact overdue complaints.
              </h2>

              <p className="mt-2 text-sm leading-6 text-amber-800/70">
                Assign available field teams to high-priority complaints
                first and monitor their progress until resolution.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/officer/assign-team"
                className="rounded-xl bg-amber-600 px-5 py-3 text-center text-xs font-black text-white transition hover:bg-amber-700"
              >
                Assign Field Team →
              </Link>

              <Link
                to="/officer/analytics"
                className="rounded-xl border border-amber-200 bg-white px-5 py-3 text-center text-xs font-black text-amber-800 transition hover:bg-amber-100"
              >
                View Analytics
              </Link>
            </div>
          </div>
        </section>

        <div className="pb-4 pt-6 text-center">
          <p className="text-xs text-slate-400">
            EcoCitizen • Faster response, better civic outcomes
          </p>
        </div>
      </div>
    </div>
  );
}

export default OverdueComplaints;