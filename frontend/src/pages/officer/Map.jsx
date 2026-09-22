import { Link } from "react-router-dom";

const complaints = [
  {
    id: "EC1024",
    title: "Garbage collection missed",
    category: "Garbage",
    status: "Pending",
    priority: "High",
    position: "top-[24%] left-[34%]",
    icon: "🗑️",
  },
  {
    id: "EC1023",
    title: "Blocked drainage",
    category: "Drainage",
    status: "In Progress",
    priority: "High",
    position: "top-[42%] left-[61%]",
    icon: "💧",
  },
  {
    id: "EC1022",
    title: "Street light not working",
    category: "Street Light",
    status: "Pending",
    priority: "Medium",
    position: "top-[64%] left-[27%]",
    icon: "💡",
  },
  {
    id: "EC1021",
    title: "Water supply issue",
    category: "Water",
    status: "In Progress",
    priority: "Medium",
    position: "top-[32%] left-[76%]",
    icon: "🚰",
  },
  {
    id: "EC1020",
    title: "Waste near public area",
    category: "Garbage",
    status: "Resolved",
    priority: "Low",
    position: "top-[72%] left-[68%]",
    icon: "♻️",
  },
];

const nearbyReports = [
  {
    id: "EC1024",
    title: "Garbage collection missed",
    distance: "0.8 km",
    status: "Pending",
    icon: "🗑️",
  },
  {
    id: "EC1023",
    title: "Blocked drainage",
    distance: "1.2 km",
    status: "In Progress",
    icon: "💧",
  },
  {
    id: "EC1022",
    title: "Street light not working",
    distance: "1.6 km",
    status: "Pending",
    icon: "💡",
  },
];

const hotspots = [
  {
    name: "Garbage",
    reports: 86,
    percentage: 35,
    icon: "🗑️",
  },
  {
    name: "Drainage",
    reports: 52,
    percentage: 21,
    icon: "💧",
  },
  {
    name: "Water",
    reports: 41,
    percentage: 17,
    icon: "🚰",
  },
];

