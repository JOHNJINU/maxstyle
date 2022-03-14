import { Component, useState } from "react";
import "../css/Home.css";
import icShakeHand from "../img/icShakeHand.png";
import icLogoWhyToChoose from "../img/ic_company_logo.jpg";
import icTestimonialPerson1 from "../img/ic_person_1.png";
import icTestimonialPerson2 from "../img/ic_person_2.png";
import icIso from "../img/ic_iso_no_bg.png";
import { Link } from "react-router-dom";
import icOfferHome from "../img/ic_offer_home.png";
import axios from "axios";
import MyPDF from "../img/ic_gallery_1.png";

import home_slider_1 from "../img/ic_home_carousel_1.jpg";
import home_slider_2 from "../img/ic_home_carousel_2.jpeg";
import home_slider_3 from "../img/ic_home_carousel_3.jpeg";
import home_4 from "../img/max_home_1.jpeg";
import home_5 from "../img/max_home_2.jpeg";
import home_6 from "../img/max_home_3.jpeg";
import home_7 from "../img/max_home_4.jpeg";
import home_8 from "../img/max_home_5.jpeg";

import about_1 from "../img/ic_about_top_1.jpg";
import Site4 from "../img/Site4.jpg";

function Home() {
  // earlier used class now converted to function

  // componentDidMount() {
  //   this.checkIfAnyOfferIsPresent();
  // }

  // checkIfAnyOfferIsPresent() {
  //   // if number of rows greater than or equal to 1
  //   // then show this offerstrip

  //   let checkOfferStrip = document.querySelector(".offers_link_header");

  //   axios
  //     .get("http://192.168.64.2/admin/api/checkIfAnyOfferPresent.php")
  //     .then((res) => {
  //       if (res.data.length >= 1) {
  //         checkOfferStrip.style.display = "block";
  //       } else {
  //         checkOfferStrip.style.display = "none";
  //       }
  //     });
  // }

  const [currentExploreItemIndex, setCurrentExploreItemIndex] = useState(0);
  const [showHideExplorePopup, setShowHideExplorePopup] = useState(false);

  const arrayOfExplore = [
    {
      heading: "High graded Raw materials",
      contentList: [
        "These are highly qualified materials (710 Grade BWP).",
        "We carry out all the steps from design to production and assembly in our own factory with the backing of modern German and Italian machineries.",
        "100% Customized products.",
        `Our materials are; I) 710 Grade BWP Marine Wood II) Our High Grade Signature Plywood Brand <b>MAXPLY</b>`,
        "Accessories are; Hettich, Ebco, Hepo by Hettich",
      ],
    },
    {
      heading: "Peace of Mind",
      contentList: [
        "1 Year onsite warranty against manufacturing defects.",
        "(Terms & Conditions are applying)",
        "Up to 5 Years Warranty on Accessories- as per the warranty policy terms & conditions by accessories manufacturer. (Fixing charge is free for 1 Year at site services- thereafter service charge is applicable for removal / fixing works with parts. Terms & Conditions apply)",
        "Lifetime service provided by the company. Service charges may apply.",
      ],
    },
    {
      heading: "Cost Efficient",
      contentList: [
        "Our company provides you designs as per your budget with high grade materials.",
        "We Provides detailed consultation as per the budget. ",
        "You can choose the materials and accessories as per the budget and preference.",
      ],
    },
  ];

  const handleExploreButton = (indexOfCurrentExplore) => {
    setCurrentExploreItemIndex(indexOfCurrentExplore);
    setShowHideExplorePopup((prev) => !prev);
  };

  return (
    <div>
      <div>
        <Link to="/offers" className="offers_link_header">
          <div className="headerOfferStrip text-center">
            Check out the latest offers <img src={icOfferHome} />
          </div>
        </Link>
      </div>

      {/* carousel starts */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div class="carousel-inner position-relative">
          <div class="carousel-item active">
            <img
              src={home_slider_1}
              class="d-block w-100 objectCoverImage"
              alt="..."
            />
            <div className="blackOverlayCarousel"></div>
            <div class="carousel-caption d-md-block">
              <h5>TURN YOUR HOME INTERIOR INTO A MASTERPIECE.</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={about_1}
              class="d-block w-100 objectCoverImage"
              alt="..."
            />
            <div className="blackOverlayCarousel"></div>
            <div class="carousel-caption d-md-block">
              <h5>CREATE MEMORIES</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Site4} class="d-block w-100 objectCoverImage" alt="..." />
            <div className="blackOverlayCarousel"></div>
            <div class="carousel-caption d-md-block">
              <h5>PRECISE AND ARTISTIC</h5>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev"
        >
          <div className="prevIconContainer position-absolute"></div>
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next"
        >
          <div className="prevIconContainer position-absolute"></div>
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
        <div className="offerBoardCarousel">
          <div className="innerBoxofferBoardCarousel">
            <h5>
              {" "}
              <span>
                <b>30% LESS</b> <br />
              </span>{" "}
              THAN RETAIL STORE PRICE
            </h5>
            <h5>
              {" "}
              <b>FACTORY </b>
              <br /> PRODUCTION{" "}
            </h5>
            <h5>
              {" "}
              <b>DIRECT</b> INSTALLATION{" "}
            </h5>
          </div>
        </div>
        <a
          type="button"
          className="btn btn-primary getEstimateButton"
          id="downloadBrochureButton"
          href={MyPDF}
          download="ic_gallery_1.png"
        >
          DOWNLOAD BROCHURE
        </a>
      </div>
      {/* carousel ends */}

      {/* quadrant block starts */}

      <div className="firstBar d-flex row-fluid">
        <div className="firstHalf position-relative col-6">
          <h4 className="text-center">The trusted brand in Kerala</h4>
          <span className="d-block ">
            Over 20 years <br /> of experience
          </span>
          <img src={icShakeHand} />
        </div>
        <div className="secondHalf col-6">
          <img src={home_4} className="objectCoverImage" />
        </div>
      </div>
      <div className="secondBar d-flex row-fluid no-gutters">
        <div className="secondHalf col-6">
          <img src={home_5} className="objectCoverImage" />
        </div>
        <div className="firstHalf position-relative col-6">
          <h4 className="text-center">Our quality management system</h4>
          <span className="d-block">
            An ISO 9001:2015 <br /> Certified Company
          </span>
          <img src={icIso} />
        </div>
      </div>
      {/* quadrant block ends  */}

      <hr />

      {/* why to choose block starts */}

      <div className="whyToChooseContainer text-center">
        <span className="tagLine">
          Why to choose <img src={icLogoWhyToChoose} /> ?
        </span>
      </div>

      <div className="whyToChooseContent d-flex row-fluid">
        <div className="firstColumn col-8 ">
          <div className="position-relative">
            <img src={home_6} className="w-50 objectCoverImage" />
            <h4 className="position-absolute">HIGH GRADE MATERIALS</h4>
            <p className="position-absolute">
              These are highly qualified materials (710 Grade BWP). We carry out
              all the steps from design to production and assembly in our own
              factory with the backing of modern German and Italian machineries.
              100% Customized products. Our materials are; I) 710 Grade BWP II)
              Our High Grade Signature Plywood Brand <b>MAXPLY</b>
            </p>
            <button
              type="button"
              className="btn btn-primary getEstimateButton position-absolute"
              onClick={() => handleExploreButton(0)}
            >
              EXPLORE
            </button>
          </div>
          <div className="position-relative">
            <img src={home_7} className="w-50 objectCoverImage" />
            <h4 className="position-absolute">PEACE OF MIND</h4>
            <p className="position-absolute">
              1 Year onsite warranty against manufacturing defects. (Terms &amp;
              Conditions apply). Up to 5 Years Warranty on Accessories- as per
              the warranty policy terms &amp; conditions by accessories
              manufacturer.Lifetime service provided by the company. Service
              charges may apply.
            </p>
            <button
              type="button"
              className="btn btn-primary getEstimateButton position-absolute"
              onClick={() => handleExploreButton(1)}
            >
              EXPLORE
            </button>
          </div>
        </div>
        <div className="seondColumn col-4 ">
          <div className="position-relative">
            <img src={home_8} className="w-100 objectCoverImage" />
            <h4>COST EFFICIENT</h4>
            <p>
              Our company provides you designs as per your budget with high
              grade materials. We provides detailed consultation as per the
              budget. You can choose the materials and accessories as per the
              budget and preference.
            </p>
            <button
              type="button"
              className="btn btn-primary getEstimateButton position-absolute"
              style={{ bottom: "0px", left: "0px" }}
              onClick={() => handleExploreButton(2)}
            >
              EXPLORE
            </button>
          </div>
        </div>
      </div>
      {/* why to choose ends */}

      <hr />

      {/* customer experience starts */}

      {/* <div className="customerExperienceContainer">
        <h4>CUSTOMER EXPERIENCES</h4>

        <div className="customerExperienceList">
          <div className="customerExperienceBox1 col-6 position-relative">
            <img src={icTestimonialPerson1} />
            <h5
              className="position-absolute"
              style={{ top: "25px", left: "165px" }}
            >
              Mr Gautham Vasudev <br /> Vytilla
            </h5>
            <hr
              className="testimonialLine position-absolute"
              style={{ top: "67px", left: "165px" }}
            />
            <p
              className="position-absolute"
              style={{ top: "105px", left: "165px" }}
            >
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero accumsan nisi dignissim feugiat. "
            </p>
          </div>
          <div
            className="customerExperienceBox1 col-6 position-relative"
            id="customer_box_2"
          >
            <img src={icTestimonialPerson2} />
            <h5
              className="position-absolute"
              style={{ top: "25px", left: "165px" }}
            >
              Mr Sabu Thomas <br /> Thrissur
            </h5>
            <hr
              className="testimonialLine position-absolute"
              style={{ top: "67px", left: "165px" }}
            />
            <p
              className="position-absolute"
              style={{ top: "105px", left: "165px" }}
            >
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero accumsan nisi dignissim feugiat. "
            </p>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary getEstimateButton "
          id="viewAllTestimonialsButton"
        >
          View All
        </button>
      </div> */}

      {/* customer experience ends */}

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

      {/* cdt */}
    </div>
  );
}

export default Home;
