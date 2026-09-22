import { Link } from "react-router-dom";

const notifications = [
  {
    id: 1,
    type: "urgent",
    icon: "⚠️",
    title: "High-priority complaint needs attention",
    message:
      "Complaint EC1024 has been pending and requires field team assignment.",
    time: "12 min ago",
    tag: "Urgent",
    unread: true,
  },
  {
    id: 2,
    type: "assignment",
    icon: "👷",
    title: "Field team assignment updated",
    message:
      "Green Response Team has been assigned to complaint EC1021.",
    time: "38 min ago",
    tag: "Assignment",
    unread: true,
  },
  {
    id: 3,
    type: "complaint",
    icon: "📍",
    title: "New complaint received",
    message:
      "A new garbage collection complaint has been submitted by a citizen.",
    time: "1 hour ago",
    tag: "New Report",
    unread: true,
  },
  {
    id: 4,
    type: "resolved",
    icon: "✓",
    title: "Complaint successfully resolved",
    message:
      "Complaint EC1020 has been marked as resolved by the field team.",
    time: "2 hours ago",
    tag: "Resolved",
    unread: false,
  },
  {
    id: 5,
    type: "system",
    icon: "📊",
    title: "Daily performance report is ready",
    message:
      "Your civic operations summary for today is available in Analytics.",
    time: "5 hours ago",
    tag: "System",
    unread: false,
  },
  {
    id: 6,
    type: "complaint",
    icon: "💧",
    title: "Water complaint updated",
    message:
      "The status of complaint EC1022 has changed to In Progress.",
    time: "Yesterday",
    tag: "Status Update",
    unread: false,
  },
];

const preferences = [
  {
    title: "New complaints",
    description: "Get notified when citizens submit new reports.",
    enabled: true,
  },
  {
    title: "Urgent complaints",
    description: "Receive alerts for high-priority civic issues.",
    enabled: true,
  },
  {
    title: "Team updates",
    description: "Get updates when field teams change complaint status.",
    enabled: true,
  },
  {
    title: "Daily summary",
    description: "Receive a daily overview of civic operations.",
    enabled: false,
  },
];

