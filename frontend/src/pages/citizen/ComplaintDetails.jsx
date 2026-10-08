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

const complaintsData = [
  {
    id: "EC-2026-00124",
    category: "Garbage",
    title: "Garbage not collected",
    description: "Garbage has not been collected for the last few days.",
    location: "Ward 23, Pune",
    date: "12 Sep 2026",
    status: "Resolved",
  },
  {
    id: "EC-2026-00131",
    category: "Water",
    title: "Water leakage on road",
    description: "A water pipeline is leaking near the main road.",
    location: "Ward 24, Pune",
    date: "13 Sep 2026",
    status: "In Progress",
  },
  {
    id: "EC-2026-00138",
    category: "Sanitation",
    title: "Public area needs cleaning",
    description: "The public area near the community hall needs cleaning.",
    location: "Ward 22, Pune",
    date: "14 Sep 2026",
    status: "Pending",
  },
  {
    id: "EC-2026-00142",
    category: "Streetlight",
    title: "Streetlight not working",
    description: "Streetlight has stopped working near the residential area.",
    location: "Ward 21, Pune",
    date: "15 Sep 2026",
    status: "Pending",
  },
];

function StatusBadge({ status }) {
  const statusConfig = {
    Pending: {
      icon: Clock3,
      classes: "bg-amber-50 text-amber-700 border-amber-200",
    },
    "In Progress": {
      icon: LoaderCircle,
      classes: "bg-blue-50 text-blue-700 border-blue-200",
    },
    Resolved: {
      icon: CheckCircle2,
      classes: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  };

  const config = statusConfig[status] || {
    icon: AlertCircle,
    classes: "bg-slate-50 text-slate-600 border-slate-200",
  };

  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${config.classes}`}
    >
      <Icon size={14} />
      {status}
    </span>
  );
}

function MyComplaints() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredComplaints = useMemo(() => {
    return complaintsData.filter((complaint) => {
      const matchesSearch =
        complaint.id.toLowerCase().includes(search.toLowerCase()) ||
        complaint.title.toLowerCase().includes(search.toLowerCase()) ||
        complaint.category.toLowerCase().includes(search.toLowerCase()) ||
        complaint.location.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || complaint.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const total = complaintsData.length;
  const pending = complaintsData.filter(
    (item) => item.status === "Pending"
  ).length;
  const inProgress = complaintsData.filter(
    (item) => item.status === "In Progress"
  ).length;
  const resolved = complaintsData.filter(
    (item) => item.status === "Resolved"
  ).length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold text-emerald-600">
                Citizen Portal
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                My Complaints
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                View and track all the environmental and civic issues you have
                reported.
              </p>
            </div>

            <Link
              to="/citizen/report"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Report a Problem
              <ChevronRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-slate-100 p-2.5">
                <FileText className="text-slate-600" size={20} />
              </div>

              <span className="text-xs font-medium text-slate-400">
                Total
              </span>
            </div>

            <p className="text-3xl font-bold text-slate-900">{total}</p>
            <p className="mt-1 text-sm text-slate-500">All complaints</p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-amber-50 p-2.5">
                <Clock3 className="text-amber-600" size={20} />
              </div>

              <span className="text-xs font-medium text-amber-600">
                Pending
              </span>
            </div>

            <p className="text-3xl font-bold text-slate-900">{pending}</p>
            <p className="mt-1 text-sm text-slate-500">
              Awaiting action
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-blue-50 p-2.5">
                <LoaderCircle className="text-blue-600" size={20} />
              </div>

              <span className="text-xs font-medium text-blue-600">
                Active
              </span>
            </div>

            <p className="text-3xl font-bold text-slate-900">
              {inProgress}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Being worked on
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-emerald-50 p-2.5">
                <CheckCircle2 className="text-emerald-600" size={20} />
              </div>

              <span className="text-xs font-medium text-emerald-600">
                Completed
              </span>
            </div>

            <p className="text-3xl font-bold text-slate-900">
              {resolved}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Successfully resolved
            </p>
          </div>
        </div>
      </section>

      {/* Complaints */}
      <main className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Filters */}
          <div className="border-b border-slate-200 p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Your Reports
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Search and filter your submitted complaints.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* Search */}
                <div className="relative">
                  <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    placeholder="Search complaints..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white sm:w-64"
                  />
                </div>

                {/* Status */}
                <div className="relative">
                  <Filter
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    value={statusFilter}
                    onChange={(event) => setStatusFilter(event.target.value)}
                    className="appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-9 text-sm font-medium text-slate-700 outline-none focus:border-emerald-500"
                  >
                    <option value="All">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Complaint List */}
          <div className="divide-y divide-slate-100">
            {filteredComplaints.length > 0 ? (
              filteredComplaints.map((complaint) => (
                <div
                  key={complaint.id}
                  className="p-5 transition hover:bg-slate-50"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    {/* Main Information */}
                    <div className="min-w-0 flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                          {complaint.category}
                        </span>

                        <span className="text-xs font-medium text-slate-400">
                          {complaint.id}
                        </span>

                        <StatusBadge status={complaint.status} />
                      </div>

                      <h3 className="text-base font-bold text-slate-900">
                        {complaint.title}
                      </h3>

                      <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                        {complaint.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={14} />
                          {complaint.location}
                        </span>

                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays size={14} />
                          Reported {complaint.date}
                        </span>
                      </div>
                    </div>

                    {/* Action */}
                    <Link
                      to={`/citizen/complaints/${complaint.id}`}
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      View Details
                      <ChevronRight size={17} />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-16 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                  <FileText size={24} className="text-slate-400" />
                </div>

                <h3 className="font-semibold text-slate-900">
                  No complaints found
                </h3>

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

export default MyComplaints;