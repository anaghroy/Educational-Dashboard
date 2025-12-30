import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";
import {
  CircleChevronRight,
  CircleFadingArrowUp,
  DecimalsArrowRight,
  Moon,
  Search,
  Spline,
  Sun,
  Type,
  UserRound,
} from "lucide-react";
const Topbar = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="main-top">
      <div className="image">
        <img src={Logo} alt="logo" />
      </div>
      <div className="center">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search anything..."
            // value={value}
            // onChange={(e) => onChange(e.target.value)}
          />
          <Search className="search-icon" size={18} />
        </div>
        <div className="button">
          <Spline color="#FCCB26" />
          <a href="#">Ui/UX Design</a>
        </div>
        <div className="button-2">
          <UserRound color="#22262B" />
          <a href="#">Illustration</a>
        </div>
        <div className="button-2">
          <Type color="#22262B" />
          <a href="#">Typography</a>
        </div>
        <div className="more">
          <DecimalsArrowRight color="#22262B" />
        </div>
      </div>
      <div className="right">
        <div className="light">
          <Sun color="#FCCB26" />
        </div>
        <div className="dark">
          <Moon color="#FFFFFF" />
        </div>
        <div className="button">
          <CircleFadingArrowUp color="#FCCB26" />
          <a href="#">Upgrade Pro</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
