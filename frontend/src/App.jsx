import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import CitizenLayout from "./pages/citizen/CitizenLayout";

import Home from "./pages/public/Home";
import ExploreIssues from "./pages/public/ExploreIssues";

import ReportProblem from "./pages/citizen/ReportProblem";
import Dashboard from "./pages/citizen/Dashboard";
import MyComplaints from "./pages/citizen/MyComplaints";
import ExploreMap from "./pages/citizen/ExploreMap";
import Notifications from "./pages/citizen/Notifications";
import Profile from "./pages/citizen/Profile";
import ComplaintSubmitted from "./pages/citizen/ComplaintSubmitted";
import TrackComplaint from "./pages/citizen/TrackComplaint";

import Login from "./pages/public/Login";
import OfficerDashboard from "./pages/officer/Dashboard";
import WorkerDashboard from "./pages/worker/Dashboard";

import Register from "./pages/public/Register";

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
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Register */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Citizen Dashboard */}
        <Route
          path="/citizen/dashboard"
          element={
            <CitizenLayout>
              <Dashboard />
            </CitizenLayout>
          }
        />

        {/* Report Problem */}
        <Route
          path="/citizen/report"
          element={
            <CitizenLayout>
              <ReportProblem />
            </CitizenLayout>
          }
        />

        {/* My Complaints */}
        <Route
          path="/citizen/complaints"
          element={
            <CitizenLayout>
              <MyComplaints />
            </CitizenLayout>
          }
        />

        {/* Explore Map */}
        <Route
          path="/citizen/explore-map"
          element={
            <CitizenLayout>
              <ExploreMap />
            </CitizenLayout>
          }
        />

        {/* Notifications */}
        <Route
          path="/citizen/notifications"
          element={
            <CitizenLayout>
              <Notifications />
            </CitizenLayout>
          }
        />

        {/* Profile */}
        <Route
          path="/citizen/profile"
          element={
            <CitizenLayout>
              <Profile />
            </CitizenLayout>
          }
        />

        {/* Complaint Submitted */}
        <Route
          path="/citizen/complaint-submitted"
          element={
            <CitizenLayout>
              <ComplaintSubmitted />
            </CitizenLayout>
          }
        />

        {/* Track Complaint */}
        <Route
          path="/citizen/track"
          element={
            <CitizenLayout>
              <TrackComplaint />
            </CitizenLayout>
          }
        />

        {/* Unknown URL */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
        {/* Officer Dashboard */}
<Route
  path="/officer/dashboard"
  element={<OfficerDashboard />}
/>
{/* Worker Dashboard */}
<Route
  path="/worker/dashboard"
  element={<WorkerDashboard />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;