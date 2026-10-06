import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight, Leaf } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("citizen");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "citizen") {
  navigate("/citizen/dashboard");
} else if (role === "officer") {
  navigate("/officer/dashboard");
} else if (role === "worker") {
  navigate("/worker/dashboard");
}
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl grid md:grid-cols-2">

        {/* Left Section */}
        <div className="hidden md:flex relative overflow-hidden bg-emerald-700 p-10 text-white">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-600 opacity-50" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-green-500 opacity-30" />

          <div className="relative z-10 flex flex-col justify-between">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                <Leaf size={25} />
              </div>

              <div>
                <h1 className="text-xl font-bold">EcoCitizen</h1>
                <p className="text-xs text-emerald-100">
                  Better communities, together
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="my-auto max-w-md">
              <p className="mb-3 text-sm font-medium text-emerald-100">
                COMMUNITY • ENVIRONMENT • GOVERNANCE
              </p>

              <h2 className="text-4xl font-bold leading-tight">
                Make your community better, one report at a time.
              </h2>

              <p className="mt-5 text-sm leading-6 text-emerald-50">
                Report local environmental and civic issues, track their
                progress, and help create cleaner and better communities.
              </p>
            </div>

            <p className="text-sm text-emerald-100">
              Your voice can help create real change.
            </p>
          </div>
        </div>

        {/* Right Section */}
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
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold text-emerald-600">
              WELCOME BACK
            </p>

            <h2 className="text-3xl font-bold text-slate-900">
              Sign in to EcoCitizen
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Access your complaints, updates and community activities.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role Selection */}
<div>
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Login as
  </label>

  <div className="grid grid-cols-3 gap-2">
    <button
      type="button"
      onClick={() => setRole("citizen")}
      className={`rounded-xl border px-3 py-3 text-sm font-semibold ${
        role === "citizen"
          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
          : "border-slate-200 text-slate-600"
      }`}
    >
      Citizen
    </button>

    <button
      type="button"
      onClick={() => setRole("officer")}
      className={`rounded-xl border px-3 py-3 text-sm font-semibold ${
        role === "officer"
          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
          : "border-slate-200 text-slate-600"
      }`}
    >
      Officer
    </button>

    <button
      type="button"
      onClick={() => setRole("worker")}
      className={`rounded-xl border px-3 py-3 text-sm font-semibold ${
        role === "worker"
          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
          : "border-slate-200 text-slate-600"
      }`}
    >
      Worker
    </button>
  </div>
</div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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

            {/* Remember */}
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 accent-emerald-600"
              />
              Remember me
            </label>

            {/* Login Button */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700 hover:shadow-xl"
            >
              Sign in
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Register */}
          <div className="mt-8 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Create an account
            </Link>
          </div>

          {/* Demo note */}
          <div className="mt-6 rounded-xl bg-emerald-50 p-3 text-center text-xs text-emerald-700">
            Demo mode: backend authentication will be connected later.
          </div>
        </div>
      </div>
    </div>
  );
}