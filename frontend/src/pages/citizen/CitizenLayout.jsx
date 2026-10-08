import { useNavigate } from "react-router-dom";

function CitizenLayout({ children }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex">

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 z-40 w-64 flex-col bg-white border-r border-slate-200 shadow-sm">

        <div className="h-20 px-5 flex items-center border-b border-slate-100">
          <button
            onClick={() => navigate("/citizen/dashboard")}
            className="flex items-center gap-3 text-left"
          >
            <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="w-7 h-7 flex items-center justify-center text-emerald-600 font-bold">
                EC
              </div>
            </div>

            <div>
              <div className="font-black text-xl text-slate-900 tracking-tight">
                Eco<span className="text-emerald-600">Citizen</span>
              </div>

              <div className="text-[9px] uppercase font-bold tracking-widest text-emerald-700">
                Citizen Portal
              </div>
            </div>
          </button>
        </div>

        <div className="flex-1 px-3 py-5 overflow-y-auto">

          <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Main Menu
          </p>

          <nav className="space-y-1">

            <button
              onClick={() => navigate("/citizen/dashboard")}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              <span>🏠</span>
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => navigate("/citizen/report")}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              <span>➕</span>
              <span>Report Problem</span>
            </button>

            <button
              onClick={() => navigate("/citizen/complaints")}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              <span>📄</span>
              <span>My Complaints</span>
            </button>

            <button
              onClick={() => navigate("/explore-map")}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              <span>🗺️</span>
              <span>Explore Map</span>
            </button>

            <button
              onClick={() => navigate("/citizen/track")}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              <span>🔍</span>
              <span>Track Complaint</span>
            </button>

          </nav>

          <div className="my-5 border-t border-slate-100"></div>

          <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Account
          </p>

          <nav className="space-y-1">

            <button
              onClick={() => navigate("/citizen/notifications")}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              <span>🔔</span>
              <span>Notifications</span>
            </button>

            <button
              onClick={() => navigate("/citizen/profile")}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              <span>👤</span>
              <span>Profile</span>
            </button>

          </nav>
        </div>

        <div className="p-3 border-t border-slate-100">

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center">
                AS
              </div>

              <div className="min-w-0">
                <p className="text-sm font-bold text-slate-900 truncate">
                  Aniket Sharma
                </p>

                <p className="text-[10px] text-slate-500">
                  Ward 12 • Citizen
                </p>
              </div>

            </div>

            <button
              onClick={() => navigate("/citizen/profile")}
              className="mt-3 w-full py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:border-emerald-300 hover:text-emerald-700 transition-colors"
            >
              View Profile
            </button>

          </div>

        </div>

      </aside>

      {/* Page Content */}
      <main className="flex-1 md:ml-64 min-w-0">
        {children}
      </main>

    </div>
  );
}

export default CitizenLayout;