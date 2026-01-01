import design from "../assets/images/Design ux.jpg";
import { Figma, Plus, StepBack } from "lucide-react";
const Card = () => {
  return (
    <>
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
          <div className="container">
            <div className="design">
              <div className="image">
                <img src={design} alt="design" />
              </div>
              <div className="text">
                <p>Ui Design Creativity</p>
                <span>Craig Young</span>
              </div>
            </div>
            <div className="second-part">
              <div className="previous">
                <div className="icon">
                  <StepBack />
                </div>
                <span>Previous</span>
              </div>
              <div className="previous">
                <div className="icon">
                  <Figma />
                </div>
                <span>Recommend</span>
              </div>
            </div>
          </div>
    </>
  )
}

export default Card
