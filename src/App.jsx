import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";

const App = () => {
  return (
    <>
      <Topbar />
      <div className="main-layout">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
};

export default App;
