import { Timer } from "lucide-react";
import React from "react";

const ProgressItem = ({ data }) => {
  console.log(data);
  return (
    <div className="main-progress">
      <div className="content">
        <p>Tasks Board</p>
        <div className="button">in Progress</div>
      </div>
      {data.map((item, index) => (
        <div className="card" key={index}>
          <div className="content">
            <p>{item.title}</p>
            <div className="button">{item.tag}</div>
          </div>
          <div className="text">
            <p>{item.description}</p>
            <div className="underline"></div>
          </div>
          <div className="down">
            <div className="button">
              <Timer color="black" />
              <span>{item.logTime}</span>
            </div>
            <div className="time">{item.dateRange}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressItem;
