
import Person from "../assets/images/Person.png";
import { Star } from "lucide-react";

const SecondTask = () => {
  return (
    <>
      <div className="left">
        <div className="content">
          <h5>Typography and Font Pairs</h5>
          <span>By Karyn Foley</span>
          <div className="icons">
            <Star color="#FCCB26" />
            <Star color="#FCCB26" />
            <Star color="#FCCB26" />
            <Star color="#FCCB26" />
          </div>
          <div className="down-content">
            <span>Intermediate</span>
            <div className="btn-container">
              <div className="button">
                <p>50%</p>
              </div>
              <div className="button2">
                <p>Progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={Person} alt="Person" />
      </div>
    </>
  );
};

export default SecondTask;
