function AssignTeam() {
  return (
    <div className="min-h-screen bg-slate-50 p-5 md:p-8">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8">
          <p className="text-sm font-semibold text-emerald-600">
            Officer Portal
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Assign Team
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Assign field workers to handle civic complaints.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-900">
              Complaint Information
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              <div>
                <p className="text-sm text-slate-500">
                  Complaint ID
                </p>

                <p className="mt-1 font-bold text-slate-900">
                  EC1024
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Category
                </p>

                <p className="mt-1 font-bold text-slate-900">
                  Garbage Accumulation
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Location
                </p>

                <p className="mt-1 font-bold text-slate-900">
                  Main Market, Ward 12
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

            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-700">
                Complaint Description
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Large amount of garbage has accumulated near the main market
                area and requires immediate cleaning.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold text-slate-900">
              Assign Worker
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Select an available field worker.
            </p>

            <div className="mt-6">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Field Worker
              </label>

              <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100">
                <option>Select Worker</option>
                <option>Rahul Kumar</option>
                <option>Amit Singh</option>
                <option>Vikash Yadav</option>
                <option>Neha Kumari</option>
              </select>

            </div>

            <div className="mt-5">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Assignment Note
              </label>

              <textarea
                rows="4"
                placeholder="Write instructions for the worker..."
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />

            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Assign Complaint
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default AssignTeam;