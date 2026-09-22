import { Link } from "react-router-dom";

const teams = [
  {
    id: "FT-104",
    name: "Green Response Team",
    members: 5,
    area: "Central Operations",
    activeJobs: 2,
    availability: "Available",
    icon: "🌿",
  },
  {
    id: "FT-108",
    name: "Rapid Civic Team",
    members: 4,
    area: "North Operations",
    activeJobs: 1,
    availability: "Available",
    icon: "⚡",
  },
  {
    id: "FT-112",
    name: "Clean City Squad",
    members: 6,
    area: "East Operations",
    activeJobs: 3,
    availability: "Busy",
    icon: "🧹",
  },
  {
    id: "FT-116",
    name: "Civic Care Team",
    members: 5,
    area: "South Operations",
    activeJobs: 0,
    availability: "Available",
    icon: "🛠️",
  },
];

const complaints = [
  {
    id: "EC1024",
    title: "Garbage accumulation near residential area",
    category: "Garbage",
    priority: "High",
    location: "Shivaji Nagar",
    age: "15 min ago",
  },
  {
    id: "EC1021",
    title: "Garbage collection missed",
    category: "Garbage",
    priority: "Medium",
    location: "Aundh",
    age: "2 hours ago",
  },
  {
    id: "EC1020",
    title: "Water supply interruption",
    category: "Water",
    priority: "High",
    location: "Wakad",
    age: "3 hours ago",
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
      className={`rounded-full px-2.5 py-1 text-[10px] font-black ${styles[priority]}`}
    >
      {priority}
    </span>
  );
}

function AssignTeam() {
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
                    Field Operations
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
                  Team Coordination
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Put the right team on
                <span className="block text-emerald-400">
                  the right civic issue.
                </span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Assign field teams to pending complaints and keep civic
                operations moving without unnecessary delays.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-slate-400">Active Teams</p>
                <p className="mt-1 text-2xl font-black text-white">8</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-slate-400">Available</p>
                <p className="mt-1 text-2xl font-black text-emerald-400">
                  5
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-slate-400">Busy</p>
                <p className="mt-1 text-2xl font-black text-amber-400">3</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-slate-400">Unassigned</p>
                <p className="mt-1 text-2xl font-black text-red-400">12</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                  Pending assignment
                </p>

                <h2 className="mt-1 text-xl font-black text-slate-900">
                  Choose a Complaint
                </h2>
              </div>

              <span className="rounded-full bg-orange-50 px-3 py-1.5 text-[11px] font-bold text-orange-600">
                12 awaiting team
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {complaints.map((complaint, index) => (
                <button
                  key={complaint.id}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    index === 0
                      ? "border-emerald-300 bg-emerald-50/50 shadow-sm"
                      : "border-slate-100 bg-white hover:border-emerald-200 hover:bg-emerald-50/30"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg">
                      {complaint.category === "Garbage" && "🗑️"}
                      {complaint.category === "Water" && "🚰"}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-black text-emerald-600">
                          {complaint.id}
                        </span>

                        <PriorityBadge priority={complaint.priority} />
                      </div>

                      <h3 className="mt-1 text-sm font-black text-slate-800">
                        {complaint.title}
                      </h3>

                      <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-400">
                        <span>📍 {complaint.location}</span>
                        <span>🕒 {complaint.age}</span>
                      </div>
                    </div>

                    <div
                      className={`mt-1 h-4 w-4 rounded-full border-2 ${
                        index === 0
                          ? "border-emerald-500 bg-emerald-500"
                          : "border-slate-300"
                      }`}
                    >
                      {index === 0 && (
                        <div className="mx-auto mt-0.5 h-1 w-1 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-slate-600">
                  Selected complaint
                </p>

                <span className="text-xs font-black text-emerald-600">
                  EC1024
                </span>
              </div>

              <p className="mt-2 text-sm font-bold text-slate-800">
                Garbage accumulation near residential area
              </p>

              <p className="mt-1 text-xs text-slate-400">
                High priority • Shivaji Nagar
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                Team selection
              </p>

              <h2 className="mt-1 text-xl font-black text-slate-900">
                Select Field Team
              </h2>
            </div>

            <div className="mt-5 space-y-3">
              {teams.map((team, index) => (
                <button
                  key={team.id}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    index === 0
                      ? "border-emerald-300 bg-emerald-50/50"
                      : "border-slate-100 hover:border-emerald-200 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl">
                      {team.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-black text-slate-800">
                            {team.name}
                          </h3>

                          <p className="mt-0.5 text-[10px] font-medium text-slate-400">
                            {team.id} • {team.members} members
                          </p>
                        </div>

                        <span
                          className={`rounded-full px-2 py-1 text-[9px] font-black ${
                            team.availability === "Available"
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-amber-50 text-amber-600"
                          }`}
                        >
                          {team.availability}
                        </span>
                      </div>

                      <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
                        <span>📍 {team.area}</span>
                        <span>{team.activeJobs} active jobs</span>
                      </div>
                    </div>

                    <div
                      className={`mt-1 h-4 w-4 rounded-full border-2 ${
                        index === 0
                          ? "border-emerald-500 bg-emerald-500"
                          : "border-slate-300"
                      }`}
                    >
                      {index === 0 && (
                        <div className="mx-auto mt-0.5 h-1 w-1 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button className="mt-5 w-full rounded-xl bg-emerald-600 px-4 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-600/15 transition hover:bg-emerald-700">
              Assign Green Response Team →
            </button>
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                ⚡
              </div>

              <div>
                <p className="text-xs text-slate-400">Fastest Response</p>
                <h3 className="text-sm font-black text-slate-900">
                  28 minutes
                </h3>
              </div>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Average time taken by available teams to accept a new
              assignment.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                👥
              </div>

              <div>
                <p className="text-xs text-slate-400">Team Capacity</p>
                <h3 className="text-sm font-black text-slate-900">
                  63% utilized
                </h3>
              </div>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-500"
                style={{ width: "63%" }}
              />
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-5 text-white shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xl">
                💡
              </div>

              <div>
                <p className="text-xs text-slate-400">Smart Assignment</p>
                <h3 className="text-sm font-black text-white">
                  Match by workload
                </h3>
              </div>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-400">
              Prioritize teams with availability, relevant category experience
              and lower active workload.
            </p>
          </div>
        </section>

        <section className="mt-5 rounded-3xl border border-emerald-100 bg-emerald-50 p-6 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700">
                Need another view?
              </p>

              <h2 className="mt-1 text-xl font-black text-emerald-950">
                Monitor your field operations.
              </h2>

              <p className="mt-1 text-sm text-emerald-800/70">
                Review team activity, complaint locations and performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                to="/officer/map"
                className="rounded-xl bg-white px-4 py-2.5 text-xs font-black text-emerald-700 shadow-sm transition hover:bg-emerald-100"
              >
                Open Map
              </Link>

              <Link
                to="/officer/analytics"
                className="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-emerald-700"
              >
                View Analytics
              </Link>
            </div>
          </div>
        </section>

        <div className="pb-4 pt-6 text-center">
          <p className="text-xs text-slate-400">
            EcoCitizen • Smarter coordination for better civic response
          </p>
        </div>
      </div>
    </div>
  );
}

export default AssignTeam;