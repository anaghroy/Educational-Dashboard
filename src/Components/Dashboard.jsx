import Calendar from "./Calendar";
import Video from "./Video";

import ProgressItem from "./ProgressItem";
import { data } from "../Data/ProgressData";
import { button } from "../Data/ButtonCard";

import Task from "./Task";
import SecondTask from "./SecondTask";
import Card from "./Card";
const Dashboard = () => {
  return (
    <section className="dashboard">
      {/* Main Grid */}
      <div className="dashboard-grid">
        <div className="card large">
          <Card />
        </div>
        <div className="card calendar">
          <Calendar />
        </div>
        <div className="card video">
          <Video button={button} />
        </div>
        <div className="card progress">
          <ProgressItem data={data} />
        </div>
        <div className="card tasks">
          <Task />
        </div>
        <div className="card tasks-part-2">
          <SecondTask />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
