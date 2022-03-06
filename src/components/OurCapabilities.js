import { Component } from "react";
import "../css/OurCapabilities.css";
import icCapabilities1 from "../img/ic_capabilities_1.png";
import icCapabilities2 from "../img/ic_capabilities_2.png";
import icCapabilities3 from "../img/ic_capabilities_3.png";
import icCapabilities4 from "../img/ic_capabilities_4.png";
import icCapabilities5 from "../img/ic_capabilities_5.png";

import our_capabilities_1 from "../img/our_capabilities_1.JPG";
import our_capabilities_2 from "../img/our_capabilities_2.jpeg";
import our_capabilities_3 from "../img/our_capabilities_3.JPG";
import our_capabilities_4 from "../img/our_capabilities_4.jpg";
import our_capabilities_5 from "../img/our_capabilities_5.jpg";

import Site4 from "../img/Site4.jpg";
import Site5 from "../img/Site5.jpg";
import Site6 from "../img/Site6.jpg";
import Site7 from "../img/Site7.jpg";
import Site8 from "../img/Site8.jpg";
import ic_factory from "../img/ic_factory.jpg";

class OurCapabilities extends Component {
  render() {
    return (
      <div className="OurCapabilities-root-container">
        {/* quadrant block starts */}

        <div className="firstBarOurCapabilities d-flex row-fluid">
          <div className="firstHalf position-relative col-6">
            <h4>Our infrastructure</h4>
            <span className="d-block ">
              <b>
                “Interior design is making the best possible use of the
                available space.”
              </b>
              <br />
              <br />
              10,750 Sq. Ft. own production facility for assuring fast
              production and delivery.
            </span>
          </div>
          <div className="secondHalf col-6">
            <img src={ic_factory} className="objectCoverImage" />
          </div>
        </div>
        <div className="secondBarCapabilities d-flex row-fluid no-gutters">
          <div className="secondHalf col-6">
            <img src={Site5} className="objectCoverImage" />
          </div>
          <div className="firstHalf position-relative col-6">
            <span className="d-block">
              Superior German panel processing machines for best fit &amp;
              finish.
              <br />
              <br /> Skilled artisans, talented designers, &amp; dedicated
              management for making your home into a class apart.
            </span>
          </div>
        </div>

        {/* quadrant block ends  */}

        {/* production facility starts */}

        <div className="ourFeatuesCapabilitiesFirstBar d-flex">
          <div className="firstBarHalfFeaturesCapabilities">
            <h3>10,750 SqFt</h3>
            <h5>Production facility.</h5>
            <p>
              <b>
                “The most welcoming spaces are those that are interesting, but
                not overpowering.”
              </b>
              <br />
              <br />
              Production facility of our firm situated in Alappuzha, have high
              storage capacity and able to manufacturing more items at a time.
              Systematic manufacturing and assembling procedures ensure the best
              result to match the designs. Production Excecutive give time
              schedule to the workers as per the execution and site status.
            </p>
          </div>
          <div className="secondBarHalfFeaturesCapabilities">
            <img src={Site6} className="objectCoverImage" />
          </div>
        </div>

        {/* production facility ends */}

        <hr className="hrLineourCapabilitiesOne" />

        {/* projects and years facility starts */}

        <div className="projectsYearsContainer">
          <div className="left">
            <div className="secondBarHalfFeaturesAbout ourcapabilities-image-container">
              <img src={Site7} className="objectCoverImage" />
            </div>

            <div className="firstBarHalfFeaturesCapabilities">
              <h3>32</h3>
              <h5>Projects per month.</h5>
              <p>
                100% customization in designing and qualified and experienced
                designers are the strengths of Maxstyle. We provide complete
                solution of your interiors. We are totally committed to on time
                and accurate completion in our projects. Our team will leave
                from your site only after getting the satisfaction report of the
                project. These are the reasons, why we have more demand on this
                industry.
              </p>
            </div>
          </div>

          <div className="center">
            <hr />
          </div>

          <div className="right">
            <div className="firstBarHalfFeaturesCapabilities">
              <h3>20</h3>
              <h5>Years of experience.</h5>
              <p>
                Customers are happy and satisfied with our projects at the
                beginning and its continuing the customer satisfaction in this
                field. High quality materials make our customers are happy. They
                build and maintain their dream with us.
              </p>
            </div>
            <div className="secondBarHalfFeaturesAbout ourcapabilities-image-container">
              <img src={Site8} className="objectCoverImage" />
            </div>
          </div>
        </div>

        {/* projects and years facility ends */}

        <h3 className="hassleFreeTagline">
          Want to know how this transforms to a hassle free experience?
        </h3>

        {/* hassle free experience starts */}
        <div className="hassleFreeContainer">
          <div className="firstSection">
            <div className="firstImage">
              <img src={icCapabilities1} />
              <div className="firstBarHalfFeaturesCapabilities">
                <p>
                  Our experienced professionals will make sure your idea is
                  transformed into precise drawings.
                </p>
              </div>
            </div>
            <div className="secondImage">
              <img src={icCapabilities2} />
              <div className="firstBarHalfFeaturesAbout">
                <p>
                  Since every material is pre-inspected and kept in our
                  facility, there is no delay for production.
                </p>
              </div>
            </div>
            <div className="thirdImage">
              <img src={icCapabilities3} />
              <div className="firstBarHalfFeaturesAbout">
                <p>
                  By producing at our own facility, with high end machinery,
                  time and budget is always in check.
                </p>
              </div>
            </div>
          </div>
          <div className="secondSection">
            <hr className="hrLineourCapabilitiesOne" />
          </div>
          <div className="thirdSection">
            <div className="firstImage">
              <img src={icCapabilities4} />
              <div className="firstBarHalfFeaturesCapabilities">
                <p>Installation is done with utmost precision and guidance.</p>
              </div>
            </div>
            <div className="center">
              <hr />
            </div>
            <div className="secondImage">
              <img src={icCapabilities5} />
              <div className="firstBarHalfFeaturesCapabilities">
                <p>After sales service will be a pleasant experience.</p>
              </div>
            </div>
          </div>
        </div>

        {/* hassle free experience ends */}
      </div>
    );
  }
}

export default OurCapabilities;
