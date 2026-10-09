import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import CitizenLayout from "./pages/citizen/CitizenLayout";

// ================= Public Pages =================
import Home from "./pages/public/Home";
import ExploreIssues from "./pages/public/ExploreIssues";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";

// ================= Citizen Pages =================
import ReportProblem from "./pages/citizen/ReportProblem";
import Dashboard from "./pages/citizen/Dashboard";
import MyComplaints from "./pages/citizen/MyComplaints";
import ExploreMap from "./pages/citizen/ExploreMap";
import Notifications from "./pages/citizen/Notifications";
import Profile from "./pages/citizen/Profile";
import ComplaintSubmitted from "./pages/citizen/ComplaintSubmitted";
import TrackComplaint from "./pages/citizen/TrackComplaint";

// ================= Officer Pages =================
import OfficerDashboard from "./pages/officer/Dashboard";

// ================= Worker Pages =================
import WorkerDashboard from "./pages/worker/Dashboard";
import MyTasks from "./pages/worker/MyTasks";
import TaskDetails from "./pages/worker/TaskDetails";
import TaskLocation from "./pages/worker/TaskLocation";
import WorkProgress from "./pages/worker/WorkProgress";
import UploadEvidence from "./pages/worker/UploadEvidence";
import CompletedTasks from "./pages/worker/CompletedTasks";
import WorkerNotifications from "./pages/worker/Notifications";
import WorkerProfile from "./pages/worker/Profile";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ==================================================
            PUBLIC
        ================================================== */}

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


        {/* ==================================================
            CITIZEN
        ================================================== */}

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

        {/* Citizen Notifications */}
        <Route
          path="/citizen/notifications"
          element={
            <CitizenLayout>
              <Notifications />
            </CitizenLayout>
          }
        />

        {/* Citizen Profile */}
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


        {/* ==================================================
            OFFICER
        ================================================== */}

        <Route
          path="/officer/dashboard"
          element={<OfficerDashboard />}
        />


        {/* ==================================================
            WORKER
        ================================================== */}

        {/* Worker Dashboard */}
        <Route
          path="/worker/dashboard"
          element={<WorkerDashboard />}
        />

        {/* My Tasks */}
        <Route
          path="/worker/tasks"
          element={<MyTasks />}
        />

        {/* Task Details */}
        <Route
          path="/worker/tasks/:id"
          element={<TaskDetails />}
        />

        {/* Task Location */}
        <Route
          path="/worker/location/:id"
          element={<TaskLocation />}
        />

        {/* Work Progress */}
        <Route
          path="/worker/progress/:id"
          element={<WorkProgress />}
        />

        {/* Upload Evidence */}
        <Route
          path="/worker/upload-evidence/:id"
          element={<UploadEvidence />}
        />

        {/* Completed Tasks */}
        <Route
          path="/worker/completed-tasks"
          element={<CompletedTasks />}
        />

        {/* Worker Notifications */}
        <Route
          path="/worker/notifications"
          element={<WorkerNotifications />}
        />

        {/* Worker Profile */}
        <Route
          path="/worker/profile"
          element={<WorkerProfile />}
        />


        {/* ==================================================
            UNKNOWN URL
        ================================================== */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;