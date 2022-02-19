import { Component, useState } from "react";
import "../css/Home.css";
import icShakeHand from "../img/icShakeHand.png";
import icLogoWhyToChoose from "../img/icLogoWhyToChoose.png";
import icTestimonialPerson1 from "../img/ic_person_1.png";
import icTestimonialPerson2 from "../img/ic_person_2.png";
import icIso from "../img/ic_iso.png";
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
      heading: "IMPORTED GOODS",
      contentList: [
        "These are highly qualified materials (710 Grade BWP).",
        "We carry out all the steps from design to production and assembly in our own factory with the backing of modern German and Italian machineries.",
        "100% Customized products.",
        "Imported Raw Materials are; i) 710 Grade BWP Marine Wood - Century, Trojan, Jack wood ii) 710 Grade BWP Maxply",
        "Imported Accessories are; Hettich, Ebco, Hepo by Hettich",
      ],
    },
    {
      heading: "FINEST DETAILING",
      contentList: [
        "1 Year Onsite warranty against manufacturing defects. (* Terms & Conditions are applying)",
        "Up to 5 Years Warranty on Accessories- as per the warranty policy terms & conditions by accessories manufacturer. (Fixing charge is free for 1 Year at site services- thereafter service charge is applicable for removal / fixing works with parts. Terms & Conditions are applying)",
        "This warranty & its period is applicable only for 100% paid amount in total Final Invoice value.",
        "Offer is open for your consideration strictly for a period of 15days only from this day and subject to our written confirmation thereafter.",
        "The said work can be completed within 35-45 working days from the date of purchase order with advance. However, intervening work by other agencies should be completed as per dates indicated in the progress bar chart that will be furnished on receipt of order.",
        "Date of completion will be valued, 5 days from the date of drawing submission, in case of any delay from the site or client, this completion schedule will not be valued.",
      ],
    },
    {
      heading: "COST EFFICIENT",
      contentList: [
        "When joint measurements are being taken for billing, Extra area shall be calculated as an Additional Bill and cut-outs for lights/ columns / speakers /diffusers /half tiles if any used shall be considered as a billing area.",
        "Additional requirements are being considered as an Additional Billing.",
        "Cove lightings and design cornices are being considered as an additional charge.",
        "Any damages / wastage’s due to co-ordination agencies like electrical, AC, fire, lighting etc., will be to your account.",
        "No deduction in area should be made for light cut-outs for lights/ columns / speakers / diffusers.",
        "The prices quoted are as per the standard material consumption calculation. Prices may vary subject to variation in the consumption that shall be furnished only on receiving the final drawings & site conditions.",
        "Transportation charges are inclusive.",
        "Purchase orders to be released favoring: M/s. PRASIDHI MAXSTYLE INTERIORS.",
        "Any change in the existing rates of taxes shall be to the client's account.",
        "All material will remain the property of PRASIDHI MAXSTYLE INTERIORS until the 100% payment is settled.",
        "50% payment as advance.",
        "45 % payment on Materials Delivery at site.",
        "5% payment on Work completion at site.",
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
              <h5>Turn your interior into masterpiece.</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={home_slider_2}
              class="d-block w-100 objectCoverImage"
              alt="..."
            />
            <div className="blackOverlayCarousel"></div>
            <div class="carousel-caption d-md-block">
              <h5>Create Memories</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={home_slider_3}
              class="d-block w-100 objectCoverImage"
              alt="..."
            />
            <div className="blackOverlayCarousel"></div>
            <div class="carousel-caption d-md-block">
              <h5>Precise and artistic</h5>
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
              35% LESS THAN <br /> RETAIL OUTLET{" "}
            </h5>
            <h5>
              {" "}
              FACTORY <br /> PRODUCTION{" "}
            </h5>
            <h5> DIRECT INSTALLATION </h5>

            <div>
              <Link to="/offers">
                <button type="button" className="btn btn-primary ">
                  MORE OFFERS
                </button>
              </Link>
            </div>
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
          <h4 className="text-center">Our quality measures</h4>
          <span className="d-block">
            An ISO 9001 <br /> certified Company
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
            <h4 className="position-absolute">IMPORTED GOODS</h4>
            <p className="position-absolute">
              These are highly qualified materials (710 Grade BWP). We carry out
              all the steps from design to production and assembly in our own
              factory with the backing of modern German and Italian machineries.
              100% Customized products. Imported Raw Materials are; i) 710 Grade
              BWP Marine Wood - a) Century b) Trojan c) Jack wood ii) 710 Grade
              BWP Maxply
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
            <h4 className="position-absolute">FINEST DETAILING</h4>
            <p className="position-absolute">
              1 Year Onsite warranty against manufacturing defects. (* Terms
              &amp; Conditions are applying). Up to 5 Years Warranty on
              Accessories- as per the warranty policy terms &amp; conditions by
              accessories manufacturer. (Fixing charge is free for 1 Year at
              site services- thereafter service charge is applicable for removal
              / fixing works with parts. Terms &amp; Conditions are applying)
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
              When joint measurements are being taken for billing, Extra area
              shall be calculated as an Additional Bill and cut-outs for lights/
              columns / speakers /diffusers /half tiles if any used shall be
              considered as a billing area. Additional requirements are being
              considered as an Additional Billing. Cove lightings and design
              cornices are being considered as an additional charge.
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

      <div className="customerExperienceContainer">
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
      </div>

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
