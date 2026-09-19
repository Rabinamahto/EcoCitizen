import { useState } from "react";
import { Link } from "react-router-dom";

const complaints = [
  {
    id: "EC1024",
    category: "Garbage Accumulation",
    location: "Main Market, Ward 12",
    priority: "High",
    status: "Pending",
    date: "18 Sep 2026",
  },
  {
    id: "EC1023",
    category: "Road Damage",
    location: "Station Road, Ward 08",
    priority: "Medium",
    status: "In Progress",
    date: "18 Sep 2026",
  },
  {
    id: "EC1022",
    category: "Water Leakage",
    location: "Gandhi Nagar, Ward 15",
    priority: "Low",
    status: "Resolved",
    date: "17 Sep 2026",
  },
  {
    id: "EC1021",
    category: "Street Light Failure",
    location: "College Road, Ward 06",
    priority: "Medium",
    status: "In Progress",
    date: "17 Sep 2026",
  },
  {
    id: "EC1020",
    category: "Illegal Dumping",
    location: "Civil Lines, Ward 03",
    priority: "High",
    status: "Pending",
    date: "16 Sep 2026",
  },
  {
    id: "EC1019",
    category: "Drainage Problem",
    location: "Green Park, Ward 18",
    priority: "Medium",
    status: "Resolved",
    date: "16 Sep 2026",
  },
];

function Complaints() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredComplaints = complaints.filter((complaint) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      complaint.id.toLowerCase().includes(searchText) ||
      complaint.category.toLowerCase().includes(searchText) ||
      complaint.location.toLowerCase().includes(searchText);

    const matchesFilter =
      filter === "All" || complaint.status === filter;

    return matchesSearch && matchesFilter;
  });

  const getStatusClass = (status) => {
    if (status === "Pending") {
      return "bg-amber-100 text-amber-700";
    }

    if (status === "In Progress") {
      return "bg-blue-100 text-blue-700";
    }

    return "bg-emerald-100 text-emerald-700";
  };

  const getPriorityClass = (priority) => {
    if (priority === "High") {
      return "bg-red-100 text-red-700";
    }

    if (priority === "Medium") {
      return "bg-orange-100 text-orange-700";
    }

    return "bg-green-100 text-green-700";
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">

        <aside className="hidden w-64 shrink-0 bg-slate-950 text-white lg:flex lg:flex-col">
          <div className="border-b border-slate-800 p-6">
            <h1 className="text-2xl font-bold text-emerald-400">
              EcoCitizen
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Officer Portal
            </p>
          </div>

          <nav className="flex-1 space-y-2 p-4">

            <Link
              to="/officer/dashboard"
              className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Dashboard
            </Link>

            <Link
              to="/officer/complaints"
              className="block rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-white"
            >
              Complaints
            </Link>

            <Link
              to="/officer/overdue"
              className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Overdue Complaints
            </Link>

            <Link
              to="/officer/map"
              className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Map
            </Link>

            <Link
              to="/officer/analytics"
              className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Analytics
            </Link>

            <Link
              to="/officer/notifications"
              className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Notifications
            </Link>

            <Link
              to="/officer/profile"
              className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Profile
            </Link>

          </nav>

          <div className="border-t border-slate-800 p-5">
            <p className="text-sm font-semibold">
              Officer Account
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Ward Administration
            </p>
          </div>
        </aside>

        <main className="flex-1">

          <header className="border-b border-slate-200 bg-white">
            <div className="px-5 py-6 md:px-8">

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>
                  <p className="text-sm font-semibold text-emerald-600">
                    Officer Portal
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
                    Complaints Management
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Monitor and manage civic complaints from your jurisdiction.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-6 py-4">
                  <p className="text-xs font-medium text-slate-500">
                    Total Complaints
                  </p>

                  <p className="mt-1 text-2xl font-bold text-emerald-700">
                    {complaints.length}
                  </p>
                </div>

              </div>

            </div>
          </header>

          <section className="p-5 md:p-8">

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                <div className="w-full lg:max-w-lg">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Search Complaints
                  </label>

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by ID, category or location..."
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                <div>
                  <p className="mb-2 text-sm font-semibold text-slate-700">
                    Filter by Status
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {["All", "Pending", "In Progress", "Resolved"].map(
                      (item) => (
                        <button
                          key={item}
                          onClick={() => setFilter(item)}
                          className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                            filter === item
                              ? "bg-emerald-600 text-white shadow-sm"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          }`}
                        >
                          {item}
                        </button>
                      )
                    )}

                  </div>
                </div>

              </div>

            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">
                  Pending
                </p>

                <p className="mt-2 text-2xl font-bold text-amber-600">
                  {complaints.filter((item) => item.status === "Pending").length}
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">
                  In Progress
                </p>

                <p className="mt-2 text-2xl font-bold text-blue-600">
                  {
                    complaints.filter(
                      (item) => item.status === "In Progress"
                    ).length
                  }
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">
                  Resolved
                </p>

                <p className="mt-2 text-2xl font-bold text-emerald-600">
                  {complaints.filter((item) => item.status === "Resolved").length}
                </p>
              </div>

            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              <div className="overflow-x-auto">

                <table className="w-full min-w-[900px]">

                  <thead className="bg-slate-50">
                    <tr className="border-b border-slate-200">

                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                        Complaint
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                        Location
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                        Priority
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                        Status
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                        Date
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                        Action
                      </th>

                    </tr>
                  </thead>

                  <tbody>

                    {filteredComplaints.map((complaint) => (
                      <tr
                        key={complaint.id}
                        className="border-b border-slate-100 transition last:border-0 hover:bg-slate-50"
                      >

                        <td className="px-6 py-5">

                          <p className="font-bold text-slate-900">
                            {complaint.id}
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            {complaint.category}
                          </p>

                        </td>

                        <td className="px-6 py-5 text-sm text-slate-600">
                          {complaint.location}
                        </td>

                        <td className="px-6 py-5">

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ${getPriorityClass(
                              complaint.priority
                            )}`}
                          >
                            {complaint.priority}
                          </span>

                        </td>

                        <td className="px-6 py-5">

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusClass(
                              complaint.status
                            )}`}
                          >
                            {complaint.status}
                          </span>

                        </td>

                        <td className="px-6 py-5 text-sm text-slate-500">
                          {complaint.date}
                        </td>

                        <td className="px-6 py-5">

                          <Link
                            to={`/officer/complaints/${complaint.id}`}
                            className="font-semibold text-emerald-600 transition hover:text-emerald-800"
                          >
                            View Details →
                          </Link>

                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            {filteredComplaints.length === 0 && (
              <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">

                <p className="text-lg font-bold text-slate-700">
                  No complaints found
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Try another search or status filter.
                </p>

              </div>
            )}

          </section>

        </main>

      </div>
    </div>
  );
}

export default Complaints;