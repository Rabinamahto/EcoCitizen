import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  ChevronDown,
  Filter,
  Leaf,
  MapPin,
  Search,
} from "lucide-react";

const issues = [
  {
    id: "EC-1024",
    category: "Waste",
    title: "Garbage accumulation near public road",
    location: "Pune, Maharashtra",
    date: "10 Sep 2026",
    status: "Pending",
    description:
      "Waste has been accumulating near the roadside and needs attention.",
  },
  {
    id: "EC-1021",
    category: "Water",
    title: "Water leakage from public pipeline",
    location: "Pune, Maharashtra",
    date: "9 Sep 2026",
    status: "In Progress",
    description:
      "Continuous water leakage has been reported from a public pipeline.",
  },
  {
    id: "EC-1018",
    category: "Sanitation",
    title: "Public area requires cleaning",
    location: "Purnea, Bihar",
    date: "8 Sep 2026",
    status: "Resolved",
    description:
      "A public area was reported for sanitation and cleanliness issues.",
  },
  {
    id: "EC-1015",
    category: "Pollution",
    title: "Smoke and air pollution concern",
    location: "Ahmedabad, Gujarat",
    date: "7 Sep 2026",
    status: "In Progress",
    description:
      "Residents reported excessive smoke and pollution in the area.",
  },
  {
    id: "EC-1011",
    category: "Road",
    title: "Damaged road surface",
    location: "Nagpur, Maharashtra",
    date: "6 Sep 2026",
    status: "Pending",
    description:
      "A damaged section of road has been reported by the community.",
  },
  {
    id: "EC-1008",
    category: "Public Space",
    title: "Damaged public park area",
    location: "Bengaluru, Karnataka",
    date: "5 Sep 2026",
    status: "Resolved",
    description:
      "Damage was reported in a public recreational area.",
  },
];

const categories = [
  "All",
  "Waste",
  "Water",
  "Sanitation",
  "Pollution",
  "Road",
  "Public Space",
];

const statusColors = {
  Pending: "border-red-400/20 bg-red-400/10 text-red-300",
  "In Progress":
    "border-yellow-400/20 bg-yellow-400/10 text-yellow-300",
  Resolved:
    "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
};

