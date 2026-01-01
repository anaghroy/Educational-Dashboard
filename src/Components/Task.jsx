import React from "react";
import UI from "../assets/images/uxuidesign.jpg";
import { Star } from "lucide-react";
const Task = () => {
  return (
    <>
      <div className="left">
        <div className="content">
          <h5>Introduction UX/UI design</h5>
          <span>By Nathan Riley</span>
          <div className="icons">
            <Star color="#FCCB26" />
            <Star color="#FCCB26" />
            <Star color="#FCCB26" />
            <Star color="#FCCB26" />
          </div>
          <div className="down-content">
            <span>Beginning</span>
            <div className="btn-container">
              <div className="button">
                <p>100%</p>
              </div>
              <div className="button2">
                <p>Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={UI} alt="UI-Design" />
      </div>
    </>
  );
};

export default Task;
