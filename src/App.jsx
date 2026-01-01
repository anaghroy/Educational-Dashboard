import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import { button } from "./Data/ButtonCard";
import { data } from "./Data/ProgressData";

const App = () => {
  return (
    <>
      <Topbar/>
      <div className="main-layout">
        <Sidebar />
        <Dashboard data={data} button={button}/>
      </div>
    </>
  );
};

export default App;
