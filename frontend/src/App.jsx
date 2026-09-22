import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

// Public pages
import Home from "./pages/public/Home";
import ExploreIssues from "./pages/public/ExploreIssues";

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

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Home */}
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

        {/* Citizen Report */}
        <Route
          path="/citizen/report"
          element={
            <MainLayout>
              <ReportProblem />
            </MainLayout>
          }
        />

        {/* Citizen Dashboard */}
        <Route
          path="/citizen/dashboard"
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