import MainDashboard from "./components/MainDashboard";
import Sidebar from "./components/Sidebar";
import StatsAndMessages from "./components/StatsAndMessages";
import Topbar from "./components/Topbar";

const Dashboard = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="w-full h-full flex flex-col">
        <Topbar />
        <div className="flex gap-4 justify-between flex-1 pt-3 overflow-hidden">
          <MainDashboard />
          <StatsAndMessages />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
