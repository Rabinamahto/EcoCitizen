import React from "react";

import {
  ArrowRight,
  Camera,
  CheckCircle,
  Clock3,
  Droplets,
  FileCheck2,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Trash2,
  Users,
  Wind,
  Construction,
  Building2,
  Map,
} from "lucide-react";

import { Link } from "react-router-dom";

function Home() {
  const issueCategories = [
    {
      title: "Waste & Garbage",
      description: "Report garbage and waste problems.",
      icon: Trash2,
    },
    {
      title: "Water Leakage",
      description: "Report leaking pipes and water issues.",
      icon: Droplets,
    },
    {
      title: "Sanitation",
      description: "Report sanitation problems in your area.",
      icon: ShieldCheck,
    },
    {
      title: "Pollution",
      description: "Report local pollution concerns.",
      icon: Wind,
    },
    {
      title: "Road Damage",
      description: "Report damaged roads and public spaces.",
      icon: Construction,
    },
    {
      title: "Streetlights",
      description: "Report damaged or non-working lights.",
      icon: Lightbulb,
    },
  ];

  const complaintSteps = [
    {
      number: "01",
      title: "Report",
      description: "Share a photo, description and your location.",
      icon: Camera,
    },
    {
      number: "02",
      title: "Location Identified",
      description: "The system identifies the relevant local area.",
      icon: MapPin,
    },
    {
      number: "03",
      title: "Authority Routed",
      description: "The complaint reaches the relevant authority.",
      icon: Building2,
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
      description: "The team works and uploads resolution evidence.",
      icon: FileCheck2,
    },
    {
      number: "06",
      title: "Verified",
      description: "The authority verifies the work and resolves it.",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
    

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            
            {/* Left */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                Cleaner Communities • Greener Tomorrow
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Every Local Problem
                <span className="block text-emerald-600">
                  Deserves a Response.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                EcoCitizen connects citizens with local governance to report
                environmental and civic problems, track progress and build
                cleaner communities.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/citizen/report"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
                >
                  Report an Issue
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/explore"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
                >
                  <Map size={18} />
                  Explore Issues
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle size={17} className="text-emerald-600" />
                  Photo-based reporting
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle size={17} className="text-emerald-600" />
                  GPS-based location
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle size={17} className="text-emerald-600" />
                  Transparent tracking
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-2xl shadow-emerald-900/10">
                
                <div className="rounded-2xl bg-slate-900 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">
                        EcoCitizen Network
                      </p>
                      <h3 className="mt-1 text-xl font-semibold">
                        Local Issues
                      </h3>
                    </div>

                    <div className="rounded-xl bg-emerald-500/20 p-3">
                      <MapPin className="text-emerald-400" />
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-xs text-slate-400">Reported</p>
                      <p className="mt-1 text-2xl font-bold">Issues</p>
                    </div>

                    <div className="rounded-xl bg-emerald-500 p-4">
                      <p className="text-xs text-emerald-100">Status</p>
                      <p className="mt-1 text-2xl font-bold">Tracked</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                      <span className="h-3 w-3 rounded-full bg-red-400"></span>
                      <span className="text-sm">Pending issue</span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                      <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                      <span className="text-sm">Work in progress</span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                      <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
                      <span className="text-sm">Verified resolution</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-100 p-3">
                    <MapPin className="text-emerald-600" size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Location-based
                    </p>
                    <p className="font-semibold text-slate-800">
                      Local routing
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= REPORT CATEGORIES ================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="max-w-2xl">
            <p className="font-semibold text-emerald-600">
              WHAT CAN YOU REPORT?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Problems around you deserve attention.
            </h2>

            <p className="mt-4 text-slate-600">
              Report common environmental and civic issues from one simple
              platform.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {issueCategories.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to="/citizen/report"
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5"
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-xl bg-emerald-50 p-3">
                      <Icon className="text-emerald-600" size={22} />
                    </div>

                    <ArrowRight
                      size={18}
                      className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-600"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CORE IDEA ================= */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="grid items-center gap-12 lg:grid-cols-2">
            
            <div>
              <p className="font-semibold text-emerald-600">
                HOW ECOCITIZEN WORKS
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                You report the problem.
                <span className="block text-emerald-600">
                  We help route it.
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Citizens do not need to know which department is responsible.
                EcoCitizen uses the reported location, issue category and
                configured local-government routing information to help send
                the complaint to the relevant authority.
              </p>

              <Link
                to="/how-it-works"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Learn how it works
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                
                <div className="flex items-center gap-4 rounded-2xl bg-emerald-50 p-5">
                  <div className="rounded-xl bg-white p-3 shadow-sm">
                    <Camera className="text-emerald-600" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase text-emerald-600">
                      Citizen
                    </p>
                    <p className="font-semibold text-slate-900">
                      Photo + Description + Location
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="rotate-90 text-emerald-500" />
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-xs font-semibold uppercase text-slate-400">
                    EcoCitizen
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    Location + Category + Routing Rules
                  </p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="rotate-90 text-emerald-500" />
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-900 p-4 text-center text-white">
                    <Building2 className="mx-auto mb-2" size={20} />
                    <p className="text-sm">Authority</p>
                  </div>

                  <div className="rounded-xl bg-slate-100 p-4 text-center">
                    <Users className="mx-auto mb-2 text-emerald-600" size={20} />
                    <p className="text-sm font-medium">Department</p>
                  </div>

                  <div className="rounded-xl bg-emerald-600 p-4 text-center text-white">
                    <CheckCircle className="mx-auto mb-2" size={20} />
                    <p className="text-sm">Field Team</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= URBAN / RURAL ================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center">
            <p className="font-semibold text-emerald-600">
              BUILT FOR LOCAL GOVERNANCE
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Different local structures. One platform.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              EcoCitizen can support both urban and rural administrative
              structures instead of assuming every area follows the same
              hierarchy.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            
            {/* Urban */}
            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-50 p-3">
                  <Building2 className="text-emerald-600" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">Urban Areas</h3>
                  <p className="text-sm text-slate-500">
                    Cities and municipal bodies
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-2 text-sm">
                {[
                  "State",
                  "District",
                  "City",
                  "Municipal Body",
                  "Ward",
                  "Department",
                  "Field Team",
                ].map((item, index) => (
                  <React.Fragment key={item}>
                    <span className="rounded-lg bg-slate-100 px-3 py-2 font-medium text-slate-700">
                      {item}
                    </span>

                    {index < 6 && (
                      <ArrowRight
                        size={15}
                        className="text-emerald-500"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Rural */}
            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-50 p-3">
                  <MapPin className="text-emerald-600" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">Rural Areas</h3>
                  <p className="text-sm text-slate-500">
                    Panchayat-based local governance
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-2 text-sm">
                {[
                  "State",
                  "District",
                  "Block",
                  "Gram Panchayat",
                  "Village",
                  "Department",
                  "Field Team",
                ].map((item, index) => (
                  <React.Fragment key={item}>
                    <span className="rounded-lg bg-slate-100 px-3 py-2 font-medium text-slate-700">
                      {item}
                    </span>

                    {index < 6 && (
                      <ArrowRight
                        size={15}
                        className="text-emerald-500"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= COMPLAINT JOURNEY ================= */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="max-w-2xl">
            <p className="font-semibold text-emerald-600">
              COMPLAINT JOURNEY
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              From report to verified resolution.
            </h2>

            <p className="mt-4 text-slate-600">
              Every complaint has a traceable journey instead of disappearing
              after submission.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {complaintSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-emerald-600">
                      {step.number}
                    </span>

                    <div className="rounded-xl bg-emerald-50 p-3">
                      <Icon className="text-emerald-600" size={21} />
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= INDIA SCALE ================= */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="grid items-center gap-12 lg:grid-cols-2">
            
            <div>
              <p className="font-semibold text-emerald-400">
                INDIA-SCALE VISION
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Local reports can create a bigger picture.
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                EcoCitizen is designed around a scalable model where local
                government bodies can be onboarded with their administrative
                areas, departments and responsible teams.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                Individual complaints remain connected to their local context,
                while aggregated data can help identify recurring problems and
                environmental priority areas.
              </p>

              <Link
                to="/explore"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-400"
              >
                Explore the issue map
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                
                <div className="rounded-2xl bg-white/10 p-6">
                  <MapPin className="text-emerald-400" />
                  <p className="mt-5 text-lg font-semibold">
                    Local Context
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Complaints are connected to their geographic and
                    administrative area.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6">
                  <Users className="text-emerald-400" />
                  <p className="mt-5 text-lg font-semibold">
                    Community Participation
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Citizens become active participants in local governance.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6">
                  <Clock3 className="text-emerald-400" />
                  <p className="mt-5 text-lg font-semibold">
                    Transparent Tracking
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Citizens can follow the progress of their reports.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6">
                  <ShieldCheck className="text-emerald-400" />
                  <p className="mt-5 text-lg font-semibold">
                    Evidence-Based
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Resolution evidence supports verification of completed
                    work.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TRACK ================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
            <FileCheck2 className="text-emerald-600" />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
            Already reported a problem?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Use your complaint ID to track the progress of your report and
            see its current status.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Enter complaint ID"
              className="flex-1 rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />

            <Link
              to="/track"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-800"
            >
              Track Report
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-emerald-600 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            See a problem? Help make it visible.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-emerald-50">
            One report can help your local authority understand what needs
            attention.
          </p>

          <Link
            to="/citizen/report"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-emerald-700 shadow-lg transition hover:bg-emerald-50"
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