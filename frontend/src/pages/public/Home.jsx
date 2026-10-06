import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Users,
  Camera,
  Route,
  ClipboardCheck,
  Search,
  Leaf,
  Building2,
  Home as HomeIcon,
} from "lucide-react";

const issueCategories = [
  {
    title: "Waste & Garbage",
    description: "Report garbage accumulation and unmanaged waste.",
    icon: "🗑️",
  },
  {
    title: "Water Leakage",
    description: "Report public water leakage and wastage.",
    icon: "💧",
  },
  {
    title: "Sanitation",
    description: "Report sanitation and cleanliness issues.",
    icon: "🧹",
  },
  {
    title: "Pollution",
    description: "Report local pollution and environmental concerns.",
    icon: "🌱",
  },
  {
    title: "Road Damage",
    description: "Report damaged roads and unsafe public spaces.",
    icon: "🛣️",
  },
  {
    title: "Streetlights",
    description: "Report broken or non-functional streetlights.",
    icon: "💡",
  },
];

const complaintSteps = [
  {
    number: "01",
    title: "Report",
    description: "Citizen submits an issue with photo and description.",
    icon: Camera,
  },
  {
    number: "02",
    title: "Location Identified",
    description: "GPS helps identify the relevant local area.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Authority Routed",
    description: "The complaint is routed to the responsible local authority.",
    icon: Route,
  },
  {
    number: "04",
    title: "Team Assigned",
    description: "The responsible field team receives the task.",
    icon: Users,
  },
  {
    number: "05",
    title: "Work & Evidence",
    description: "Field workers update progress and upload evidence.",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Verified",
    description: "The authority verifies the resolution.",
    icon: CheckCircle2,
  },
];

