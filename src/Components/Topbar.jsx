import { useMemo, useState } from "react";
import Logo from "../assets/images/Logo.png";
import useDebounce from "../Data/useDebounce";

import {
  CircleFadingArrowUp,
  DecimalsArrowRight,
  Moon,
  Search,
  Spline,
  Sun,
  Type,
  UserRound,
} from "lucide-react";
const data = [
  "UI/UX Design",
  "UI Design",
  "Branding",
  "Front End",
  "Back End",
  "Motion Design",
  "Animation",
  "WebGSAL",
  "Typography",
];
const Topbar = () => {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 300);
  const filteredData = useMemo(() => {
    if (!debouncedQuery) return [];
    return data.filter((item) =>
      item.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery]);

  return (
    <div className="main-top">
      <div className="image">
        <img src={Logo} alt="logo" />
      </div>
      <div className="center">
        <div className="search-wrapper">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search anything..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Search className="search-icon" size={18} />
            {/* Show results only when typing */}
            {query && (
              <div className="results">
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => <p key={index}>{item}</p>)
                ) : (
                  <p className="no-result">No results found</p>
                )}
              </div>
            )}
          </div>
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
          <Sun />
        </div>
        <div className="dark">
          <Moon />
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
