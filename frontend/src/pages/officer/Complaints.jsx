import { useState } from "react";
import { Link } from "react-router-dom";

const complaints = [
  {
    id: "EC1024",
    title: "Garbage Accumulation",
    location: "Main Market, Ward 12",
    category: "Waste Management",
    priority: "High",
    status: "Pending",
    date: "18 Sep 2026",
  },
  {
    id: "EC1023",
    title: "Road Damage",
    location: "Station Road, Ward 08",
    category: "Road & Infrastructure",
    priority: "Medium",
    status: "In Progress",
    date: "18 Sep 2026",
  },
  {
    id: "EC1022",
    title: "Water Leakage",
    location: "Gandhi Nagar, Ward 15",
    category: "Water Supply",
    priority: "Low",
    status: "Resolved",
    date: "17 Sep 2026",
  },
  {
    id: "EC1021",
    title: "Street Light Failure",
    location: "College Road, Ward 06",
    category: "Public Infrastructure",
    priority: "Medium",
    status: "In Progress",
    date: "17 Sep 2026",
  },
  {
    id: "EC1020",
    title: "Illegal Dumping",
    location: "Civil Lines, Ward 03",
    category: "Waste Management",
    priority: "High",
    status: "Pending",
    date: "16 Sep 2026",
  },
  {
    id: "EC1019",
    title: "Drainage Problem",
    location: "Green Park, Ward 18",
    category: "Water Supply",
    priority: "Medium",
    status: "Resolved",
    date: "16 Sep 2026",
  },
];

function Complaints() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredComplaints = complaints.filter((complaint) => {
    const matchesSearch =
      complaint.id.toLowerCase().includes(search.toLowerCase()) ||
      complaint.title.toLowerCase().includes(search.toLowerCase()) ||
      complaint.location.toLowerCase().includes(search.toLowerCase()) ||
      complaint.category.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || complaint.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-slate-200 bg-white lg:block">
        <div className="border-b border-slate-200 p-6">
          <h1 className="text-2xl font-bold text-emerald-700">
            EcoCitizen
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Officer Panel
          </p>
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
            className="mb-2 block rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"
          >
            Complaints
          </Link>

          <Link
            to="/officer/map"
            className="mb-2 block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
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
              Complaints
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Manage and monitor complaints from your jurisdiction.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl space-y-6 p-5 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">
                Total Complaints
              </p>

              <p className="mt-2 text-3xl font-bold text-slate-900">
                {complaints.length}
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm text-amber-700">
                Pending
              </p>

              <p className="mt-2 text-3xl font-bold text-amber-800">
                {
                  complaints.filter(
                    (complaint) => complaint.status === "Pending"
                  ).length
                }
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm text-blue-700">
                In Progress
              </p>

              <p className="mt-2 text-3xl font-bold text-blue-800">
                {
                  complaints.filter(
                    (complaint) => complaint.status === "In Progress"
                  ).length
                }
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm text-emerald-700">
                Resolved
              </p>

              <p className="mt-2 text-3xl font-bold text-emerald-800">
                {
                  complaints.filter(
                    (complaint) => complaint.status === "Resolved"
                  ).length
                }
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  All Complaints
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Search and filter complaints.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="Search complaints..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-emerald-500 sm:w-72"
                />

                <select
                  value={statusFilter}
                  onChange={(event) =>
                    setStatusFilter(event.target.value)
                  }
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-emerald-500"
                >
                  <option value="All">All Status</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                      Complaint
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                      Location
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                      Category
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

                <tbody className="divide-y divide-slate-100">
                  {filteredComplaints.map((complaint) => (
                    <tr
                      key={complaint.id}
                      className="hover:bg-slate-50"
                    >
                      <td className="px-6 py-5">
                        <p className="font-bold text-slate-900">
                          {complaint.title}
                        </p>

                        <p className="mt-1 text-xs font-medium text-slate-400">
                          {complaint.id}
                        </p>
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {complaint.location}
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {complaint.category}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            complaint.priority === "High"
                              ? "bg-red-100 text-red-700"
                              : complaint.priority === "Medium"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          {complaint.priority}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            complaint.status === "Pending"
                              ? "bg-amber-100 text-amber-700"
                              : complaint.status === "In Progress"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-emerald-100 text-emerald-700"
                          }`}
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
                          className="font-semibold text-emerald-600 hover:text-emerald-700"
                        >
                          View Details →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredComplaints.length === 0 && (
              <div className="p-10 text-center">
                <p className="font-semibold text-slate-700">
                  No complaints found
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Try changing your search or status filter.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Complaints;