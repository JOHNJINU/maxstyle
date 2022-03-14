import { Component } from "react";
import "../css/AddressCard.css";
import icLocation from "../img/ic_arrow_location.png";

class AddressCard extends Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="header">
          <h5>{this.props.header}</h5>
        </div>
        <div className="body">
          <p className="address">{this.props.address}</p>

          {this.props.indexNumber != "1" ? (
            <div>
              <a
                className="locationBlock"
                href={this.props.locationUrl}
                target="_blank"
              >
                <div>
                  <img src={icLocation} /> LOCATION MAP{" "}
                </div>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default AddressCard;
