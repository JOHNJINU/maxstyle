import { Component } from "react";
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
import about_1 from "../img/ic_about_top_1.jpg";
import about_2 from "../img/ic_about_top_2.jpeg";
import about_3 from "../img/about_3.jpg";
import about_4 from "../img/about_4.jpg";
import about_5 from "../img/about_5.jpg";
import about_6 from "../img/about_6.jpg";

class About extends Component {
  render() {
    return (
      <div>
        {/* top quadrant starts */}

        <div className="topQuadrantAbout">
          <div className="topQuadrantFirstBarAbout d-flex">
            <div className="firstBarHalfAbout">
              <h4>What we do?</h4>
              <p>
                Our interior designers generally use design elements and visual
                aesthetics to transform and beautify interior environments. They
                usually involve in design planning, color patterns, fabric and
                furniture alignment, wall designs and lighting of an interior
                space.
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
                Our interior designer usually creates design solutions for
                buildings, conducts material research, selects furniture and
                decor and oversees the completion of all aspects of a project.
                They may also resolve issues that may emerge during planning the
                design of a project, such as financial constraints, furniture
                types or client preferences.
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
              <b>Interact with clients:</b> They may speak with clients to
              discover their requirements, budget and expected project
              completion time. This is typically the first phase in the process
              but it can occur multiple times during the duration of the
              project.
            </li>
            <li className="mt-2">
              <b>Create designs:</b>
              Interior designers can use their understanding of 3D or design
              software to envision and draw design plans to clarify and explain
              the required task. They may collaborate with clients to select
              materials, colors and furnishings, advising them on the ideal
              options.
            </li>
            <li className="mt-2">
              <b>Collaborate with other parties:</b>
              They may collaborate with contractors, plumbers, engineers,
              painters and other professionals to develop design standards to
              guarantee the work gets completed to a high standard. They also
              ensure that all structural fittings and design work adhere to
              regulatory standards.
            </li>
            <li className="mt-2">
              <b>Establish project timelines:</b>
              They may establish a project timeline for all parties involved in
              the project to ensure that project progress as per the set
              timelines. Other employees and contractors typically have access
              to this schedule and can follow it as well.
            </li>
            <li className="mt-2">
              <b>Provide updates to clients:</b>
              They may keep our clients informed about the development of the
              project and inform them of any setbacks. They often do this daily
              or weekly and may involve compiling and sending reports on a
              scheduled basis.
            </li>
            <li className="mt-2">
              <b>Research new developments:</b>
              They are usually skilled at identifying and implementing popular
              home design trends and styles.
            </li>
          </ul>
        </div>

        {/* offer strip starts  */}

        <div className="offerStripAbout ">
          <div className=" innerOfferStripAbout d-flex">
            <img src={icOfferStripBullet} className="d-block" />
            <h5> 35% LESS THAN RETAIL OUTLET </h5>
            <img src={icOfferStripBullet} className="d-block" />
            <h5> FACTORY PRODUCTION </h5>
            <img src={icOfferStripBullet} className="d-block" />
            <h5> DIRECT INSTALLATION </h5>
            <button type="button" className="btn btn-primary moreBtnAbout">
              MORE OFFERS
            </button>
          </div>
        </div>

        {/* offer strip ends */}

        <hr />

        {/* process work start  */}

        <div className="processContainerAbout">
          <h3>How the process work</h3>
          <p className="processParaInAbout">
            Our sales team are experts in understanding the client requirement
            and prepare a quotation. After confirming the project, we receive an
            advance amount on the work. We provide a design of the work and also
            available the customized designs. Furniture are manufactured in the
            factory at good finishing. We provide the materials only after
            receiving the 45% of amount. After installing the products, we
            receive the remaining amount and gives the warranty details
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
                  LIFETIME <br /> SERVICE <br /> GUARANTEED
                </h4>
                <img src={icMechanic} />
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* process work end    */}

        <h3 className="ourFeatuesAboutTagline">
          As you saw the process is hassle free, time bound, and a memorable
          one.
        </h3>

        {/* about our features starts */}

        <div className="ourFeatuesAbout">
          <div className="ourFeatuesAboutFirstBar d-flex">
            <div className="firstBarHalfFeaturesAbout">
              <h3>
                <span className="firstCapitalFeatureAbout">U</span>nique design
              </h3>
              <p>
                <b>
                  “Design is not just what it looks like and feel like. Design
                  is how it works.”
                </b>{" "}
                - Steve Jobs.
              </p>
              <p>
                At Maxstyle, we provide the best designers, who play the major
                role in understanding the customer requirement and putting them
                in to a well sketched plan.
              </p>
              <button type="button" className="btn btn-primary readMoreButton">
                READ MORE
              </button>
            </div>
            <div className="secondBarHalfFeaturesAbout">
              <img src={about_3} className="objectCoverImage" />
            </div>
          </div>

          <div className="ourFeatuesAboutSecondBar d-flex">
            <div className="secondBarHalfFeaturesAbout">
              <img src={about_4} className="objectCoverImage" />
            </div>
            <div className="firstBarHalfFeaturesAbout">
              <h3>
                <span className="firstCapitalFeatureAbout">T</span>op-notch
                materials
              </h3>
              <p>
                Highly Qualified materials from foreign countries are used for
                our production. We provide high grade plywood for the customers’
                requirements. 710 Grade Marine Plywood is used in our factory
                for the production. German and Italian machineries are applied
                in our factory. Accessories are from well-known German company
                called Hettich, Hepo and Ebco.
              </p>
              <button type="button" className="btn btn-primary readMoreButton">
                READ MORE
              </button>
            </div>
          </div>

          <div
            className="ourFeatuesAboutFirstBar d-flex"
            id="ourFeatuesAboutThirdBar"
          >
            <div className="firstBarHalfFeaturesAbout">
              <h3>
                <span className="firstCapitalFeatureAbout">S</span>killed
                employees
              </h3>
              <p>
                Passionate and enthusiastic employees make our firm more
                productive and profitable. Well experienced workers are in the
                factory, they give a good finishing of our products.
              </p>
              <button type="button" className="btn btn-primary readMoreButton">
                READ MORE
              </button>
            </div>
            <div className="secondBarHalfFeaturesAbout">
              <img src={about_5} className="objectCoverImage" />
            </div>
          </div>

          <div
            className="ourFeatuesAboutSecondBar d-flex"
            id="ourFeatuesAboutFourthBar"
          >
            <div className="secondBarHalfFeaturesAbout">
              <img src={about_6} className="objectCoverImage" />
            </div>
            <div className="firstBarHalfFeaturesAbout">
              <h3>
                <span className="firstCapitalFeatureAbout">H</span>igh end
                machineries
              </h3>
              <p>
                Italian and German machineries are used for the modular
                production. Well-known brands in German and Italian machineries
                are given better finishing for our products.
              </p>
              <button type="button" className="btn btn-primary readMoreButton">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        {/* about our features end */}
      </div>
    );
  }
}

export default About;
