import { Link, useLocation } from "react-router-dom";
import {
  CheckCircle,
  FileText,
  MapPin,
  ArrowRight,
  Home,
} from "lucide-react";

function ComplaintSubmitted() {
  const location = useLocation();

  const complaintId =
    location.state?.complaintId || "EC-1025";

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-2xl">

        {/* Success Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-10">

          {/* Success Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle
              size={48}
              className="text-green-600"
            />
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
            Complaint Submitted Successfully!
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
            Thank you for reporting the issue. Your complaint has
            been registered and will be forwarded to the concerned
            local authority.
          </p>

          {/* Complaint ID */}
          <div className="mx-auto mt-7 max-w-md rounded-xl border border-green-200 bg-green-50 p-5">
            <p className="text-sm font-medium text-gray-500">
              Your Complaint ID
            </p>

            <p className="mt-2 text-2xl font-bold tracking-wide text-green-700">
              {complaintId}
            </p>

            <p className="mt-2 text-xs text-gray-500">
              Please keep this ID for tracking your complaint.
            </p>
          </div>

          {/* Information */}
          <div className="mt-7 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                  <FileText size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Complaint Registered
                  </p>

                  <p className="text-xs text-gray-500">
                    Your report is recorded.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-purple-100 p-2 text-purple-600">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Location Recorded
                  </p>

                  <p className="text-xs text-gray-500">
                    Your issue location is saved.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <Link
              to="/citizen/complaints"
              className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              View My Complaints
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/citizen/dashboard"
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              <Home size={17} />
              Go to Dashboard
            </Link>

          </div>

        </div>

        {/* Bottom Note */}
        <p className="mt-5 text-center text-xs text-gray-400">
          You can track the status of your complaint from My Complaints.
        </p>

      </div>
    </div>
  );
}

export default ComplaintSubmitted;