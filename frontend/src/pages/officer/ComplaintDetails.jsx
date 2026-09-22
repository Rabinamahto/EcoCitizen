import { Link, useParams } from "react-router-dom";

const complaint = {
  id: "EC1024",
  title: "Garbage accumulation near residential area",
  category: "Garbage",
  priority: "High",
  status: "Pending",
  citizen: "Rahul Kumar",
  phone: "+91 98765 43210",
  location: "Shivaji Nagar",
  submitted: "Today, 6:20 PM",
  updated: "15 minutes ago",
  description:
    "Large amount of garbage has accumulated near the residential area. The waste has not been collected for several days and is creating an unhygienic environment for nearby residents.",
};

const timeline = [
  {
    title: "Complaint submitted",
    description: "Citizen reported the issue with location details.",
    time: "Today, 6:20 PM",
    active: true,
  },
  {
    title: "Complaint reviewed",
    description: "Officer reviewed the submitted information.",
    time: "Today, 6:28 PM",
    active: true,
  },
  {
    title: "Awaiting field team",
    description: "A field team needs to be assigned to this complaint.",
    time: "Pending",
    active: false,
  },
  {
    title: "Issue resolved",
    description: "Resolution will be recorded after field verification.",
    time: "Pending",
    active: false,
  },
];

function DetailItem({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1.5 text-sm font-bold text-slate-800">{value}</p>
    </div>
  );
}

function ComplaintDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#f6f8f7] px-4 py-4 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[28px] bg-slate-950 p-6 shadow-xl sm:p-8">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />

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
                    Complaint Management
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

            <div className="mt-8">
              <Link
                to="/officer/complaints"
                className="text-xs font-bold text-slate-400 transition hover:text-emerald-400"
              >
                ← Back to complaints
              </Link>

              <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-black text-emerald-300">
                      {id || complaint.id}
                    </span>

                    <span className="rounded-full bg-red-400/10 px-3 py-1 text-[11px] font-black text-red-300">
                      High Priority
                    </span>
                  </div>

                  <h1 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                    {complaint.title}
                  </h1>

                  <p className="mt-2 text-sm text-slate-400">
                    Reported by {complaint.citizen} • {complaint.updated}
                  </p>
                </div>

                <div className="rounded-2xl border border-orange-400/20 bg-orange-400/10 px-5 py-3">
                  <p className="text-[10px] font-black uppercase tracking-wider text-orange-300">
                    Current Status
                  </p>

                  <p className="mt-1 text-sm font-black text-orange-200">
                    Pending Action
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                  Complaint information
                </p>

                <h2 className="mt-1 text-xl font-black text-slate-900">
                  Report Overview
                </h2>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <DetailItem
                  label="Complaint ID"
                  value={complaint.id}
                />

                <DetailItem
                  label="Category"
                  value={complaint.category}
                />

                <DetailItem
                  label="Priority"
                  value={complaint.priority}
                />

                <DetailItem
                  label="Status"
                  value={complaint.status}
                />

                <DetailItem
                  label="Submitted"
                  value={complaint.submitted}
                />

                <DetailItem
                  label="Last Updated"
                  value={complaint.updated}
                />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                Citizen report
              </p>

              <h2 className="mt-1 text-xl font-black text-slate-900">
                Issue Description
              </h2>

              <div className="mt-5 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm leading-7 text-slate-600">
                  {complaint.description}
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                    Location
                  </p>

                  <h2 className="mt-1 text-xl font-black text-slate-900">
                    Reported Area
                  </h2>
                </div>

                <span className="text-2xl">📍</span>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                <div className="relative h-52 bg-gradient-to-br from-emerald-50 via-slate-100 to-teal-50">
                  <div className="absolute inset-0 opacity-40">
                    <div className="h-full w-full bg-[linear-gradient(90deg,transparent_49%,#cbd5e1_50%,transparent_51%),linear-gradient(0deg,transparent_49%,#cbd5e1_50%,transparent_51%)] bg-[size:60px_60px]" />
                  </div>

                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-xl shadow-xl shadow-red-500/30">
                      📍
                    </div>

                    <div className="mt-2 rounded-xl bg-white px-3 py-2 text-center shadow-lg">
                      <p className="text-xs font-black text-slate-800">
                        {complaint.location}
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-400">
                        Complaint location
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      {complaint.location}
                    </p>

                    <p className="mt-1 text-[11px] text-slate-400">
                      Citizen reported location
                    </p>
                  </div>

                  <Link
                    to="/officer/map"
                    className="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800"
                  >
                    Open Map
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                Activity
              </p>

              <h2 className="mt-1 text-xl font-black text-slate-900">
                Complaint Timeline
              </h2>

              <div className="mt-6">
                {timeline.map((item, index) => (
                  <div key={item.title} className="relative flex gap-4 pb-7">
                    {index !== timeline.length - 1 && (
                      <div className="absolute left-[11px] top-7 h-full w-px bg-slate-200" />
                    )}

                    <div
                      className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        item.active
                          ? "bg-emerald-500 text-white"
                          : "border-2 border-slate-200 bg-white"
                      }`}
                    >
                      {item.active && (
                        <span className="text-[10px] font-black">✓</span>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row">
                        <h3
                          className={`text-sm font-black ${
                            item.active
                              ? "text-slate-800"
                              : "text-slate-400"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <span className="text-[10px] font-medium text-slate-400">
                          {item.time}
                        </span>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 sm:p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700">
                Action required
              </p>

              <h2 className="mt-2 text-xl font-black text-emerald-950">
                Assign a field team
              </h2>

              <p className="mt-2 text-sm leading-6 text-emerald-800/70">
                This complaint is waiting for an officer action. Assign an
                available team to start the resolution process.
              </p>

              <Link
                to="/officer/assign-team"
                className="mt-5 flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/15 transition hover:bg-emerald-700"
              >
                Assign Team →
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                Citizen
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-black text-emerald-700">
                  RK
                </div>

                <div>
                  <h3 className="text-sm font-black text-slate-900">
                    {complaint.citizen}
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Complaint reporter
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3">
                  <span className="text-xs text-slate-400">Phone</span>
                  <span className="text-xs font-bold text-slate-700">
                    {complaint.phone}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3">
                  <span className="text-xs text-slate-400">Reports</span>
                  <span className="text-xs font-bold text-slate-700">
                    4 total
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                Quick navigation
              </p>

              <div className="mt-4 space-y-2">
                <Link
                  to="/officer/complaints"
                  className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-emerald-100 hover:bg-emerald-50"
                >
                  <span>All Complaints</span>
                  <span>→</span>
                </Link>

                <Link
                  to="/officer/overdue"
                  className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-red-100 hover:bg-red-50"
                >
                  <span>Overdue Issues</span>
                  <span>→</span>
                </Link>

                <Link
                  to="/officer/analytics"
                  className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-emerald-100 hover:bg-emerald-50"
                >
                  <span>Analytics</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-5 text-white shadow-xl sm:p-6">
              <span className="text-2xl">💡</span>

              <h3 className="mt-4 text-base font-black">
                Officer Insight
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                High-priority complaints should be reviewed quickly to keep
                response time within the expected service level.
              </p>
            </div>
          </aside>
        </section>

        <div className="pb-4 pt-6 text-center">
          <p className="text-xs text-slate-400">
            EcoCitizen • Turning reports into meaningful civic action
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComplaintDetails;