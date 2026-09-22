import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Map", path: "/map" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-lg">
            🌱
          </div>

          <span className="text-xl font-bold text-slate-900">
            EcoCitizen
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                location.pathname === link.path
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-emerald-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="hidden items-center gap-3 md:flex">

          <Link
            to="/login"
            className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600"
          >
            Login
          </Link>

          <Link
            to="/citizen/report"
            className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Report an Issue
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">

          <div className="flex flex-col gap-1">

            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              >
                {link.name}
              </Link>
            ))}

            <div className="my-2 border-t border-slate-100" />

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700"
            >
              Login
            </Link>

            <Link
              to="/citizen/report"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Report an Issue
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;