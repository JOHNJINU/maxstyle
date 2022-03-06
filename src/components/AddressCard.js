import { Component } from "react";
import "../css/AddressCard.css";
import icLocation from "../img/ic_location.png";

class AddressCard extends Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="header">
          <h5>{this.props.header}</h5>
        </div>
        <div className="body">
          <p className="address">{this.props.address}</p>
          <p className="phone">{this.props.phone} </p>
          <p className="phone">{this.props.email} </p>
          <p className="phone">{this.props.website} </p>

          {this.props.website == "www.maxstyleinteriors.com" ? (
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

              <hr className="locationUnderline" />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default AddressCard;
