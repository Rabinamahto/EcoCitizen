import React, { useState } from "react";
import {
  MapPin,
  Search,
  Filter,
  X,
  Navigation,
} from "lucide-react";

const issues = [
  {
    id: "EC-1001",
    title: "Garbage not collected",
    category: "Garbage",
    status: "Pending",
    location: "Ward 12, Pune",
    top: "32%",
    left: "28%",
  },
  {
    id: "EC-1002",
    title: "Water leakage",
    category: "Water",
    status: "In Progress",
    location: "Ward 8, Pune",
    top: "48%",
    left: "58%",
  },
  {
    id: "EC-1003",
    title: "Street light not working",
    category: "Streetlight",
    status: "Resolved",
    location: "Ward 5, Pune",
    top: "68%",
    left: "40%",
  },
  {
    id: "EC-1004",
    title: "Road damage",
    category: "Road Damage",
    status: "Pending",
    location: "Ward 15, Pune",
    top: "24%",
    left: "72%",
  },
];

const statusStyles = {
  Pending: {
    dot: "bg-red-500",
    badge: "bg-red-50 text-red-600",
  },
  "In Progress": {
    dot: "bg-yellow-500",
    badge: "bg-yellow-50 text-yellow-700",
  },
  Resolved: {
    dot: "bg-green-500",
    badge: "bg-green-50 text-green-700",
  },
};

function ExploreMap() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedIssue, setSelectedIssue] = useState(null);

  const filteredIssues = issues.filter((issue) => {
    const matchesSearch =
      issue.title.toLowerCase().includes(search.toLowerCase()) ||
      issue.category.toLowerCase().includes(search.toLowerCase()) ||
      issue.location.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || issue.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-emerald-600">
            Public Transparency
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Explore Issues
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Explore reported environmental and public issues in your area.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
          <div className="flex flex-col gap-3 md:flex-row">

            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search area, issue or category..."
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

        {/* Map */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">

          {/* Map Header */}
          <div className="flex flex-col gap-3 border-b border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="font-bold text-slate-900">
                Issue Map
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Showing {filteredIssues.length} reported issues
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-100"
            >
              <Navigation size={16} />
              My Location
            </button>

          </div>

          {/* Map Area */}
          <div className="relative h-[550px] overflow-hidden bg-slate-200">

            {/* Map background */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:60px_60px]">

              {/* Fake roads */}
              <div className="absolute left-[20%] top-0 h-full w-3 rotate-[25deg] bg-white/80" />
              <div className="absolute left-[55%] top-0 h-full w-4 rotate-[-18deg] bg-white/80" />
              <div className="absolute left-0 top-[35%] h-4 w-full rotate-[8deg] bg-white/80" />
              <div className="absolute left-0 top-[70%] h-3 w-full rotate-[-5deg] bg-white/80" />

              {/* Map label */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <MapPin
                  size={42}
                  className="mx-auto text-slate-400"
                />

                <p className="mt-2 text-sm font-semibold text-slate-500">
                  Map Area
                </p>

                <p className="text-xs text-slate-400">
                  Real map will be connected with Leaflet
                </p>
              </div>
            </div>

            {/* Issue Markers */}
            {filteredIssues.map((issue) => {
              const style = statusStyles[issue.status];

              return (
                <button
                  key={issue.id}
                  type="button"
                  onClick={() => setSelectedIssue(issue)}
                  style={{
                    top: issue.top,
                    left: issue.left,
                  }}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  title={issue.title}
                >
                  <span
                    className={`block h-5 w-5 rounded-full border-4 border-white ${style.dot} shadow-lg transition hover:scale-125`}
                  />
                </button>
              );
            })}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur">

              <p className="mb-3 text-xs font-bold text-slate-700">
                Status
              </p>

              <div className="space-y-2">

                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  Pending
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  In Progress
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                  Resolved
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Issue Details Modal */}
      {selectedIssue && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">

          <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl">

            <div className="flex items-start justify-between border-b border-slate-200 p-5">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  Public Issue
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  {selectedIssue.title}
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  {selectedIssue.id}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedIssue(null)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={18} />
              </button>

            </div>

            <div className="space-y-4 p-5">

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Category
                </span>

                <span className="font-semibold text-slate-800">
                  {selectedIssue.category}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Status
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    statusStyles[selectedIssue.status].badge
                  }`}
                >
                  {selectedIssue.status}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-slate-500">
                  Location
                </span>

                <span className="text-right text-sm font-semibold text-slate-800">
                  {selectedIssue.location}
                </span>
              </div>

            </div>

            <div className="border-t border-slate-200 p-5">

              <button
                type="button"
                onClick={() => setSelectedIssue(null)}
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

export default ExploreMap;