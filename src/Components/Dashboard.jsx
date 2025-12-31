import { Plus } from "lucide-react";
import design from "../assets/images/Design ux.jpg";
import PlayCard from "./PlayCard";
import Calendar from "./Calendar";
const Dashboard = () => {
  return (
    <section className="dashboard">
      {/* Main Grid */}
      <div className="dashboard-grid">
        <div className="card large">
          <div className="large-header">
            <div className="dashboard-header">
              <h2>Hello, Mithun Ray 👋</h2>
              <p>What do you want to learn today?</p>
            </div>

            <div className="button-header">
              <div className="menu-item">
                <span>Rollover</span>
              </div>

              <div className="menu-item">
                <Plus size={20} />
                <span>Add your Goal</span>
              </div>
            </div>
          </div>
          <div className="design">
            <div className="image">
              <img src={design} alt="design" />
            </div>
            <div className="text">
              <p>Ui Design Creativity</p>
              <span>Craig Young</span>
            </div>
            <div className="time">
              
              <PlayCard />
            </div>
          </div>
        </div>

        <div className="card calendar">
          <Calendar/>
        </div>

        <div className="card video">Essentials for Designers</div>
        <div className="card progress">Progress</div>
        <div className="card tasks">Tasks Board</div>
      </div>
    </section>
  );
};

export default Dashboard;
