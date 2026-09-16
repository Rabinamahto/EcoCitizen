import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/public/Home";
import ExploreIssues from "./pages/public/ExploreIssues";
import ReportProblem from "./pages/citizen/ReportProblem";
import Dashboard from "./pages/citizen/Dashboard";

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
          element={<Dashboard />}
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