import { Component } from "react";
import icCompanyLogo from "../img/ic_company_logo.jpg";
import icPhoneReceiver from "../img/ic_phone_receiver.png";
import icEmail from "../img/ic_email.png";
import "../css/Header.css";
import GetEstimateModal from "./GetEstimateModal";

import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEstimatePopupVisible: false,
    };

    this.toggleEstimatePopupVisibility =
      this.toggleEstimatePopupVisibility.bind(this);
  }

  componentDidMount() {
    const navUl = document.querySelector(".navbar-nav");
    const menuToggle = document.getElementById("navbarNav");

    navUl.addEventListener("click", (e) => {
      if (e.target.className === "nav-link") {
        menuToggle.classList.toggle("show");
      }
    });
  }

  toggleEstimatePopupVisibility() {
    this.setState((state) => ({
      isEstimatePopupVisible: !state.isEstimatePopupVisible,
    }));
  }

  render() {
    return (
      <>
        <div>
          <div className="headerStrip text-center">
            <span>
              {" "}
              For enquiries please call : <img src={icPhoneReceiver} /> INDIA -
              +91 751 02 44 440 UAE - +971 52 56 44 009 <img src={icEmail} />{" "}
              enquiry@maxstyleinteriors.com{" "}
            </span>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link to="/" className=" navbar-brand">
              {" "}
              <img
                className="navBarCompanyLogo"
                src={icCompanyLogo}
                alt=""
                width="30"
                height="24"
              />{" "}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    PROFILE
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/packages">
                    PACKAGES
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ourcapabilities">
                    OUR CAPABILITIES
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/projects">
                    PROJECTS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/gallery">
                    GALLERY
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/careers">
                    CAREERS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    CONTACT
                  </NavLink>
                </li>
                <button
                  type="button"
                  className="btn btn-primary getEstimateButton"
                  id="navbar-get-estimate"
                  onClick={this.toggleEstimatePopupVisibility}
                >
                  GET AN ESTIMATE
                </button>
              </ul>
            </div>
          </div>
        </nav>

        {this.state.isEstimatePopupVisible && (
          <GetEstimateModal
            closeBtnClickChild={this.toggleEstimatePopupVisibility}
          />
        )}
      </>
    );
  }
}

export default Navbar;
