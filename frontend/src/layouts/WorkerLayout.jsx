import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import WorkerSidebar from "../components/worker/WorkerSidebar";
import "../components/worker/WorkerSidebar.css";

function WorkerLayout({ children }) {
  return (
    <div className="worker-layout">
      <Navbar />

      <div className="worker-body">
        <WorkerSidebar />

        <main className="worker-main">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default WorkerLayout;