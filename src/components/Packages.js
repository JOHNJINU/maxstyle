import { Component } from "react";
import "../css/Packages.css";
import ic_warranty from "../img/ic_warranty.png";
import GetEstimateModal from "./GetEstimateModal";
import { Link } from "react-router-dom";

class Packages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEstimatePopupVisibleP: false,
    };

    this.toggleEstimatePopupVisibilityP =
      this.toggleEstimatePopupVisibilityP.bind(this);
  }

  toggleEstimatePopupVisibilityP() {
    this.setState((state) => ({
      isEstimatePopupVisibleP: !state.isEstimatePopupVisibleP,
    }));
  }

  render() {
    return (
      <div className="Packages-root-container">
        {/* top banner starts */}

        <div className="topBannerPackages">
          <h3 className="topBannerPackagesHeading">Packages</h3>
          <p className="topBannerPackagesDescription">
            <b>
              “The essence of interior design will always be about people and
              how they live. It is about the realities of what makes for an
              attractive, civilized, meaningful environment, not about fashion
              or what’s in or what’s out. This is not an easy job.”
            </b>
          </p>
          <p className="topBannerPackagesDescriptionAuthor text-right">
            - Albert Hadley
          </p>
        </div>

        <div className="Packages-detail-content-container container mt-4">
          <p className="p-4">
            Maxstyle Home Interiors propose you the package offers, that can
            help you to save money. Here we have mainly Essential and Luxury
            packages. It will be extended as per the customer approach. The
            customer has an option to remove the item in the package, that is
            not suitable for your project, and also to add the item, that liked
            by the customer.
          </p>
        </div>
        <div className="offerBoardPackages">
          <div className="innerBoxofferBoardPackages">
            <h5>
              {" "}
              OUR PRICE IS <br /> LESS THAN 35%
            </h5>
            <h5>
              {" "}
              FACTORY <br /> PRODUCTION{" "}
            </h5>
            <h5> DIRECT INSTALLATION </h5>
            <button
              type="button"
              className="btn btn-primary "
              onClick={this.toggleEstimatePopupVisibilityP}
            >
              GET AN ESTIMATE
            </button>
          </div>
        </div>

        <div className="Package-more-offers-button-container container mt-4">
          <Link to="/offers">
            <button type="button" className="btn btn-primary ">
              MORE OFFERS
            </button>
          </Link>
        </div>
        {/* top banner ends */}
        <div className="Packages-star-image-heading">
          <img src={ic_warranty} className="imgWarranty" />
          <h3 className="packageHeading">PACKAGE OFFERS</h3>
        </div>
        <div className="offerPackDiv">
          <div className="offerPackDivHeader">
            <h2>ESSENTIAL PACK</h2>
            <h2>
              Offer Price : <strike>6.5 Lakh</strike> 5.50 Lakhs
            </h2>
          </div>
          <div className="offerPackDivBody">
            <div className="offerPackDivLeftColumn">
              <h5>FOYER</h5>
              <p>Shoe rack – 100*75 cm</p>
              <h5>LIVING ROOM</h5>
              <p>Premium LCD display unit – 180 * 160 cm</p>
              <h5>DINING ROOM</h5>
              <p>
                6 Seater dining table with 12 mm clear glass top <br /> Hylo
                dining chair – 3 Nos <br /> 3 Seater dining bench – 1 No
              </p>
              <h5>MASTER BEDROOM</h5>
              <p>
                Soft close wardrobe – 150 * 210 cm <br /> Queen size bed with
                bottom Storage – 157*198 cm <br /> Bed side table (2 No) – 40*40
                cm
              </p>
            </div>
            <div className="offerPackDivRightColumn">
              <h5>KIDS ROOM</h5>
              <p>
                Soft close wardrobe – 150 X 210 cm <br /> Queen size bed with
                bottom Storage – 157*198 cm <br /> Bed side table (2 No) – 40*40
                cm
              </p>
              <h5>GUEST BEDROOM</h5>
              <p>
                Soft close wardrobe – 150 * 210 cm <br /> Queen size bed with
                bottom storage – 157*198 cm <br /> Bed side table (2 No) – 40*40
                cm
              </p>
              <h5>KITCHEN</h5>
              <p>
                Top cabinet – 304*60 cm, Bottom cabinet – 304*90 cm <br />{" "}
                Hettich (German Made – 15 year warranty) Accessories – 6 Nos*{" "}
                <br /> Hood and Hob – Faber
              </p>
            </div>
          </div>
          <div className="offerPackDivBottom">
            <h5>Hettich Premium Soft close Accessories(60cm)</h5>
            <p>
              Cutlary tray - Plain basket - Plate rack - Bottle pull out - Waste
              bin – Pull out Model - Detergent holder
            </p>
          </div>
        </div>

        <div className="offerPackDiv">
          <div className="offerPackDivHeader">
            <h2>LUXURY PACK</h2>
            <h2>
              Offer Price : <strike>11.60 Lakh</strike> 9 Lakhs
            </h2>
          </div>
          <div className="offerPackDivBody">
            <div className="offerPackDivLeftColumn">
              <h5>FOYER</h5>
              <p>Shoe rack and Ledges – 100*75 cm / 90*30 (1 No.)</p>
              <h5>LIVING ROOM</h5>
              <p>TV Unit with Black Glass Shutters – 180*120 cm</p>
              <p>Prayer Unit – 70*90 cm</p>
              <h5>DINING ROOM</h5>
              <p>6 Seater Dining Table with 25 mm Table Top</p>
              <p>Hylo Dining Chair – 3 Nos</p>
              <p>3 Seater Dining Bench – 1 No</p>
              <p>Custom made Living- Dining Partition – 180*270 cm</p>
              <h5>MASTER BEDROOM</h5>
              <p>Soft – Close Hinged Wardrobe up to Ceiling – 150*270 cm</p>
              <p>Dressing Unit- 60*75 cm</p>
              <p>Custom made Writing Table</p>
              <p>Books Cabinet with Paneling and Ledges – 150*270 cm</p>
              <p>King Size Bed with Bottom Storage – 189*198 cm</p>
              <p>Bed Side Table (2 Nos) – 40*40 cm</p>
            </div>
            <div className="offerPackDivRightColumn">
              <h5>KIDS ROOM</h5>
              <p>Soft – Close Hinged Wardrobe up to Ceiling – 150*270 cm</p>
              <p>Custom made Writing Table</p>
              <p>Books Cabinet with Paneling and Ledges – 125*200 cm</p>
              <p>Queen Size Bed with Bottom Storage – 159*198 cm</p>
              <p>Bed Side Table (2 Nos) – 40*40 cm</p>
              <h5>GUEST BEDROOM</h5>
              <p>Soft – Close Hinged Wardrobe – 150*210 cm</p>
              <p>Queen Size Bed – 159*198 cm</p>
              <p>Bed Side Table – 40*40 cm</p>
              <h5>KITCHEN</h5>
              <p>Top Cabinet – 450*60 cm</p>
              <p>Bottom Cabinet – 450*85 cm</p>
              <p>
                Hettich (German Made – 15 years Warranty) Accessories – 6 Nos
              </p>
              <p>Hood and Hob – Faber</p>
            </div>
          </div>
          <div className="offerPackDivBottom">
            <h5>Hettich Premium Soft Close Accessories(60cm)</h5>
            <p>
              Cutlery tray - Plain basket - Plate rack - Bottle pull out - Waste
              bin – Pull out Model - Detergent holder
            </p>
          </div>
        </div>

        {this.state.isEstimatePopupVisibleP && (
          <GetEstimateModal
            closeBtnClickChild={this.toggleEstimatePopupVisibilityP}
          />
        )}
      </div>
    );
  }
}

export default Packages;

// FOYER Shoe rack – 100*75 cm LIVING ROOM Premium LCD display unit – 180 * 160 cm DINING ROOM 6 Seater dining table with 12 mm clear glass top Hylo dining chair – 3 Nos 3 Seater dining bench – 1 No MASTER BEDROOM Soft close wardrobe – 150 * 210 cm Queen size bed with bottom Storage – 157*198 cm Bed side table (2 No) – 40*40 cm

// KIDS ROOM Soft close wardrobe – 150 X 210 cm Queen size bed with bottom Storage – 157*198 cm Bed side table (2 No) – 40*40 cm GUEST BEDROOM Soft close wardrobe – 150 * 210 cm Queen size bed with bottom storage – 157*198 cm Bed side table (2 No) – 40*40 cm KITCHEN Top cabinet – 304*60 cm, Bottom cabinet – 304*90 cm Hettich (German Made – 15 year warranty) Accessories – 6 Nos* Hood and Hob – Faber

// Hettich Premium Soft close Accessories(60cm) Cutlary tray - Plain basket - Plate rack - Bottle pull out - Waste bin – Pull out Model - Detergent holder
