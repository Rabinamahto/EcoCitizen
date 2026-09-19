function Analytics() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <p className="text-sm font-semibold text-emerald-600">
            Officer Portal
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Analytics
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Monitor complaint statistics and environmental service performance.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Total Complaints
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              248
            </h2>
            <p className="mt-2 text-sm text-emerald-600">
              +12% this month
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Pending
            </p>
            <h2 className="mt-2 text-3xl font-bold text-amber-600">
              42
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Awaiting action
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              In Progress
            </p>
            <h2 className="mt-2 text-3xl font-bold text-blue-600">
              67
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Currently active
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Resolved
            </p>
            <h2 className="mt-2 text-3xl font-bold text-emerald-600">
              139
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Successfully completed
            </p>
          </div>

        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Complaint Categories
            </h2>

            <div className="mt-6 space-y-5">

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-slate-700">
                    Waste Management
                  </span>
                  <span className="font-semibold text-slate-900">
                    86
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[75%] rounded-full bg-emerald-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-slate-700">
                    Road & Infrastructure
                  </span>
                  <span className="font-semibold text-slate-900">
                    61
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[60%] rounded-full bg-blue-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-slate-700">
                    Water Supply
                  </span>
                  <span className="font-semibold text-slate-900">
                    48
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[48%] rounded-full bg-cyan-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-slate-700">
                    Public Infrastructure
                  </span>
                  <span className="font-semibold text-slate-900">
                    31
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[35%] rounded-full bg-orange-500" />
                </div>
              </div>

            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Resolution Overview
            </h2>

            <div className="mt-6 flex items-center justify-center">
              <div className="flex h-52 w-52 items-center justify-center rounded-full border-[24px] border-emerald-500">
                <div className="text-center">
                  <p className="text-4xl font-bold text-slate-900">
                    56%
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Resolved
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">

              <div className="rounded-xl bg-amber-50 p-3">
                <p className="text-lg font-bold text-amber-600">
                  42
                </p>
                <p className="text-xs text-slate-500">
                  Pending
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-3">
                <p className="text-lg font-bold text-blue-600">
                  67
                </p>
                <p className="text-xs text-slate-500">
                  Active
                </p>
              </div>

              <div className="rounded-xl bg-emerald-50 p-3">
                <p className="text-lg font-bold text-emerald-600">
                  139
                </p>
                <p className="text-xs text-slate-500">
                  Resolved
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Analytics;