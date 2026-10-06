import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import CitizenLayout from "./pages/citizen/CitizenLayout";

// Public pages
import Home from "./pages/public/Home";
import ExploreIssues from "./pages/public/ExploreIssues";

<<<<<<< HEAD
// Citizen pages
import ReportProblem from "./pages/citizen/ReportProblem";
import CitizenDashboard from "./pages/citizen/Dashboard";

// Worker pages
import WorkerDashboard from "./pages/worker/Dashboard";
import MyTasks from "./pages/worker/MyTasks";
import TaskDetails from "./pages/worker/TaskDetails";
import TaskLocation from "./pages/worker/TaskLocation";
import WorkProgress from "./pages/worker/WorkProgress";
import UploadEvidence from "./pages/worker/UploadEvidence";
import CompletedTasks from "./pages/worker/CompletedTasks";
import Notifications from "./pages/worker/Notifications";
import Profile from "./pages/worker/Profile";

=======
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

>>>>>>> 2ddfb5a7340d2702255b0c4a628c4a7cfc7f3c97
function App() {
  return (
    <BrowserRouter>
      <Routes>

<<<<<<< HEAD
        {/* Public Home */}
=======
        {/* Home */}
>>>>>>> 2ddfb5a7340d2702255b0c4a628c4a7cfc7f3c97
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
<<<<<<< HEAD
          element={<CitizenDashboard />}
        />

        {/* ================= Worker ================= */}

        <Route
          path="/worker/dashboard"
          element={<WorkerDashboard />}
        />

        <Route
          path="/worker/tasks"
          element={<MyTasks />}
        />

        <Route
          path="/worker/tasks/:id"
          element={<TaskDetails />}
        />

        <Route
          path="/worker/location/:id"
          element={<TaskLocation />}
        />

        <Route
          path="/worker/progress/:id"
          element={<WorkProgress />}
        />

        <Route
          path="/worker/upload-evidence/:id"
          element={<UploadEvidence />}
        />

        <Route
          path="/worker/completed-tasks"
          element={<CompletedTasks />}
        />

        <Route
          path="/worker/notifications"
          element={<Notifications />}
        />

        <Route
          path="/worker/profile"
          element={<Profile />}
=======
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
>>>>>>> 2ddfb5a7340d2702255b0c4a628c4a7cfc7f3c97
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