function Explore() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [search, setSearch] = useState("");

  const filteredIssues = issues.filter((issue) => {
    const categoryMatch =
      selectedCategory === "All" ||
      issue.category === selectedCategory;

    const statusMatch =
      selectedStatus === "All" ||
      issue.status === selectedStatus;

    const searchMatch =
      issue.title.toLowerCase().includes(search.toLowerCase()) ||
      issue.location.toLowerCase().includes(search.toLowerCase()) ||
      issue.category.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && statusMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-[#050914] text-white">

      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050914]/90 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link to="/" className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400">
              <Leaf className="h-5 w-5 text-[#061018]" />
            </div>

            <div>
              <p className="text-lg font-bold">
                EcoCitizen
              </p>

              <p className="text-[9px] uppercase tracking-[0.2em] text-emerald-400">
                Local Governance
              </p>
            </div>

          </Link>


          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

        </div>

      </header>


      {/* ================= PAGE HEADER ================= */}

      <main>

        <section className="border-b border-white/10">

          <div className="mx-auto max-w-7xl px-6 py-12">

            <div className="max-w-3xl">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Community Issues
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Explore reported issues
              </h1>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Explore environmental and civic issues reported by
                communities and follow their current status.
              </p>

            </div>

          </div>

        </section>


        {/* ================= SEARCH + FILTERS ================= */}

        <section className="border-b border-white/10 bg-[#080f1d]">

          <div className="mx-auto max-w-7xl px-6 py-6">

            <div className="flex flex-col gap-4 lg:flex-row">

              {/* SEARCH */}

              <div className="relative flex-1">

                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search issues, categories or locations..."
                  className="w-full rounded-xl border border-white/10 bg-[#0b1324] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400/40"
                />

              </div>


              {/* CATEGORY */}

              <div className="relative">

                <select
                  value={selectedCategory}
                  onChange={(e) =>
                    setSelectedCategory(e.target.value)
                  }
                  className="w-full appearance-none rounded-xl border border-white/10 bg-[#0b1324] px-4 py-3 pr-10 text-sm text-slate-300 outline-none focus:border-emerald-400/40 lg:w-48"
                >

                  {categories.map((category) => (
                    <option
                      key={category}
                      value={category}
                      className="bg-[#0b1324]"
                    >
                      {category}
                    </option>
                  ))}

                </select>

                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

              </div>


              {/* STATUS */}

              <div className="relative">

                <select
                  value={selectedStatus}
                  onChange={(e) =>
                    setSelectedStatus(e.target.value)
                  }
                  className="w-full appearance-none rounded-xl border border-white/10 bg-[#0b1324] px-4 py-3 pr-10 text-sm text-slate-300 outline-none focus:border-emerald-400/40 lg:w-48"
                >

                  <option value="All" className="bg-[#0b1324]">
                    All Status
                  </option>

                  <option
                    value="Pending"
                    className="bg-[#0b1324]"
                  >
                    Pending
                  </option>

                  <option
                    value="In Progress"
                    className="bg-[#0b1324]"
                  >
                    In Progress
                  </option>

                  <option
                    value="Resolved"
                    className="bg-[#0b1324]"
                  >
                    Resolved
                  </option>

                </select>

                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

              </div>


              {/* FILTER BUTTON */}

              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#0b1324] px-5 py-3 text-sm text-slate-300 transition hover:bg-white/5">

                <Filter className="h-4 w-4" />

                Filters

              </button>

            </div>

          </div>

        </section>


        {/* ================= MAIN CONTENT ================= */}

        <section>

          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[1.2fr_0.8fr]">


            {/* ================= MAP ================= */}

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1324]">

              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                <div>

                  <p className="font-semibold">
                    Issue Map
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Demonstration data
                  </p>

                </div>

                <div className="flex items-center gap-4 text-[10px] text-slate-500">

                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    Pending
                  </span>

                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    Progress
                  </span>

                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Resolved
                  </span>

                </div>

              </div>


              {/* MAP AREA */}

              <div className="relative h-[520px] overflow-hidden bg-[#070d1b]">

                {/* Grid */}

                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />


                {/* Abstract map */}

                <div className="absolute left-1/2 top-1/2 h-[330px] w-[220px] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] rounded-[48%_52%_48%_45%] border border-emerald-400/20 bg-emerald-400/5" />

                {/* Markers */}

                <div className="absolute left-[32%] top-[25%]">

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-400/20 ring-4 ring-red-400/5">

                    <span className="h-3 w-3 rounded-full bg-red-400" />

                  </div>

                </div>


                <div className="absolute left-[53%] top-[35%]">

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400/20 ring-4 ring-yellow-400/5">

                    <span className="h-3 w-3 rounded-full bg-yellow-400" />

                  </div>

                </div>


                <div className="absolute left-[47%] top-[51%]">

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/20 ring-4 ring-emerald-400/5">

                    <span className="h-3 w-3 rounded-full bg-emerald-400" />

                  </div>

                </div>


                <div className="absolute left-[62%] top-[64%]">

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-400/20 ring-4 ring-red-400/5">

                    <span className="h-3 w-3 rounded-full bg-red-400" />

                  </div>

                </div>


                <div className="absolute left-[39%] top-[68%]">

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/20 ring-4 ring-emerald-400/5">

                    <span className="h-3 w-3 rounded-full bg-emerald-400" />

                  </div>

                </div>


                {/* Map info */}

                <div className="absolute left-5 top-5 rounded-xl border border-white/10 bg-[#10192b]/90 px-4 py-3 backdrop-blur">

                  <div className="flex items-center gap-2">

                    <MapPin className="h-4 w-4 text-emerald-400" />

                    <span className="text-xs font-medium">
                      India Issue Network
                    </span>

                  </div>

                  <p className="mt-1 text-[10px] text-slate-500">
                    Public demonstration view
                  </p>

                </div>


                {/* Map note */}

                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-[#10192b]/90 px-4 py-3 backdrop-blur">

                  <p className="text-xs text-slate-400">
                    Public map shows limited issue information.
                    Personal information is not displayed.
                  </p>

                </div>

              </div>

            </div>


            {/* ================= ISSUE LIST ================= */}

            <div>

              <div className="mb-5 flex items-center justify-between">

                <div>

                  <p className="font-semibold">
                    Reported Issues
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {filteredIssues.length} issues found
                  </p>

                </div>

              </div>


              <div className="space-y-4">

                {filteredIssues.map((issue) => (

                  <div
                    key={issue.id}
                    className="rounded-2xl border border-white/10 bg-[#0b1324] p-5 transition hover:border-emerald-400/20"
                  >

                    {/* TOP */}

                    <div className="flex items-start justify-between gap-3">

                      <div>

                        <p className="text-[10px] uppercase tracking-wider text-slate-600">
                          {issue.id}
                        </p>

                        <h3 className="mt-1 font-semibold leading-6">
                          {issue.title}
                        </h3>

                      </div>


                      <span
                        className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium ${statusColors[issue.status]}`}
                      >
                        {issue.status}
                      </span>

                    </div>


                    {/* CATEGORY */}

                    <div className="mt-4 flex items-center gap-2">

                      <span className="rounded-lg bg-emerald-400/10 px-2.5 py-1 text-[10px] text-emerald-300">
                        {issue.category}
                      </span>

                    </div>


                    {/* DESCRIPTION */}

                    <p className="mt-3 text-xs leading-5 text-slate-500">
                      {issue.description}
                    </p>


                    {/* META */}

                    <div className="mt-4 flex flex-wrap gap-4 border-t border-white/10 pt-4 text-[10px] text-slate-500">

                      <span className="flex items-center gap-1.5">

                        <MapPin className="h-3.5 w-3.5" />

                        {issue.location}

                      </span>

                      <span className="flex items-center gap-1.5">

                        <CalendarDays className="h-3.5 w-3.5" />

                        {issue.date}

                      </span>

                    </div>

                  </div>

                ))}


                {/* NO RESULTS */}

                {filteredIssues.length === 0 && (

                  <div className="rounded-2xl border border-dashed border-white/10 bg-[#0b1324] px-6 py-12 text-center">

                    <Search className="mx-auto h-8 w-8 text-slate-600" />

                    <p className="mt-4 font-medium">
                      No issues found
                    </p>

                    <p className="mt-2 text-xs text-slate-500">
                      Try changing your search or filters.
                    </p>

                  </div>

                )}

              </div>

            </div>

          </div>

        </section>


        {/* ================= PRIVACY NOTE ================= */}

        <section className="border-t border-white/10 bg-[#080f1d]">

          <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-5">

            <ShieldIcon />

            <p className="text-xs leading-5 text-slate-500">
              Explore is a public view. Citizen contact details,
              personal information and private complaint data are
              never shown here.
            </p>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 bg-[#030711]">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <p className="font-semibold">
              EcoCitizen
            </p>

            <p className="mt-1 text-[10px] text-slate-600">
              Community-Centric Local Environmental Governance
            </p>

          </div>

          <p className="text-xs text-slate-600">
            EcoCoders • Code4Nature 2026
          </p>

        </div>

      </footer>

    </div>
  );
}


/* Small reusable icon */

function ShieldIcon() {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
      <Leaf className="h-4 w-4" />
    </div>
  );
}

export default Explore;