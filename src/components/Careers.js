import { Component } from "react";
import "../css/Careers.css";
import icCareer1 from "../img/ic_career_1.png";
import icListDot from "../img/ic_list_dot.png";

class Careers extends Component {
  render() {
    return (
      <div className="Careers-root-container">
        <h3 className="careerHeading">Careers</h3>
        <div className="careerBar">
          <img src={icCareer1} />
          <div className="careerBarText">
            <p className="careerBarTextContent">
              We’re looking for fearless people. People who believe that if you
              aren’t taking a risk, it isn’t worth it. People who believe in
              human potential. Because we were creating a new way of working. A
              new way of understanding. And we’re doing it together. So if
              you’re ready for a challenge, we’re ready for you. If you believe
              you can bring more value to our team,
            </p>
            <span className="careerBarTextTagLine">Send your resume to</span>
            <span className="careerBarTextMailId">hr.pdmax@gmail.com</span>
            <hr className="careerBarTextMailIdUnderLine" />
          </div>
        </div>

        <hr className="currentJobOpeningLine" />

        <h5 className="currentJobOpeningHeading">Current Job Openings</h5>

        <ul className="currentJobOpeningList">
          <li>
            <img src={icListDot} />
            Sales Executives
          </li>
          <li>
            <img src={icListDot} />
            Site Supervisor
          </li>
          <li>
            <img src={icListDot} />
            Modular Furniture Machine Operatos
          </li>
          <li>
            <img src={icListDot} />
            Carpenters
          </li>
        </ul>
      </div>
    );
  }
}

export default Careers;
