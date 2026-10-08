import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import CitizenLayout from "./pages/citizen/CitizenLayout";

// Public pages
import Home from "./pages/public/Home";
import ExploreIssues from "./pages/public/ExploreIssues";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";

// Citizen pages
import ReportProblem from "./pages/citizen/ReportProblem";
import Dashboard from "./pages/citizen/Dashboard";
import MyComplaints from "./pages/citizen/MyComplaints";
import ExploreMap from "./pages/citizen/ExploreMap";
import Notifications from "./pages/citizen/Notifications";
import Profile from "./pages/citizen/Profile";
import ComplaintSubmitted from "./pages/citizen/ComplaintSubmitted";
import TrackComplaint from "./pages/citizen/TrackComplaint";

// Officer pages
import OfficerDashboard from "./pages/officer/Dashboard";
import Complaints from "./pages/officer/Complaints";
import ComplaintDetails from "./pages/officer/ComplaintDetails";
import AssignTeam from "./pages/officer/AssignTeam";
import Analytics from "./pages/officer/Analytics";
import Map from "./pages/officer/Map";
import OverdueComplaints from "./pages/officer/OverdueComplaints";

// Worker pages
import WorkerDashboard from "./pages/worker/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        {/* Explore Issues */}
        <Route
          path="/explore"
          element={
            <MainLayout>
              <ExploreIssues />
            </MainLayout>
          }
        />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Register */}
        <Route path="/register" element={<Register />} />

        {/* ================= CITIZEN ================= */}

        <Route
          path="/citizen/dashboard"
          element={
            <CitizenLayout>
              <Dashboard />
            </CitizenLayout>
          }
        />

        <Route
          path="/citizen/report"
          element={
            <CitizenLayout>
              <ReportProblem />
            </CitizenLayout>
          }
        />

        <Route
          path="/citizen/complaints"
          element={
            <CitizenLayout>
              <MyComplaints />
            </CitizenLayout>
          }
        />

        <Route
          path="/citizen/explore-map"
          element={
            <CitizenLayout>
              <ExploreMap />
            </CitizenLayout>
          }
        />

        <Route
          path="/citizen/notifications"
          element={
            <CitizenLayout>
              <Notifications />
            </CitizenLayout>
          }
        />

        <Route
          path="/citizen/profile"
          element={
            <CitizenLayout>
              <Profile />
            </CitizenLayout>
          }
        />

        <Route
          path="/citizen/complaint-submitted"
          element={
            <CitizenLayout>
              <ComplaintSubmitted />
            </CitizenLayout>
          }
        />

        <Route
          path="/citizen/track"
          element={
            <CitizenLayout>
              <TrackComplaint />
            </CitizenLayout>
          }
        />

        {/* ================= OFFICER ================= */}

        <Route
          path="/officer/dashboard"
          element={<OfficerDashboard />}
        />

        <Route
          path="/officer/complaints"
          element={<Complaints />}
        />

        <Route
          path="/officer/complaints/:id"
          element={<ComplaintDetails />}
        />

        <Route
          path="/officer/assign-team"
          element={<AssignTeam />}
        />

        <Route
          path="/officer/analytics"
          element={<Analytics />}
        />

        <Route
          path="/officer/map"
          element={<Map />}
        />

        <Route
          path="/officer/notifications"
          element={<Notifications />}
        />

        <Route
          path="/officer/overdue"
          element={<OverdueComplaints />}
        />

        {/* ================= WORKER ================= */}

        <Route
          path="/worker/dashboard"
          element={<WorkerDashboard />}
        />

        {/* Unknown URL */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;