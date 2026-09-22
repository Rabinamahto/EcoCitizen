import React from "react";
import { Leaf, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600">
                <Leaf className="text-white" size={21} />
              </div>

              <span className="text-xl font-bold text-slate-900">
                Eco<span className="text-emerald-600">Citizen</span>
              </span>
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
              A community-centric platform connecting citizens with local
              governance to report and track environmental and civic issues.
            </p>

            <div className="mt-5 space-y-2 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-emerald-600" />
                India
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} className="text-emerald-600" />
                support@ecocitizen.org
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-slate-900">
              Platform
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link
                to="/"
                className="text-slate-500 hover:text-emerald-600"
              >
                Home
              </Link>

              <Link
                to="/explore"
                className="text-slate-500 hover:text-emerald-600"
              >
                Explore Issues
              </Link>

              <Link
                to="/how-it-works"
                className="text-slate-500 hover:text-emerald-600"
              >
                How It Works
              </Link>

              <Link
                to="/citizen/report"
                className="text-slate-500 hover:text-emerald-600"
              >
                Report an Issue
              </Link>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-slate-900">
              Information
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link
                to="/about"
                className="text-slate-500 hover:text-emerald-600"
              >
                About EcoCitizen
              </Link>

              <Link
                to="/track"
                className="text-slate-500 hover:text-emerald-600"
              >
                Track Complaint
              </Link>

              <Link
                to="/login"
                className="text-slate-500 hover:text-emerald-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="text-slate-500 hover:text-emerald-600"
              >
                Register
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 EcoCitizen. Built for cleaner communities.
          </p>

          <p>
            Code4Nature Challenge 2026
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;