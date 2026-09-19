import { Link, useParams } from "react-router-dom";

function ComplaintDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-slate-50 p-5 md:p-8">
      <div className="mx-auto max-w-6xl">

        <div className="mb-6">
          <Link
            to="/officer/complaints"
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
          >
            ← Back to Complaints
          </Link>

          <div className="mt-4">
            <p className="text-sm font-semibold text-emerald-600">
              Officer Portal
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              Complaint Details
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Review complaint information and take necessary action.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="space-y-6 lg:col-span-2">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                <div>
                  <p className="text-sm text-slate-500">
                    Complaint ID
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-slate-900">
                    {id || "EC1024"}
                  </h2>
                </div>

                <span className="w-fit rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-700">
                  Pending
                </span>

              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">

                <div>
                  <p className="text-sm text-slate-500">
                    Category
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    Garbage Accumulation
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Priority
                  </p>

                  <span className="mt-1 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">
                    High
                  </span>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Reported Date
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    18 September 2026
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    Main Market, Ward 12
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold text-slate-900">
                Complaint Description
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Large amount of garbage has accumulated near the main market
                area. The waste is creating an unhygienic environment and
                needs immediate cleaning.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold text-slate-900">
                Complaint Timeline
              </h2>

              <div className="mt-6 space-y-6">

                <div className="flex gap-4">

                  <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-emerald-500" />

                  <div>
                    <p className="font-semibold text-slate-900">
                      Complaint Submitted
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      18 Sep 2026 · 09:30 AM
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-emerald-500" />

                  <div>
                    <p className="font-semibold text-slate-900">
                      Complaint Reviewed
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      18 Sep 2026 · 10:15 AM
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-slate-300" />

                  <div>
                    <p className="font-semibold text-slate-400">
                      Team Assignment Pending
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Awaiting officer action
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="space-y-6">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold text-slate-900">
                Officer Actions
              </h2>

              <div className="mt-5 space-y-3">

                <Link
                  to="/officer/assign-team"
                  className="block rounded-xl bg-emerald-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-emerald-700"
                >
                  Assign Team
                </Link>

                <button
                  type="button"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Mark In Progress
                </button>

                <button
                  type="button"
                  className="w-full rounded-xl border border-red-200 px-4 py-3 font-semibold text-red-600 transition hover:bg-red-50"
                >
                  Reopen Complaint
                </button>

              </div>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold text-slate-900">
                Location
              </h2>

              <div className="mt-4 flex h-48 items-center justify-center rounded-xl bg-emerald-50">

                <div className="text-center">
                  <div className="text-4xl">
                    📍
                  </div>

                  <p className="mt-2 font-semibold text-slate-800">
                    Main Market
                  </p>

                  <p className="text-sm text-slate-500">
                    Ward 12
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ComplaintDetails;