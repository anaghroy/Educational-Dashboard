import { Play } from "lucide-react";
import React from "react";

const PlayCard = () => {
  return (
    <div className="play-card">
      {/* Center */}
      <div className="play-wave">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* Right */}
      <div className="play-right">
        <span className="time">02:35</span>
        <button className="play-btn">
           <Play />
        </button>
      </div>
    </div>
  );
};

export default PlayCard;
