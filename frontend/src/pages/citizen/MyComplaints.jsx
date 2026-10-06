import React, { useMemo, useState } from "react";
import {
  Search,
  Filter,
  MapPin,
  CalendarDays,
  ChevronRight,
  Clock3,
  CheckCircle2,
  AlertCircle,
  LoaderCircle,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

const complaints = [
  {
    id: "EC-1001",
    title: "Garbage not collected",
    category: "Garbage",
    description:
      "Garbage has not been collected from the area for the last few days.",
    location: "Ward 12, Pune",
    date: "14 Sep 2026",
    status: "Pending",
  },
  {
    id: "EC-1002",
    title: "Water leakage",
    category: "Water",
    description:
      "There is continuous water leakage near the main road.",
    location: "Ward 8, Pune",
    date: "12 Sep 2026",
    status: "In Progress",
  },
  {
    id: "EC-1003",
    title: "Street light not working",
    category: "Streetlight",
    description:
      "The street light has not been working for several days.",
    location: "Ward 5, Pune",
    date: "08 Sep 2026",
    status: "Resolved",
  },
];

function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-red-50 text-red-600",
    "In Progress": "bg-yellow-50 text-yellow-700",
    Resolved: "bg-green-50 text-green-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-slate-100 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
}

function MyComplaints() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const filteredComplaints = useMemo(() => {
    return complaints.filter((complaint) => {
      const matchesSearch =
        complaint.title.toLowerCase().includes(search.toLowerCase()) ||
        complaint.id.toLowerCase().includes(search.toLowerCase()) ||
        complaint.category.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || complaint.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-emerald-600">
              Citizen Portal
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              My Complaints
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Track and manage the environmental issues you have reported.
            </p>
          </div>

          <Link
            to="/citizen/report"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            Report a Problem
          </Link>
        </div>

        {/* Stats */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Total Complaints</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {complaints.length}
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <FileText size={22} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Pending</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {complaints.filter((c) => c.status === "Pending").length}
                </p>
              </div>

              <div className="rounded-xl bg-red-50 p-3 text-red-600">
                <AlertCircle size={22} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">In Progress</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {
                    complaints.filter(
                      (c) => c.status === "In Progress"
                    ).length
                  }
                </p>
              </div>

              <div className="rounded-xl bg-yellow-50 p-3 text-yellow-600">
                <LoaderCircle size={22} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Resolved</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {complaints.filter((c) => c.status === "Resolved").length}
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-3 text-green-600">
                <CheckCircle2 size={22} />
              </div>
            </div>
          </div>

        </div>

        {/* Search and Filter */}
        <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
          <div className="flex flex-col gap-3 md:flex-row">

            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search complaint..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter size={18} className="text-slate-400" />

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500"
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>

          </div>
        </div>

        {/* Complaints */}
        <div className="space-y-4">

          {filteredComplaints.length > 0 ? (
            filteredComplaints.map((complaint) => (
              <div
                key={complaint.id}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  <div className="min-w-0 flex-1">

                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                        {complaint.category}
                      </span>

                      <StatusBadge status={complaint.status} />

                      <span className="text-xs font-medium text-slate-400">
                        {complaint.id}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-slate-900">
                      {complaint.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {complaint.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-slate-500">

                      <div className="flex items-center gap-1.5">
                        <MapPin size={15} />
                        {complaint.location}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <CalendarDays size={15} />
                        {complaint.date}
                      </div>

                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedComplaint(complaint)}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    View Details
                    <ChevronRight size={17} />
                  </button>

                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl bg-white px-6 py-12 text-center shadow-sm ring-1 ring-slate-100">
              <FileText
                size={40}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-4 text-lg font-bold text-slate-800">
                No complaints found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try changing your search or status filter.
              </p>
            </div>
          )}

        </div>
      </div>

      {/* Complaint Details Modal */}
      {selectedComplaint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">

          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 p-5">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  Complaint Details
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  {selectedComplaint.title}
                </h2>

                <p className="mt-1 text-xs font-medium text-slate-400">
                  {selectedComplaint.id}
                </p>
              </div>

              <button
                onClick={() => setSelectedComplaint(null)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100"
              >
                Close
              </button>

            </div>

            {/* Modal Content */}
            <div className="space-y-6 p-5">

              <div className="flex flex-wrap items-center gap-3">

                <span className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                  {selectedComplaint.category}
                </span>

                <StatusBadge status={selectedComplaint.status} />

              </div>

              {/* Description */}
              <div>
                <h3 className="mb-2 text-sm font-bold text-slate-900">
                  Description
                </h3>

                <p className="text-sm leading-6 text-slate-500">
                  {selectedComplaint.description}
                </p>
              </div>

              {/* Location + Date */}
              <div className="grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <MapPin size={15} />
                    Location
                  </div>

                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {selectedComplaint.location}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <CalendarDays size={15} />
                    Reported On
                  </div>

                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {selectedComplaint.date}
                  </p>
                </div>

              </div>

              {/* Progress */}
              <div>
                <h3 className="mb-4 text-sm font-bold text-slate-900">
                  Complaint Progress
                </h3>

                <div className="space-y-4">

                  {/* Reported */}
                  <div className="flex gap-3">
                    <div className="mt-1 h-3 w-3 rounded-full bg-emerald-500" />

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Complaint Reported
                      </p>

                      <p className="text-xs text-slate-500">
                        Your complaint was successfully submitted.
                      </p>
                    </div>
                  </div>

                  {/* Assigned */}
                  <div className="flex gap-3">
                    <div
                      className={`mt-1 h-3 w-3 rounded-full ${
                        selectedComplaint.status !== "Pending"
                          ? "bg-emerald-500"
                          : "bg-slate-300"
                      }`}
                    />

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Assigned
                      </p>

                      <p className="text-xs text-slate-500">
                        Complaint routed to the concerned authority.
                      </p>
                    </div>
                  </div>

                  {/* In Progress */}
                  <div className="flex gap-3">
                    <div
                      className={`mt-1 h-3 w-3 rounded-full ${
                        selectedComplaint.status === "In Progress" ||
                        selectedComplaint.status === "Resolved"
                          ? "bg-emerald-500"
                          : "bg-slate-300"
                      }`}
                    />

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Work In Progress
                      </p>

                      <p className="text-xs text-slate-500">
                        Field team is working on the reported issue.
                      </p>
                    </div>
                  </div>

                  {/* Resolved */}
                  <div className="flex gap-3">
                    <div
                      className={`mt-1 h-3 w-3 rounded-full ${
                        selectedComplaint.status === "Resolved"
                          ? "bg-emerald-500"
                          : "bg-slate-300"
                      }`}
                    />

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Resolved
                      </p>

                      <p className="text-xs text-slate-500">
                        Complaint has been verified and resolved.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="border-t border-slate-200 p-5">

              <button
                onClick={() => setSelectedComplaint(null)}
                className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Close
              </button>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default MyComplaints;