function Home() {
  const [complaintId, setComplaintId] = useState("");
  const navigate = useNavigate();

  const handleTrackComplaint = () => {
    const id = complaintId.trim();

    if (!id) {
      navigate("/citizen/track");
      return;
    }

    navigate("/citizen/track", {
      state: {
        complaintId: id,
      },
    });
  };

  return (
    <div className="bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          
          {/* Hero Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
              <Leaf size={16} />
              Community-Centric Local Governance
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Report local problems.
              <span className="block text-emerald-600">
                Improve your community.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              EcoCitizen connects citizens with the right local authorities
              and field teams to report, track and resolve environmental and
              public infrastructure issues.
            </p>

            {/* Hero Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/citizen/report"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700"
              >
                Report an Issue
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/explore"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
              >
                Explore Issues
              </Link>

              <Link
                to="/citizen/dashboard"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-3.5 font-semibold text-emerald-700 transition hover:bg-emerald-100"
              >
                Citizen Dashboard
              </Link>
            </div>

            {/* Small Trust Points */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-emerald-600" />
                Transparent tracking
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-emerald-600" />
                Location-based routing
              </div>

              <div className="flex items-center gap-2">
                <Users size={18} className="text-emerald-600" />
                Community focused
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-2xl shadow-emerald-100">
              
              <div className="rounded-2xl bg-slate-900 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      EcoCitizen
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                      Community Issue Map
                    </h3>
                  </div>

                  <div className="rounded-xl bg-emerald-500/20 p-3">
                    <MapPin className="text-emerald-400" />
                  </div>
                </div>

                {/* Fake Map */}
                <div className="relative mt-6 h-72 overflow-hidden rounded-2xl bg-slate-800">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute left-10 top-8 h-32 w-32 rounded-full border border-slate-500" />
                    <div className="absolute right-10 top-20 h-40 w-40 rounded-full border border-slate-500" />
                    <div className="absolute bottom-5 left-1/3 h-28 w-28 rounded-full border border-slate-500" />
                  </div>

                  {/* Map Lines */}
                  <div className="absolute left-0 top-1/2 h-px w-full bg-slate-600" />
                  <div className="absolute left-1/2 top-0 h-full w-px bg-slate-600" />

                  {/* Markers */}
                  <div className="absolute left-[25%] top-[30%]">
                    <div className="h-5 w-5 rounded-full border-4 border-red-200 bg-red-500 shadow-lg shadow-red-500/40" />
                  </div>

                  <div className="absolute left-[65%] top-[40%]">
                    <div className="h-5 w-5 rounded-full border-4 border-yellow-200 bg-yellow-500 shadow-lg shadow-yellow-500/40" />
                  </div>

                  <div className="absolute left-[45%] top-[70%]">
                    <div className="h-5 w-5 rounded-full border-4 border-green-200 bg-green-500 shadow-lg shadow-green-500/40" />
                  </div>

                  <div className="absolute bottom-4 left-4 rounded-xl bg-white/10 px-4 py-3 backdrop-blur">
                    <p className="text-xs text-slate-300">
                      Live issue visibility
                    </p>

                    <div className="mt-2 flex gap-4 text-xs">
                      <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-red-500" />
                        Pending
                      </span>

                      <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-yellow-500" />
                        In Progress
                      </span>

                      <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        Resolved
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Bottom Card */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="text-xs text-slate-500">Reports</p>
                  <p className="mt-1 text-xl font-bold text-emerald-700">
                    1,240+
                  </p>
                </div>

                <div className="rounded-xl bg-yellow-50 p-4">
                  <p className="text-xs text-slate-500">In Progress</p>
                  <p className="mt-1 text-xl font-bold text-yellow-700">
                    320+
                  </p>
                </div>

                <div className="rounded-xl bg-green-50 p-4">
                  <p className="text-xs text-slate-500">Resolved</p>
                  <p className="mt-1 text-xl font-bold text-green-700">
                    900+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISSUE CATEGORIES */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              What can you report?
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Report problems that affect your community
            </h2>

            <p className="mt-4 text-slate-600">
              From waste and water issues to roads and streetlights,
              EcoCitizen helps citizens bring local problems to the right
              authority.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {issueCategories.map((category) => (
              <Link
                key={category.title}
                to="/citizen/report"
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
                    {category.icon}
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-600"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CORE IDEA */}
      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              The EcoCitizen approach
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Citizens report the problem.
              <span className="block text-emerald-600">
                The system finds who should handle it.
              </span>
            </h2>

            <p className="mt-6 leading-7 text-slate-600">
              Citizens should not have to know which department, officer or
              field team is responsible for a problem. EcoCitizen uses the
              reported location, issue category and local administrative
              configuration to route complaints to the appropriate authority.
            </p>

            <Link
              to="/explore"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Learn how it works
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <MapPin className="text-emerald-600" />

              <h3 className="mt-4 font-semibold">
                Location Based
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                GPS helps identify the relevant local administrative area.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Route className="text-emerald-600" />

              <h3 className="mt-4 font-semibold">
                Smart Routing
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Complaints are routed according to configured authorities
                and departments.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <ShieldCheck className="text-emerald-600" />

              <h3 className="mt-4 font-semibold">
                Transparent
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Citizens can track the progress and status of their reports.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <CheckCircle2 className="text-emerald-600" />

              <h3 className="mt-4 font-semibold">
                Verified Resolution
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Resolution can include field evidence and authority
                verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* URBAN / RURAL */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Designed for India
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built around local administrative structures
            </h2>

            <p className="mt-4 text-slate-600">
              EcoCitizen can support both urban and rural governance
              structures through configurable local authority mapping.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            
            {/* Urban */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                <Building2 className="text-emerald-700" />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Urban Areas
              </h3>

              <p className="mt-3 text-slate-600">
                State → District → City → Municipal Body → Ward →
                Department → Field Team
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Municipal Body",
                  "Ward",
                  "Department",
                  "Field Team",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-4 py-2 text-sm text-slate-600 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Rural */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                <HomeIcon className="text-emerald-700" />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Rural Areas
              </h3>

              <p className="mt-3 text-slate-600">
                State → District → Block → Gram Panchayat → Village →
                Department → Field Team
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Block",
                  "Gram Panchayat",
                  "Village",
                  "Department",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-4 py-2 text-sm text-slate-600 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLAINT JOURNEY */}
      <section className="bg-slate-950 px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Complaint Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From report to verified resolution
            </h2>

            <p className="mt-4 text-slate-400">
              Every complaint follows a clear lifecycle so citizens and
              authorities can understand what happens next.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {complaintSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-emerald-400">
                      {step.number}
                    </span>

                    <Icon
                      size={22}
                      className="text-emerald-400"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDIA SCALE */}
      <section className="bg-emerald-50 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              India Scale
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              One platform for local environmental governance
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-slate-600">
              EcoCitizen is designed so different local authorities can
              configure their own administrative areas, departments and
              field teams while citizens get a simple reporting experience.
            </p>

            <Link
              to="/explore-map"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-700"
            >
              Explore the issue map
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-emerald-600">
                States
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Designed for nationwide expansion
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-emerald-600">
                Local
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Jurisdiction-based operations
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-emerald-600">
                Public
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Transparent issue visibility
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-emerald-600">
                Private
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Citizen information stays protected
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK COMPLAINT */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm sm:p-12">
            
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
              <Search className="text-emerald-700" />
            </div>

            <h2 className="mt-6 text-3xl font-bold">
              Track your complaint
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              Enter your EcoCitizen complaint ID to view the current status
              and progress of your report.
            </p>

            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={complaintId}
                onChange={(e) => setComplaintId(e.target.value)}
                placeholder="Enter complaint ID"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />

              <button
                type="button"
                onClick={handleTrackComplaint}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-700"
              >
                Track Report
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900 px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20">
            <Leaf className="text-emerald-400" size={30} />
          </div>

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            See a problem in your community?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Report it with EcoCitizen and help create cleaner, safer and
            better-managed communities.
          </p>

          <Link
            to="/citizen/report"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white transition hover:bg-emerald-700"
          >
            Report an Issue
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;