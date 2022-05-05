import { Component, useState } from "react";
import "../css/About.css";
import icOfferStripBullet from "../img/ic_offer_strip_bullet.png";
import icMechanic from "../img/ic_mechanic.png";
import ic_requirement from "../img/ic_requirement.png";
import ic_quotation from "../img/ic_quotation.png";
import ic_advance from "../img/ic_advance.png";
import ic_confirm_design from "../img/ic_confirm_design.png";
import ic_suggestion from "../img/ic_suggestion.png";
import ic_design from "../img/ic_design.png";
import ic_right_arrow from "../img/ic_right_arrow.png";
import ic_down_arrow from "../img/ic_down_arrow.png";
import ic_left_arrow from "../img/ic_left_arrow.png";
import about_1 from "../img/20.jpg";
import about_2 from "../img/ic_about_top_2.jpeg";
import about_3 from "../img/about_3.jpg";
import about_4 from "../img/about_4.jpg";
import about_5 from "../img/about_5.jpg";
import about_6 from "../img/about_6.jpg";

import about_b_1 from "../img/about_b_1.jpg";
import about_b_2 from "../img/about_b_2.jpg";
import about_b_3 from "../img/about_b_3.jpg";
import about_b_4 from "../img/about_b_4.jpg";
function About() {
  const [currentExploreItemIndex, setCurrentExploreItemIndex] = useState(0);
  const [showHideExplorePopup, setShowHideExplorePopup] = useState(false);

  const arrayOfExplore = [
    {
      heading: "Unique Design",
      contentList: [
        "At Maxstyle, we provide the best designers, who play the major role in understanding the customer requirement and putting them in to a well sketched plan.",
        " Intentions from our designers make our customers are happy.",
        " We provide 100% customized interior designs assigned to the client.",
        " Our designers provide you better and unique ideas or designs for you dream project.",
        " Make your dream comes true with Maxstyle Interiors.",
      ],
    },
  ];

  const handleExploreButton = (indexOfCurrentExplore) => {
    setCurrentExploreItemIndex(indexOfCurrentExplore);
    setShowHideExplorePopup((prev) => !prev);
  };
  return (
    <div className="Aboutus-root-container">
      {/* top quadrant starts */}

      <div className="topQuadrantAbout">
        <div className="topQuadrantFirstBarAbout d-flex">
          <div className="firstBarHalfAbout">
            <h4>What we do?</h4>
            <p>
              Our designers generally use design elements and visual aesthetics
              to transform and beautify your interior environments. They usually
              involve in design planning, color patterns, fabric and furniture
              alignment, wall designs and lighting of an interior space.
            </p>
          </div>
          <div className="secondBarHalfAbout">
            <img src={about_1} className="objectCoverImage" />
          </div>
        </div>
        <div className="topQuadrantSecondBarAbout d-flex">
          <div className="secondBarHalfAbout">
            <img src={about_2} className="objectCoverImage" />
          </div>
          <div className="firstBarHalfAbout">
            <p>
              We create design solutions for buildings, conducts material
              research, selects furniture and decor and oversees the completion
              of all aspects of a project. They may also resolve issues that may
              emerge during planning the design of a project, such as financial
              constraints, furniture types or client preferences.
            </p>
          </div>
        </div>
      </div>
      {/* top quadrant ends */}

      <div className="About-us-what-our-designer-do container mt-4">
        <h4 className="pt-4">
          Our interior designer role may also involve performing the following
          activities:
        </h4>
        <ul className="mt-4">
          <li className="mt-2">
            <b>Interact with clients:</b> They are interacting with clients to
            discover their requirements, budget and expected project completion
            time. This is typically the first phase in the process but it can
            occur multiple times during the duration of the project.
          </li>
          <li className="mt-2">
            <b>Create designs:</b>
            Interior designers can use their understanding of 3D or design
            software to envision and draw design plans to clarify and explain
            the required task. They will collaborate with clients to select
            materials, colors and furnishings, advising them on the ideal
            options.
          </li>
          <li className="mt-2">
            <b>Collaborate with other parties:</b>
            They may collaborate with your contractors, plumbers, engineers,
            painters and other professionals to develop design standards to
            guarantee the work gets completed to a high standard. They also
            ensure that all structural fittings and design work adhere to
            regulatory standards.
          </li>
          <li className="mt-2">
            <b>Establish project timelines:</b>
            They will establish a project timeline for all parties involved in
            the project to ensure that project progress as per the set
            timelines. Other employees and contractors typically have access to
            this schedule and can follow it as well.
          </li>
          <li className="mt-2">
            <b>Provide updates to clients:</b>
            They will keep our clients informed about the development of the
            project and inform them of any setbacks. They often do this daily or
            weekly and may involve compiling and sending reports on a scheduled
            basis.
          </li>
          <li className="mt-2">
            <b>Research new developments:</b>
            They are highly skilled at identifying and implementing popular home
            design trends and styles.
          </li>
        </ul>
      </div>

      {/* offer strip starts  */}

      <div className="offerStripAbout ">
        <div className=" innerOfferStripAbout d-flex">
          {/* <img src={icOfferStripBullet} className="d-block" /> */}
          <span></span>
          <h5> 30% LESS THAN RETAIL STORE PRICE</h5>
          {/* <img src={icOfferStripBullet} className="d-block" /> */}
          <span></span>
          <h5> FACTORY PRODUCTION </h5>
          {/* <img src={icOfferStripBullet} className="d-block" /> */}
          <span></span>
          <h5> DIRECT INSTALLATION </h5>
        </div>
      </div>

      {/* offer strip ends */}

      <hr />

      {/* process work start  */}

      <div className="processContainerAbout">
        <h3>HOW THE PROCESS WORKS</h3>
        <p className="processParaInAbout">
          Our sales team are experts in understanding the client requirements
          and prepare an estimation. After confirming the estimation, we receive
          50% advance amount for the work. We will provide the designs of the
          work as per your requirements. Furnitures are manufactured in our
          factory with expert's supervision. We deliver the materials to the
          site after receiving the 45% of amount. After installing the products,
          we receive the remaining amount and gives the warranty certificates
          regarding the products.
        </p>

        <div className="diagramBannerContainer">
          <div className="diagramContainerAbout">
            <div className="firstRowDiagramContainerAbout d-flex">
              <div className="blockDiagramContainerAbout">
                <img src={ic_requirement} className="d-block" />
                <p>Understanding the client requirement.</p>
              </div>
              <div className="arrowDiagramContainerAbout">
                <img src={ic_right_arrow} />
              </div>
              <div className="blockDiagramContainerAbout">
                <img src={ic_quotation} className="d-block" />
                <p>A quotation is given.</p>
              </div>
              <div className="arrowDiagramContainerAbout">
                <img src={ic_right_arrow} />
              </div>
              <div className="blockDiagramContainerAbout">
                <img src={ic_advance} className="d-block" />
                <p>Receiving an advance amount.</p>
              </div>
            </div>

            <div className="downArrowDiagramContainerAbout">
              <img src={ic_down_arrow} />
            </div>

            <div className="thirdRowDiagramContainerAbout d-flex">
              <div className="blockDiagramContainerAbout">
                <img src={ic_confirm_design} className="d-block" />
                <p>Confirm the design.</p>
              </div>
              <div className="arrowDiagramContainerAbout">
                <img src={ic_left_arrow} />
              </div>
              <div className="blockDiagramContainerAbout">
                <img src={ic_suggestion} className="d-block" />
                <p>Client can also suggest their ideas.</p>
              </div>
              <div className="arrowDiagramContainerAbout">
                <img src={ic_left_arrow} />
              </div>
              <div className="blockDiagramContainerAbout">
                <img src={ic_design} className="d-block" />
                <p>Design is presented to you.</p>
              </div>
            </div>

            <div className="downArrowDiagramContainerAbout downArrowLeftDiagramContainerAbout">
              <img src={ic_down_arrow} />
            </div>

            <div className="fifthRowDiagramContainerAbout d-flex">
              <div className="blockDiagramContainerAbout">
                <img src={ic_confirm_design} className="d-block" />
                <p>Confirm the order.</p>
              </div>
              <div className="arrowDiagramContainerAbout">
                <img src={ic_right_arrow} />
              </div>
              <div className="blockDiagramContainerAbout">
                <img src={ic_suggestion} className="d-block" />
                <p>Production at the factory.</p>
              </div>
              <div className="arrowDiagramContainerAbout">
                <img src={ic_right_arrow} />
              </div>
              <div className="blockDiagramContainerAbout">
                <img src={ic_design} className="d-block" />
                <p>Delivering and installation at the site.</p>
              </div>
            </div>
          </div>
          <div className="bannerContainerAbout">
            <div className="innerBoxbannerContainerAbout">
              <h4>
                <b>LIFETIME</b> <br /> SERVICE <br /> GUARANTEED
              </h4>
              <img src={icMechanic} />
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* process work end    */}

      <h3 className="ourFeatuesAboutTagline">
        As you saw the process is hassle free, time bound, and a memorable one.
      </h3>

      {/* about our features starts */}

      <div className="ourFeatuesAbout">
        <div className="ourFeatuesAboutFirstBar d-flex">
          <div className="firstBarHalfFeaturesAbout">
            <h3>
              <span className="firstCapitalFeatureAbout">U</span>nique Design
            </h3>
            <p>
              <b>
                “Design is not just what it looks like and feel like. Design is
                how it works.”
              </b>{" "}
              - Steve Jobs.
            </p>
            <p>
              At Maxstyle, we provide the best designers, who play the major
              role in understanding the customer requirement and putting them in
              to a well sketched plan.
            </p>
            <button
              type="button"
              className="btn btn-primary readMoreButton"
              onClick={() => handleExploreButton(0)}
            >
              READ MORE
            </button>
          </div>
          <div className="secondBarHalfFeaturesAbout">
            <img src={about_b_1} className="objectCoverImage" />
          </div>
        </div>

        <div className="ourFeatuesAboutSecondBar d-flex">
          <div className="secondBarHalfFeaturesAbout">
            <img src={about_b_2} className="objectCoverImage" />
          </div>
          <div className="firstBarHalfFeaturesAbout">
            <h3>
              <span className="firstCapitalFeatureAbout">H</span>igh Quality
              Materials
            </h3>
            <p>
              Highly quality materials are used for our modular furniture
              production. We provide high grade plywood for the customers’
              requirements. We use our signature plywood brand – High Grade 710
              MAXPLY in our factory for the production. Accessories are from
              well-known German brands - Hettich, Hepo and Ebco.
            </p>
          </div>
        </div>

        <div
          className="ourFeatuesAboutFirstBar d-flex"
          id="ourFeatuesAboutThirdBar"
        >
          <div className="firstBarHalfFeaturesAbout">
            <h3>
              <span className="firstCapitalFeatureAbout">S</span>killed
              Employees
            </h3>
            <p>
              Passionate and enthusiastic employees make our firm more
              productive. Well experienced workers are in the factory, they give
              a good finishing of our products.
            </p>
          </div>
          <div className="secondBarHalfFeaturesAbout">
            <img src={about_b_3} className="objectCoverImage" />
          </div>
        </div>

        <div
          className="ourFeatuesAboutSecondBar d-flex"
          id="ourFeatuesAboutFourthBar"
        >
          <div className="secondBarHalfFeaturesAbout">
            <img src={about_b_4} className="objectCoverImage" />
          </div>
          <div className="firstBarHalfFeaturesAbout">
            <h3>
              <span className="firstCapitalFeatureAbout">H</span>igh End
              Machineries
            </h3>
            <p>
              Italian and German panel processing machineries are used for the
              modular furniture production. World-class German and Italian
              machineries gives a high-level perfection to your furnitures.
            </p>
          </div>
        </div>
      </div>

      {/* about our features end */}
      {/* dfgdfzg */}
      {showHideExplorePopup && (
        <div className="Home-explore-popup-outer-container">
          <div className="Home-explore-popup-inner-container">
            <div className="Home-explore-popup-inner-content-container">
              <h3>{arrayOfExplore[currentExploreItemIndex].heading}</h3>
              <ul>
                {arrayOfExplore[currentExploreItemIndex].contentList.map(
                  (item) => {
                    return <li>{item}</li>;
                  }
                )}
              </ul>
            </div>
            <div className="Home-explore-popup-close-container">
              <button
                className="my-1 mx-auto d-block"
                onClick={() => setShowHideExplorePopup((prev) => !prev)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
