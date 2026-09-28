import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  MapPin,
  User,
  Building2,
  CalendarDays,
  FileText,
  AlertCircle,
} from "lucide-react";

function TrackComplaint() {
  const location = useLocation();

  // Complaint ID can come from MyComplaints or ComplaintSubmitted
  const complaintId =
    location.state?.complaintId || "EC-1025";

  const [complaint] = useState({
    id: complaintId,
    category: "Garbage / Waste Management",
    description:
      "Garbage has not been collected from the area for several days.",
    location: "Pune, Maharashtra",
    submittedDate: "15 September 2026",
    lastUpdated: "16 September 2026",
    status: "In Progress",
    assignedDepartment: "Municipal Waste Management",
    assignedOfficer: "Local Area Officer",
    fieldTeam: "Sanitation Field Team",
  });

  const timeline = [
    {
      id: 1,
      title: "Complaint Submitted",
      description: "Your complaint was successfully registered.",
      date: "15 Sep 2026, 10:30 AM",
      completed: true,
    },
    {
      id: 2,
      title: "Complaint Verified",
      description:
        "The complaint details and location were verified.",
      date: "15 Sep 2026, 12:15 PM",
      completed: true,
    },
    {
      id: 3,
      title: "Assigned to Department",
      description:
        "The complaint was forwarded to the concerned department.",
      date: "15 Sep 2026, 2:00 PM",
      completed: true,
    },
    {
      id: 4,
      title: "Field Team Assigned",
      description:
        "A field team has been assigned to inspect and resolve the issue.",
      date: "16 Sep 2026, 9:20 AM",
      completed: true,
    },
    {
      id: 5,
      title: "Issue Being Resolved",
      description:
        "The field team is currently working on the reported issue.",
      date: "16 Sep 2026, 11:00 AM",
      completed: true,
    },
    {
      id: 6,
      title: "Complaint Resolved",
      description:
        "The issue will be marked resolved after verification.",
      date: "Pending",
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Back Button */}
        <Link
          to="/citizen/complaints"
          className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-green-600"
        >
          <ArrowLeft size={18} />
          Back to My Complaints
        </Link>

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-green-100 p-3 text-green-600">
                <FileText size={24} />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Track Complaint
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                  Complaint ID:{" "}
                  <span className="font-semibold text-gray-700">
                    {complaint.id}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Status */}
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            <Clock size={17} />
            {complaint.status}
          </span>
        </div>

        {/* Complaint Summary */}
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold text-gray-900">
            Complaint Details
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {/* Category */}
            <div className="flex gap-3">
              <div className="rounded-lg bg-blue-100 p-2.5 text-blue-600">
                <FileText size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Category
                </p>

                <p className="mt-1 text-sm font-medium text-gray-800">
                  {complaint.category}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-3">
              <div className="rounded-lg bg-purple-100 p-2.5 text-purple-600">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Location
                </p>

                <p className="mt-1 text-sm font-medium text-gray-800">
                  {complaint.location}
                </p>
              </div>
            </div>

            {/* Submitted Date */}
            <div className="flex gap-3">
              <div className="rounded-lg bg-green-100 p-2.5 text-green-600">
                <CalendarDays size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Submitted On
                </p>

                <p className="mt-1 text-sm font-medium text-gray-800">
                  {complaint.submittedDate}
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="flex gap-3">
              <div className="rounded-lg bg-orange-100 p-2.5 text-orange-600">
                <Clock size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Last Updated
                </p>

                <p className="mt-1 text-sm font-medium text-gray-800">
                  {complaint.lastUpdated}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 border-t border-gray-100 pt-5">
            <p className="text-sm font-medium text-gray-700">
              Description
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {complaint.description}
            </p>
          </div>
        </div>

        {/* Assignment Information */}
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold text-gray-900">
            Assigned Authority
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

            <div className="flex gap-3">
              <div className="rounded-lg bg-indigo-100 p-2.5 text-indigo-600">
                <Building2 size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Department
                </p>

                <p className="mt-1 text-sm font-medium text-gray-800">
                  {complaint.assignedDepartment}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="rounded-lg bg-blue-100 p-2.5 text-blue-600">
                <User size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Officer
                </p>

                <p className="mt-1 text-sm font-medium text-gray-800">
                  {complaint.assignedOfficer}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="rounded-lg bg-green-100 p-2.5 text-green-600">
                <User size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Field Team
                </p>

                <p className="mt-1 text-sm font-medium text-gray-800">
                  {complaint.fieldTeam}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Timeline */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-semibold text-gray-900">
            Complaint Progress
          </h2>

          <div className="space-y-0">
            {timeline.map((item, index) => (
              <div
                key={item.id}
                className="relative flex gap-4"
              >
                {/* Timeline Line */}
                {index !== timeline.length - 1 && (
                  <div
                    className={`absolute left-[19px] top-10 h-full w-0.5 ${
                      item.completed
                        ? "bg-green-200"
                        : "bg-gray-200"
                    }`}
                  />
                )}

                {/* Timeline Icon */}
                <div
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    item.completed
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {item.completed ? (
                    <CheckCircle size={21} />
                  ) : (
                    <Clock size={20} />
                  )}
                </div>

                {/* Timeline Content */}
                <div className="pb-8">
                  <h3
                    className={`font-semibold ${
                      item.completed
                        ? "text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>

                  <p className="mt-2 text-xs font-medium text-gray-400">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Status Notice */}
        <div className="mt-6 flex gap-3 rounded-xl border border-yellow-200 bg-yellow-50 p-4">
          <AlertCircle
            size={21}
            className="mt-0.5 shrink-0 text-yellow-600"
          />

          <div>
            <p className="text-sm font-semibold text-yellow-800">
              Current Status: {complaint.status}
            </p>

            <p className="mt-1 text-sm leading-6 text-yellow-700">
              The field team is currently working on your complaint.
              You will receive a notification when the status changes.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TrackComplaint;