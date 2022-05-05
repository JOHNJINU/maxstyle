import { Component } from "react";
import "../css/Projects.css";
import icProjects2 from "../img/ic_projects_2.png";
import icProjects3 from "../img/ic_projects_3.png";

import projects_1 from "../img/projects_1.jpg";
import Site3 from "../img/Site3.jpg";
import Site4 from "../img/Site4.jpg";

class Projects extends Component {
  render() {
    return (
      <div className="Projects-root-container">
        {/* top banner starts */}

        <div className="topBannerProjects">
          <h3 className="topBannerProjectsHeading">Our works</h3>
          <h5>
            <i>
              “The key to great design is capturing the spirit of the client and
              the essence of the space.”
            </i>
          </h5>
          <p className="topBannerProjectsDescription">
            We are always striving to push boundaries and our production
            facilities ensure what we deliver the best of the product lines to
            suit any financial budget with on time deliveries. We have a
            dedicated team of designers who understand the need for space and
            functionality, and we are able to offer our customers exactly what
            they need. We provide complete furnishing for beautiful home
            interiors including modular kitchen furnishing, living, dining, and
            bedroom interiors to help to bring your dream to life.
          </p>
        </div>

        <div className="ourWorksImageContainer">
          <img src={Site3} />
        </div>

        {/* top banner ends */}

        {/* project list starts  */}

        <div className="Projects-testimonial-replacement-container container">
          <img src={Site4} />
        </div>

        {/* project list ends */}
      </div>
    );
  }
}

export default Projects;
