import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  ArrowRight,
  Leaf,
  User,
  ShieldCheck,
  HardHat,
} from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("citizen");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend baad mein connect hoga.
    // Abhi registration ke baad Login page par ja rahe hain.
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl grid md:grid-cols-2">

        {/* ================= LEFT SECTION ================= */}
        <div className="hidden md:flex relative overflow-hidden bg-emerald-700 p-10 text-white">
          {/* Background shapes */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-600 opacity-50" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-green-500 opacity-30" />

          <div className="relative z-10 flex flex-col justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                <Leaf size={25} />
              </div>

              <div>
                <h1 className="text-xl font-bold">
                  EcoCitizen
                </h1>

                <p className="text-xs text-emerald-100">
                  Better communities, together
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="my-auto max-w-md">
              <p className="mb-3 text-sm font-medium text-emerald-100">
                COMMUNITY • ENVIRONMENT • GOVERNANCE
              </p>

              <h2 className="text-4xl font-bold leading-tight">
                Join EcoCitizen and help build cleaner communities.
              </h2>

              <p className="mt-5 text-sm leading-6 text-emerald-50">
                Report local issues, stay informed, and work together
                with your community to improve the places around you.
              </p>
            </div>

            <p className="text-sm text-emerald-100">
              Together, small actions can create meaningful change.
            </p>
          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="p-7 sm:p-10 md:p-12">

          {/* Mobile Logo */}
          <div className="mb-8 flex items-center gap-3 md:hidden">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <Leaf size={24} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                EcoCitizen
              </h1>

              <p className="text-xs text-slate-500">
                Better communities, together
              </p>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-7">
            <p className="mb-2 text-sm font-semibold text-emerald-600">
              GET STARTED
            </p>

            <h2 className="text-3xl font-bold text-slate-900">
              Create your account
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Join EcoCitizen and become part of your local community.
            </p>
          </div>

          {/* ================= FORM ================= */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                />
              </div>
            </div>

            {/* Email / Mobile */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email or mobile number
              </label>

              <input
                type="text"
                placeholder="e.g. 9876543210 or name@example.in"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
              />

              <p className="mt-1.5 text-xs text-slate-400">
                Use a valid email address or +91 mobile number.
              </p>
            </div>

            {/* ================= ROLE ================= */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Choose account type
              </label>

              <div className="grid grid-cols-3 gap-2">

                {/* Citizen */}
                <button
                  type="button"
                  onClick={() => setRole("citizen")}
                  className={`rounded-xl border p-3 text-center transition ${
                    role === "citizen"
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700 ring-2 ring-emerald-100"
                      : "border-slate-200 bg-slate-50 text-slate-500 hover:border-emerald-300"
                  }`}
                >
                  <User className="mx-auto mb-2" size={21} />

                  <span className="text-xs font-semibold">
                    Citizen
                  </span>
                </button>

                {/* Officer */}
                <button
                  type="button"
                  onClick={() => setRole("officer")}
                  className={`rounded-xl border p-3 text-center transition ${
                    role === "officer"
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700 ring-2 ring-emerald-100"
                      : "border-slate-200 bg-slate-50 text-slate-500 hover:border-emerald-300"
                  }`}
                >
                  <ShieldCheck className="mx-auto mb-2" size={21} />

                  <span className="text-xs font-semibold">
                    Officer
                  </span>
                </button>

                {/* Field Worker */}
                <button
                  type="button"
                  onClick={() => setRole("worker")}
                  className={`rounded-xl border p-3 text-center transition ${
                    role === "worker"
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700 ring-2 ring-emerald-100"
                      : "border-slate-200 bg-slate-50 text-slate-500 hover:border-emerald-300"
                  }`}
                >
                  <HardHat className="mx-auto mb-2" size={21} />

                  <span className="text-xs font-semibold">
                    Field Worker
                  </span>
                </button>

              </div>

              {/* Role information */}
              {role === "citizen" && (
                <p className="mt-2 text-xs text-slate-400">
                  Citizens can report and track local issues.
                </p>
              )}

              {role === "officer" && (
                <p className="mt-2 text-xs text-slate-400">
                  Officer accounts require official verification.
                </p>
              )}

              {role === "worker" && (
                <p className="mt-2 text-xs text-slate-400">
                  Field Worker accounts require official verification.
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-12 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Confirm password
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-12 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* Create Account */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700 hover:shadow-xl"
            >
              Create Account

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Login */}
          <div className="mt-7 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Sign in
            </Link>
          </div>

          {/* Verification Note */}
          <div className="mt-5 rounded-xl bg-emerald-50 p-3 text-center text-xs leading-5 text-emerald-700">
            🔐 Officer and Field Worker accounts will require
            official verification when backend authentication is connected.
          </div>

        </div>
      </div>
    </div>
  );
}