import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/officer/Dashboard";
import Complaints from "./pages/officer/Complaints";
import ComplaintDetails from "./pages/officer/ComplaintDetails";
import AssignTeam from "./pages/officer/AssignTeam";
import Analytics from "./pages/officer/Analytics";
import Map from "./pages/officer/Map";
import Notifications from "./pages/officer/Notifications";
import OverdueComplaints from "./pages/officer/OverdueComplaints";
import Profile from "./pages/officer/Profile";

function Home() {
  return <h1>EcoCitizen Home</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/officer/dashboard" element={<Dashboard />} />
        <Route path="/officer/complaints" element={<Complaints />} />
        <Route path="/officer/complaints/:id" element={<ComplaintDetails />} />
        <Route path="/officer/assign-team" element={<AssignTeam />} />
        <Route path="/officer/analytics" element={<Analytics />} />
        <Route path="/officer/map" element={<Map />} />
        <Route path="/officer/notifications" element={<Notifications />} />
        <Route path="/officer/overdue" element={<OverdueComplaints />} />
        <Route path="/officer/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;