function Map() {
  return (
    <div className="min-h-screen bg-[#f6f8f7] px-4 py-4 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[28px] bg-slate-950 p-6 shadow-xl sm:p-8 lg:p-10">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />

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
                    Complaint Map
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
                  Live Complaint Overview
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                See civic issues
                <span className="block text-emerald-400">
                  where they happen.
                </span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Explore reported issues geographically and identify areas
                where field teams need attention.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">
              Total Reports
            </p>

            <p className="mt-2 text-3xl font-black text-slate-900">
              248
            </p>

            <p className="mt-2 text-[11px] font-bold text-emerald-600">
              Across active areas
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">
              Pending
            </p>

            <p className="mt-2 text-3xl font-black text-amber-500">
              42
            </p>

            <p className="mt-2 text-[11px] font-bold text-amber-600">
              Need attention
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">
              In Progress
            </p>

            <p className="mt-2 text-3xl font-black text-blue-600">
              31
            </p>

            <p className="mt-2 text-[11px] font-bold text-blue-600">
              Teams working
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">
              Resolved
            </p>

            <p className="mt-2 text-3xl font-black text-emerald-600">
              175
            </p>

            <p className="mt-2 text-[11px] font-bold text-emerald-600">
              Successfully closed
            </p>
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[1.7fr_1fr]">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                  Geographic view
                </p>

                <h2 className="mt-1 text-xl font-black text-slate-900">
                  Complaint hotspots
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                <button className="rounded-xl bg-slate-900 px-3 py-2 text-[10px] font-black text-white">
                  All
                </button>

                <button className="rounded-xl border border-slate-200 px-3 py-2 text-[10px] font-bold text-slate-500">
                  Pending
                </button>

                <button className="rounded-xl border border-slate-200 px-3 py-2 text-[10px] font-bold text-slate-500">
                  Active
                </button>
              </div>
            </div>

            <div className="relative h-[440px] overflow-hidden bg-[#dfe9e4]">
              <div className="absolute inset-0 opacity-60">
                <div className="absolute left-[8%] top-[10%] h-32 w-32 rotate-12 rounded-[35%] bg-white/70" />

                <div className="absolute left-[44%] top-[5%] h-44 w-32 -rotate-12 rounded-[40%] bg-white/50" />

                <div className="absolute right-[5%] top-[25%] h-36 w-40 rotate-12 rounded-[35%] bg-white/70" />

                <div className="absolute left-[15%] bottom-[8%] h-40 w-52 -rotate-6 rounded-[40%] bg-white/50" />

                <div className="absolute right-[15%] bottom-[5%] h-48 w-40 rotate-12 rounded-[40%] bg-white/60" />
              </div>

              <div className="absolute left-[5%] right-[5%] top-[30%] h-1 rotate-6 bg-white/90" />

              <div className="absolute left-[10%] right-[10%] top-[58%] h-1 -rotate-12 bg-white/90" />

              <div className="absolute bottom-[20%] left-[45%] top-[5%] w-1 rotate-[18deg] bg-white/90" />

              <div className="absolute bottom-[5%] right-[30%] top-[12%] w-1 -rotate-[35deg] bg-white/90" />

              <div className="absolute left-[30%] top-[18%] h-2 w-32 rotate-12 rounded-full bg-emerald-200/70" />

              <div className="absolute bottom-[22%] right-[18%] h-2 w-40 -rotate-6 rounded-full bg-emerald-200/70" />

              <div className="absolute left-[10%] top-[8%] rounded-lg bg-white/80 px-2 py-1 text-[9px] font-black text-slate-500 shadow-sm">
                NORTH
              </div>

              {complaints.map((complaint) => (
                <div
                  key={complaint.id}
                  className={`absolute ${complaint.position} group`}
                >
                  <div className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-4 border-white bg-slate-900 text-lg shadow-xl transition duration-200 group-hover:scale-110">
                    {complaint.icon}

                    <span
                      className={`absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white ${
                        complaint.status === "Resolved"
                          ? "bg-emerald-500"
                          : complaint.status === "In Progress"
                            ? "bg-blue-500"
                            : "bg-amber-400"
                      }`}
                    />
                  </div>

                  <div className="pointer-events-none absolute bottom-14 left-1/2 hidden w-48 -translate-x-1/2 rounded-xl bg-slate-950 p-3 text-white shadow-2xl group-hover:block">
                    <p className="text-[10px] font-black text-emerald-400">
                      {complaint.id}
                    </p>

                    <p className="mt-1 text-xs font-bold">
                      {complaint.title}
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      {complaint.category} • {complaint.status}
                    </p>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-4 left-4 rounded-2xl border border-white/70 bg-white/90 p-3 shadow-lg backdrop-blur">
                <p className="text-[9px] font-black uppercase tracking-wider text-slate-500">
                  Map Legend
                </p>

                <div className="mt-2 flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-600">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    Pending
                  </div>

                  <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-600">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                    Active
                  </div>

                  <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-600">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    Resolved
                  </div>
                </div>
              </div>

              <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-lg">
                +
              </button>

              <button className="absolute right-4 top-[68px] flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-lg">
                −
              </button>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                Nearby reports
              </p>

              <h2 className="mt-1 text-xl font-black text-slate-900">
                Recent activity
              </h2>

              <div className="mt-5 space-y-3">
                {nearbyReports.map((report) => (
                  <Link
                    key={report.id}
                    to={`/officer/complaints/${report.id}`}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3 transition hover:border-emerald-200 hover:bg-emerald-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg">
                      {report.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-black text-slate-800">
                        {report.title}
                      </p>

                      <p className="mt-1 text-[10px] text-slate-400">
                        {report.id} • {report.distance}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-2 py-1 text-[9px] font-black ${
                        report.status === "Pending"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {report.status}
                    </span>
                  </Link>
                ))}
              </div>

              <Link
                to="/officer/complaints"
                className="mt-5 flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-xs font-black text-slate-700 transition hover:bg-slate-50"
              >
                View All Complaints →
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                Hotspot analysis
              </p>

              <h2 className="mt-1 text-xl font-black text-slate-900">
                Most reported issues
              </h2>

              <div className="mt-5 space-y-5">
                {hotspots.map((hotspot) => (
                  <div key={hotspot.name}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{hotspot.icon}</span>

                        <span className="text-xs font-bold text-slate-700">
                          {hotspot.name}
                        </span>
                      </div>

                      <span className="text-xs font-black text-slate-900">
                        {hotspot.reports}
                      </span>
                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-emerald-500"
                        style={{ width: `${hotspot.percentage}%` }}
                      />
                    </div>

                    <p className="mt-1 text-right text-[9px] text-slate-400">
                      {hotspot.percentage}% of reports
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-3xl bg-slate-900 p-6 text-white shadow-xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-400">
                Smart operations
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Location data helps teams respond faster.
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Use complaint clusters and issue categories to understand
                where resources are needed most.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/officer/assign-team"
                className="rounded-xl bg-emerald-500 px-5 py-3 text-xs font-black text-white transition hover:bg-emerald-400"
              >
                Assign Field Team
              </Link>

              <Link
                to="/officer/analytics"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-xs font-black text-slate-200 transition hover:bg-white/10"
              >
                View Analytics
              </Link>
            </div>
          </div>
        </section>

        <div className="pb-4 pt-6 text-center">
          <p className="text-xs text-slate-400">
            EcoCitizen • Location-based civic operations
          </p>
        </div>
      </div>
    </div>
  );
}

export default Map;