import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import Register from "./pages/public/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;