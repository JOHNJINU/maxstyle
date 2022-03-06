import { Component } from "react";
import "../css/Footer.css";
import icDotPattern from "../img/ic_dot_pattern.png";
import icLogo from "../img/ic_astiea_logo.png";
import icFacebook from "../img/ic_facebook.png";
import icInstagram from "../img/ic_instagram.png";
import GetEstimateModal from "./GetEstimateModal";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEstimatePopupVisibleF: false,
    };

    this.toggleEstimatePopupVisibilityF =
      this.toggleEstimatePopupVisibilityF.bind(this);
  }

  toggleEstimatePopupVisibilityF() {
    this.setState((state) => ({
      isEstimatePopupVisibleF: !state.isEstimatePopupVisibleF,
    }));
  }

  render() {
    return (
      <div>
        {/* pattern and logo container starts */}
        <div className="patternLogoContainer">
          <div className="patternLogoContainerImages d-flex">
            <img src={icDotPattern} id="icPattern" className="d-block" />
            <div className="d-flex flex-column">
              <p className="fromText">from</p>
              <img src={icLogo} id="icAstiea" className="d-block" />
            </div>
          </div>
        </div>
        {/* pattern and logo container ends */}

        {/* bottom rectangle starts */}
        <div className="bottomRectangle d-flex">
          <div className="bottomRectanglefirstColumn col-4">
            <p>
              Ready to make your interiors <br /> a piece of art?
            </p>
            <button
              type="button"
              className="btn btn-primary getEstimateButton"
              onClick={this.toggleEstimatePopupVisibilityF}
            >
              GET AN ESTIMATE
            </button>
          </div>
          <div className="bottomRectangleSecondColumn col-3">
            <div className="telephoneNumberContainerFooter">
              <p>INDIA +91 751 02 44 440</p>
              <p>UAE - +971 52 56 44 009</p>
            </div>

            <div className="followUsContainer">
              <span className="followText">Follow us </span>
              <img src={icFacebook} />
              <img src={icInstagram} />
            </div>
          </div>
          <div className="bottomRectangleThirdColumn col-4">
            <ul>
              <li>
                <Link className="noDecoration" to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="noDecoration" to="/about">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link className="noDecoration" to="/packages">
                  PACKAGES
                </Link>
              </li>
            </ul>

            <ul id="second_ul">
              <li>
                <Link className="noDecoration" to="/ourcapabilities">
                  OUR CAPABILITIES
                </Link>
              </li>
              <li>
                <Link className="noDecoration" to="/projects">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link className="noDecoration" to="/gallery">
                  GALLERY
                </Link>
              </li>
              <li>
                <Link className="noDecoration" to="/careers">
                  CAREERS
                </Link>
              </li>
              <li>
                <Link className="noDecoration" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* bottom rectangle ends */}

        {this.state.isEstimatePopupVisibleF && (
          <GetEstimateModal
            closeBtnClickChild={this.toggleEstimatePopupVisibilityF}
          />
        )}
      </div>
    );
  }
}

export default Footer;
