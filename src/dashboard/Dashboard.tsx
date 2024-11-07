import MainDashboard from "./components/MainDashboard";
import Sidebar from "./components/Sidebar";
import StatsAndMessages from "./components/StatsAndMessages";
import Topbar from "./components/Topbar";
import TopbarMobile from "./components/TopbarMobile";

const Dashboard = () => {
  const handleSidebar = () => {
    const SidebarComponent =
      document.querySelector(".SidebarComponent")?.classList;
    const SidebarOverlay = document.querySelector(".SidebarOverlay")?.classList;
    if (
      SidebarComponent?.contains("hidden") &&
      SidebarOverlay?.contains("hidden")
    ) {
      SidebarComponent?.remove("hidden");
      SidebarOverlay?.remove("hidden");
    } else {
      SidebarComponent?.add("hidden");
      SidebarOverlay?.add("hidden");
    }
  };
  const handleTopbarMobile = () => {
    const SidebarComponent = document.querySelector(
      ".MobileSidebarComponent"
    )?.classList;
    const SidebarOverlay = document.querySelector(".SidebarOverlay")?.classList;
    if (
      SidebarComponent?.contains("hidden") &&
      SidebarOverlay?.contains("hidden")
    ) {
      SidebarComponent?.remove("hidden");
      SidebarOverlay?.remove("hidden");
    } else {
      SidebarComponent?.add("hidden");
      SidebarOverlay?.add("hidden");
    }
  };
  return (
    <div className="h-screen flex">
      <Sidebar handleSidebar={handleSidebar} />
      <div
        onClick={() => handleSidebar()}
        className="SidebarOverlay hidden cursor-pointer fixed top-0 left-0 right-0 w-full h-screen z-20"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      />
      <div className="w-full h-full flex flex-col">
        <Topbar
          handleSidebar={handleSidebar}
          handleTopbarMobile={handleTopbarMobile}
        />
        <TopbarMobile handleTopbarMobile={handleTopbarMobile} />
        <div className="flex gap-4 justify-between flex-1 pt-3 overflow-hidden">
          <MainDashboard />
          <StatsAndMessages />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
