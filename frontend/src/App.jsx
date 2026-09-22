import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/worker/Dashboard";
import MyTasks from "./pages/worker/MyTasks";
import TaskDetails from "./pages/worker/TaskDetails";
import TaskLocation from "./pages/worker/TaskLocation";
import WorkProgress from "./pages/worker/WorkProgress";
import UploadEvidence from "./pages/worker/UploadEvidence";
import CompletedTasks from "./pages/worker/CompletedTasks";
import Notifications from "./pages/worker/Notifications";
import Profile from "./pages/worker/Profile";

function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <h1 className="text-2xl font-bold text-slate-800">
        EcoCitizen Home
      </h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Worker Routes */}
        <Route
          path="/worker/dashboard"
          element={<Dashboard />}
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