function Notifications() {
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
                    Officer Notifications
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-2">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-lg">
                  🔔
                  <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-400" />
                </div>

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
                  3 Unread Notifications
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Stay informed.
                <span className="block text-emerald-400">
                  Act when it matters.
                </span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Keep track of new complaints, field team updates, urgent
                issues and important civic operations.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <button className="rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-black text-white">
                  All Notifications
                </button>

                <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-slate-300">
                  Unread
                </button>

                <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-slate-300">
                  Urgent
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">
              Total
            </p>

            <p className="mt-2 text-3xl font-black text-slate-900">
              24
            </p>

            <p className="mt-2 text-[11px] font-bold text-slate-400">
              Recent notifications
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm">
            <p className="text-xs font-semibold text-emerald-700">
              Unread
            </p>

            <p className="mt-2 text-3xl font-black text-emerald-700">
              3
            </p>

            <p className="mt-2 text-[11px] font-bold text-emerald-600">
              Need your attention
            </p>
          </div>

          <div className="rounded-2xl border border-red-100 bg-red-50 p-5 shadow-sm">
            <p className="text-xs font-semibold text-red-600">
              Urgent
            </p>

            <p className="mt-2 text-3xl font-black text-red-600">
              5
            </p>

            <p className="mt-2 text-[11px] font-bold text-red-500">
              High-priority updates
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
            <p className="text-xs font-semibold text-blue-600">
              Resolved
            </p>

            <p className="mt-2 text-3xl font-black text-blue-600">
              16
            </p>

            <p className="mt-2 text-[11px] font-bold text-blue-500">
              Completed updates
            </p>
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[1.55fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                  Activity center
                </p>

                <h2 className="mt-1 text-xl font-black text-slate-900">
                  Recent notifications
                </h2>
              </div>

              <button className="text-xs font-black text-emerald-600 hover:text-emerald-700">
                Mark all as read
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`relative rounded-2xl border p-4 transition ${
                    notification.unread
                      ? "border-emerald-100 bg-emerald-50/60"
                      : "border-slate-100 bg-white hover:bg-slate-50"
                  }`}
                >
                  {notification.unread && (
                    <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-emerald-500" />
                  )}

                  <div className="flex gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ${
                        notification.type === "urgent"
                          ? "bg-red-50"
                          : notification.type === "resolved"
                            ? "bg-emerald-50"
                            : notification.type === "assignment"
                              ? "bg-blue-50"
                              : "bg-slate-100"
                      }`}
                    >
                      {notification.icon}
                    </div>

                    <div className="min-w-0 flex-1 pr-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-black text-slate-800">
                          {notification.title}
                        </h3>

                        <span
                          className={`rounded-full px-2 py-1 text-[9px] font-black ${
                            notification.type === "urgent"
                              ? "bg-red-100 text-red-600"
                              : notification.type === "resolved"
                                ? "bg-emerald-100 text-emerald-700"
                                : notification.type === "assignment"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {notification.tag}
                        </span>
                      </div>

                      <p className="mt-1.5 text-xs leading-5 text-slate-500">
                        {notification.message}
                      </p>

                      <p className="mt-2 text-[10px] font-semibold text-slate-400">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-5 w-full rounded-xl border border-slate-200 px-4 py-3 text-xs font-black text-slate-600 transition hover:bg-slate-50">
              Load More Notifications
            </button>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                Quick response
              </p>

              <h2 className="mt-1 text-xl font-black text-slate-900">
                Notifications needing action
              </h2>

              <div className="mt-5 space-y-3">
                <Link
                  to="/officer/complaints/EC1024"
                  className="group flex items-center gap-3 rounded-2xl border border-red-100 bg-red-50 p-4 transition hover:border-red-200"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-sm">
                    ⚠️
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-black text-red-800">
                      EC1024 needs attention
                    </p>

                    <p className="mt-1 text-[10px] text-red-600">
                      High priority complaint
                    </p>
                  </div>

                  <span className="text-red-500 transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  to="/officer/assign-team"
                  className="group flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4 transition hover:border-blue-200"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-sm">
                    👷
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-black text-blue-800">
                      Assign a field team
                    </p>

                    <p className="mt-1 text-[10px] text-blue-600">
                      12 complaints unassigned
                    </p>
                  </div>

                  <span className="text-blue-500 transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-5 text-white shadow-xl sm:p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-400">
                Notification health
              </p>

              <h2 className="mt-2 text-xl font-black">
                You are up to date.
              </h2>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                Most recent operational updates have been reviewed by your
                officer account.
              </p>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[88%] rounded-full bg-emerald-500" />
              </div>

              <div className="mt-2 flex justify-between text-[10px] font-bold text-slate-500">
                <span>Reviewed</span>
                <span>88%</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                Preferences
              </p>

              <h2 className="mt-1 text-xl font-black text-slate-900">
                Notification settings
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Choose which operational updates you want to receive.
              </p>
            </div>

            <button className="text-xs font-black text-emerald-600">
              Reset preferences
            </button>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {preferences.map((preference) => (
              <div
                key={preference.title}
                className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <div>
                  <p className="text-xs font-black text-slate-800">
                    {preference.title}
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-slate-400">
                    {preference.description}
                  </p>
                </div>

                <div
                  className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                    preference.enabled
                      ? "bg-emerald-500"
                      : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                      preference.enabled ? "left-6" : "left-1"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-3xl bg-emerald-50 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700">
                Stay responsive
              </p>

              <h2 className="mt-1 text-xl font-black text-emerald-950">
                Every alert can become an action.
              </h2>

              <p className="mt-1 text-sm text-emerald-800/70">
                Review active complaints and make sure no urgent issue gets
                missed.
              </p>
            </div>

            <Link
              to="/officer/complaints"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-center text-xs font-black text-white transition hover:bg-emerald-700"
            >
              Review Complaints →
            </Link>
          </div>
        </section>

        <div className="pb-4 pt-6 text-center">
          <p className="text-xs text-slate-400">
            EcoCitizen • Stay informed, respond faster
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notifications;