```jsx
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

// Public / Citizen pages
import Home from "./pages/public/Home";
import ExploreIssues from "./pages/public/ExploreIssues";
import ReportProblem from "./pages/citizen/ReportProblem";
import CitizenDashboard from "./pages/citizen/Dashboard";

// Officer pages
import OfficerDashboard from "./pages/officer/Dashboard";
import Complaints from "./pages/officer/Complaints";
import ComplaintDetails from "./pages/officer/ComplaintDetails";
import AssignTeam from "./pages/officer/AssignTeam";
import Analytics from "./pages/officer/Analytics";
import Map from "./pages/officer/Map";
import Notifications from "./pages/officer/Notifications";
import OverdueComplaints from "./pages/officer/OverdueComplaints";
import Profile from "./pages/officer/Profile";

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

        {/* Officer Dashboard */}
        <Route
          path="/officer/dashboard"
          element={<OfficerDashboard />}
        />

        {/* Officer Complaints */}
        <Route
          path="/officer/complaints"
          element={<Complaints />}
        />

        {/* Complaint Details */}
        <Route
          path="/officer/complaints/:id"
          element={<ComplaintDetails />}
        />

        {/* Assign Team */}
        <Route
          path="/officer/assign-team"
          element={<AssignTeam />}
        />

        {/* Analytics */}
        <Route
          path="/officer/analytics"
          element={<Analytics />}
        />

        {/* Map */}
        <Route
          path="/officer/map"
          element={<Map />}
        />

        {/* Notifications */}
        <Route
          path="/officer/notifications"
          element={<Notifications />}
        />

        {/* Overdue Complaints */}
        <Route
          path="/officer/overdue"
          element={<OverdueComplaints />}
        />

        {/* Officer Profile */}
        <Route
          path="/officer/profile"
          element={<Profile />}
        />

        {/* Unknown route */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```