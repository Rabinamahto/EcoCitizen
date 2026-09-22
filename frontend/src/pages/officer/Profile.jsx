import { Link } from "react-router-dom";

const activity = [
  {
    icon: "✓",
    title: "Complaint resolved",
    description: "EC1020 was successfully closed.",
    time: "2 hours ago",
  },
  {
    icon: "👷",
    title: "Field team assigned",
    description: "Green Response Team assigned to EC1021.",
    time: "38 min ago",
  },
  {
    icon: "📊",
    title: "Analytics reviewed",
    description: "Performance dashboard was accessed.",
    time: "Yesterday",
  },
  {
    icon: "📍",
    title: "Complaint reviewed",
    description: "EC1024 was opened for inspection.",
    time: "Yesterday",
  },
];

const settings = [
  {
    title: "Email notifications",
    description: "Receive important updates by email.",
    enabled: true,
  },
  {
    title: "Urgent alerts",
    description: "Get immediate alerts for high-priority complaints.",
    enabled: true,
  },
  {
    title: "Daily summary",
    description: "Receive a daily civic operations summary.",
    enabled: false,
  },
];

function Profile() {
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
                    Officer Profile
                  </p>
                </div>
              </Link>

              <Link
                to="/officer/notifications"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg transition hover:bg-white/10"
              >
                🔔
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-400" />
              </Link>
            </div>

            <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[28px] bg-emerald-500 text-2xl font-black text-white shadow-xl shadow-emerald-500/20">
                SK
              </div>

              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  <span className="text-xs font-bold text-emerald-300">
                    Active Officer
                  </span>
                </div>

                <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Sakshi Kumari
                </h1>

                <p className="mt-1 text-sm text-slate-400">
                  Civic Operations Officer
                </p>

                <p className="mt-2 text-xs font-semibold text-slate-500">
                  Officer ID: OF-1024
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">
              Complaints handled
            </p>

            <p className="mt-2 text-3xl font-black text-slate-900">
              248
            </p>

            <p className="mt-2 text-[11px] font-bold text-emerald-600">
              Since joining
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm">
            <p className="text-xs font-semibold text-emerald-700">
              Resolved
            </p>

            <p className="mt-2 text-3xl font-black text-emerald-700">
              175
            </p>

            <p className="mt-2 text-[11px] font-bold text-emerald-600">
              71% resolution rate
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
            <p className="text-xs font-semibold text-blue-600">
              Teams coordinated
            </p>

            <p className="mt-2 text-3xl font-black text-blue-600">
              64
            </p>

            <p className="mt-2 text-[11px] font-bold text-blue-500">
              Field assignments
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">
              Avg. response
            </p>

            <p className="mt-2 text-3xl font-black text-slate-900">
              42m
            </p>

            <p className="mt-2 text-[11px] font-bold text-emerald-600">
              12 min faster
            </p>
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                  Personal information
                </p>

                <h2 className="mt-1 text-xl font-black text-slate-900">
                  Officer details
                </h2>
              </div>

              <button className="rounded-xl border border-slate-200 px-3 py-2 text-[10px] font-black text-slate-600 transition hover:bg-slate-50">
                Edit Profile
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Full Name
                </p>

                <p className="mt-2 text-sm font-black text-slate-800">
                  Sakshi Kumari
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Officer ID
                </p>

                <p className="mt-2 text-sm font-black text-slate-800">
                  OF-1024
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Role
                </p>

                <p className="mt-2 text-sm font-black text-slate-800">
                  Civic Operations Officer
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Account Status
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />

                  <p className="text-sm font-black text-emerald-600">
                    Active
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Email
                </p>

                <p className="mt-2 break-all text-sm font-black text-slate-800">
                  sakshi@ecocitizen.org
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Phone
                </p>

                <p className="mt-2 text-sm font-black text-slate-800">
                  +91 98XXXXXX24
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-5 text-white shadow-xl sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-400">
                  Officer impact
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  Making civic work visible.
                </h2>
              </div>

              <span className="text-3xl">🌱</span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Your coordination helps complaints move from citizen reports
              to real-world resolution.
            </p>

            <div className="mt-7 space-y-5">
              <div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-bold text-slate-400">
                    Resolution rate
                  </span>

                  <span className="text-[10px] font-black text-emerald-400">
                    71%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[71%] rounded-full bg-emerald-500" />
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-bold text-slate-400">
                    Citizen satisfaction
                  </span>

                  <span className="text-[10px] font-black text-emerald-400">
                    91%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[91%] rounded-full bg-emerald-500" />
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-bold text-slate-400">
                    SLA performance
                  </span>

                  <span className="text-[10px] font-black text-emerald-400">
                    84%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[84%] rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                Recent activity
              </p>

              <h2 className="mt-1 text-xl font-black text-slate-900">
                Your latest actions
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {activity.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 rounded-2xl border border-slate-100 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm text-emerald-600">
                    {item.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-black text-slate-800">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-slate-400">
                      {item.description}
                    </p>

                    <p className="mt-2 text-[9px] font-bold text-slate-400">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                Preferences
              </p>

              <h2 className="mt-1 text-xl font-black text-slate-900">
                Account settings
              </h2>
            </div>

            <div className="mt-6 space-y-3">
              {settings.map((setting) => (
                <div
                  key={setting.title}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4"
                >
                  <div>
                    <p className="text-xs font-black text-slate-800">
                      {setting.title}
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-slate-400">
                      {setting.description}
                    </p>
                  </div>

                  <div
                    className={`relative h-6 w-11 shrink-0 rounded-full ${
                      setting.enabled
                        ? "bg-emerald-500"
                        : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm ${
                        setting.enabled ? "left-6" : "left-1"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-5 w-full rounded-xl border border-slate-200 px-4 py-3 text-xs font-black text-slate-600 transition hover:bg-slate-50">
              Change Password
            </button>

            <button className="mt-3 w-full rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-xs font-black text-red-600 transition hover:bg-red-100">
              Sign Out
            </button>
          </div>
        </section>

        <section className="mt-5 rounded-3xl bg-emerald-50 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700">
                Officer workspace
              </p>

              <h2 className="mt-1 text-xl font-black text-emerald-950">
                Continue managing civic issues.
              </h2>

              <p className="mt-1 text-sm text-emerald-800/70">
                Jump back into complaints, analytics or field team
                coordination.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                to="/officer/complaints"
                className="rounded-xl bg-emerald-600 px-4 py-3 text-xs font-black text-white transition hover:bg-emerald-700"
              >
                Complaints
              </Link>

              <Link
                to="/officer/analytics"
                className="rounded-xl border border-emerald-200 bg-white px-4 py-3 text-xs font-black text-emerald-800 transition hover:bg-emerald-100"
              >
                Analytics
              </Link>

              <Link
                to="/officer/assign-team"
                className="rounded-xl border border-emerald-200 bg-white px-4 py-3 text-xs font-black text-emerald-800 transition hover:bg-emerald-100"
              >
                Assign Team
              </Link>
            </div>
          </div>
        </section>

        <div className="pb-4 pt-6 text-center">
          <p className="text-xs text-slate-400">
            EcoCitizen • Civic operations made simple
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;