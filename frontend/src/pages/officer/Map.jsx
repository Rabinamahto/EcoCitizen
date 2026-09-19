import { Link } from "react-router-dom";

const locations = [
  {
    name: "Main Market",
    ward: "Ward 12",
    complaints: 12,
    status: "Pending",
  },
  {
    name: "Station Road",
    ward: "Ward 08",
    complaints: 8,
    status: "In Progress",
  },
  {
    name: "Gandhi Nagar",
    ward: "Ward 15",
    complaints: 15,
    status: "Resolved",
  },
  {
    name: "College Road",
    ward: "Ward 06",
    complaints: 7,
    status: "In Progress",
  },
  {
    name: "Civil Lines",
    ward: "Ward 03",
    complaints: 10,
    status: "Pending",
  },
  {
    name: "Green Park",
    ward: "Ward 18",
    complaints: 18,
    status: "Resolved",
  },
];

function Map() {
  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-slate-200 bg-white lg:block">
        <div className="border-b border-slate-200 p-6">
          <h1 className="text-2xl font-bold text-emerald-700">EcoCitizen</h1>
          <p className="mt-1 text-sm text-slate-500">Officer Panel</p>
        </div>

        <nav className="p-4">
          <Link
            to="/officer/dashboard"
            className="mb-2 block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Dashboard
          </Link>

          <Link
            to="/officer/complaints"
            className="mb-2 block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Complaints
          </Link>

          <Link
            to="/officer/map"
            className="mb-2 block rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"
          >
            Complaint Map
          </Link>

          <Link
            to="/officer/analytics"
            className="mb-2 block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Analytics
          </Link>

          <Link
            to="/officer/notifications"
            className="mb-2 block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Notifications
          </Link>

          <Link
            to="/officer/overdue"
            className="mb-2 block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Overdue
          </Link>

          <Link
            to="/officer/profile"
            className="mb-2 block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Profile
          </Link>
        </nav>
      </aside>

      <main className="lg:ml-64">
        <div className="border-b border-slate-200 bg-white px-5 py-5 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold text-emerald-600">
              Officer Panel
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              Complaint Map
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              View complaint locations and area-wise complaint activity.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl space-y-6 p-5 md:p-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Complaint Intelligence Map
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Current complaint activity across your jurisdiction.
              </p>
            </div>

            <div className="relative h-[520px] overflow-hidden bg-emerald-50">
              <div className="absolute inset-0 opacity-40">
                <div className="absolute left-0 top-24 h-2 w-full rotate-12 bg-white"></div>
                <div className="absolute left-0 top-64 h-3 w-full -rotate-6 bg-white"></div>
                <div className="absolute left-20 top-0 h-full w-2 rotate-12 bg-white"></div>
                <div className="absolute right-32 top-0 h-full w-3 -rotate-12 bg-white"></div>
              </div>

              <div className="absolute left-[30%] top-[25%]">
                <div className="rounded-full bg-amber-500 px-4 py-3 text-sm font-bold text-white shadow-lg">
                  12
                </div>
                <p className="mt-1 whitespace-nowrap text-xs font-semibold text-slate-700">
                  Main Market
                </p>
              </div>

              <div className="absolute left-[53%] top-[38%]">
                <div className="rounded-full bg-blue-500 px-4 py-3 text-sm font-bold text-white shadow-lg">
                  8
                </div>
                <p className="mt-1 whitespace-nowrap text-xs font-semibold text-slate-700">
                  Station Road
                </p>
              </div>

              <div className="absolute left-[68%] top-[61%]">
                <div className="rounded-full bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-lg">
                  15
                </div>
                <p className="mt-1 whitespace-nowrap text-xs font-semibold text-slate-700">
                  Gandhi Nagar
                </p>
              </div>

              <div className="absolute left-[76%] top-[32%]">
                <div className="rounded-full bg-blue-500 px-4 py-3 text-sm font-bold text-white shadow-lg">
                  7
                </div>
                <p className="mt-1 whitespace-nowrap text-xs font-semibold text-slate-700">
                  College Road
                </p>
              </div>

              <div className="absolute left-[39%] top-[70%]">
                <div className="rounded-full bg-amber-500 px-4 py-3 text-sm font-bold text-white shadow-lg">
                  10
                </div>
                <p className="mt-1 whitespace-nowrap text-xs font-semibold text-slate-700">
                  Civil Lines
                </p>
              </div>

              <div className="absolute left-[21%] top-[55%]">
                <div className="rounded-full bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-lg">
                  18
                </div>
                <p className="mt-1 whitespace-nowrap text-xs font-semibold text-slate-700">
                  Green Park
                </p>
              </div>

              <div className="absolute bottom-5 left-5 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur">
                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Status
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-amber-500"></span>
                    Pending
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                    In Progress
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-600"></span>
                    Resolved
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <div
                key={location.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-slate-900">
                      {location.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {location.ward}
                    </p>
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700">
                    {location.complaints}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Status
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {location.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-amber-900">Important</h3>

            <p className="mt-1 text-sm leading-6 text-amber-800">
              This is currently a frontend mock map for the Officer dashboard.
              Later we can connect real latitude and longitude data using
              Leaflet and OpenStreetMap.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Map;