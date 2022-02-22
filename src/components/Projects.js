import { Component } from "react";
import "../css/Projects.css";
import icProjects2 from "../img/ic_projects_2.png";
import icProjects3 from "../img/ic_projects_3.png";

import projects_1 from "../img/projects_1.jpg";

class Projects extends Component {
  render() {
    return (
      <div>
        {/* top banner starts */}

        <div className="topBannerProjects">
          <h3 className="topBannerProjectsHeading">Our works</h3>
          <h5>
            “The key to great design is capturing the spirit of the client and
            the essence of the space.”
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
          <img src={projects_1} />
        </div>

        {/* top banner ends */}

        {/* project list starts  */}

        <div className="projectListItemsContainer">
          <div className="listItemOne">
            <div className="left">
              <h3>Apartment Interior,</h3>
              <h3>Mr. Antony Varghese</h3>
              <h6>Panampilly Nagar</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero accumsan nisi dignissim feugiat. Vestibulum
                mollis, justo sed vulputate fermentum, augue dolor facilisis
                erat, sed venenatis mi velit ac enim.
              </p>
            </div>
            <div className="right">
              <img className="imageOne objectCoverImage" src={icProjects2} />
              <img className="imageTwo objectCoverImage" src={icProjects2} />
              <img className="imageThree objectCoverImage" src={icProjects2} />
            </div>
          </div>

          <div className="listItemOne secondItem">
            <div className="left">
              <h3>Home Interior, </h3>
              <h3>Mr. Sabin Muhammad</h3>
              <h6>Vytilla</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero accumsan nisi dignissim feugiat. Vestibulum
                mollis, justo sed vulputate fermentum, augue dolor facilisis
                erat, sed venenatis mi velit ac enim.
              </p>
            </div>
            <div className="right">
              <img className="imageOne objectCoverImage" src={icProjects2} />
              <img className="imageTwo objectCoverImage" src={icProjects2} />
              <img className="imageThree objectCoverImage" src={icProjects2} />
            </div>
          </div>

          <div className="listItemOne thirdItem">
            <div className="left">
              <h3>Apartment Interior, </h3>
              <h3>Mr. Thomas Chacko</h3>
              <h6>Kottayam</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero accumsan nisi dignissim feugiat. Vestibulum
                mollis, justo sed vulputate fermentum, augue dolor facilisis
                erat, sed venenatis mi velit ac enim.
              </p>
            </div>
            <div className="right">
              <img className="imageOne objectCoverImage" src={icProjects3} />
              <img className="imageTwo objectCoverImage" src={icProjects3} />
              <img className="imageThree objectCoverImage" src={icProjects3} />
            </div>
          </div>
        </div>

        {/* project list ends */}
      </div>
    );
  }
}

export default Projects;
