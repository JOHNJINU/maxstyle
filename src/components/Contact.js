import { Component } from "react";
import "../css/Contact.css";
import AddressCard from "./AddressCard";
import axios from "axios";
import contact_1 from "../img/contact_1.jpg";
import contact_2 from "../img/contact_2.jpg";
import icFacebook from "../img/ic_facebook.png";
import icInstagram from "../img/ic_instagram.png";

import Site1 from "../img/Site1.jpg";
import Site2 from "../img/Site2.jpg";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      contactNumber: "",
      emailId: "",
      projectLocation: "",
      message: "",
    };
    this.handleName = this.handleName.bind(this);
    this.handleContactNumber = this.handleContactNumber.bind(this);
    this.handleEmailId = this.handleEmailId.bind(this);
    this.handleProjectLocation = this.handleProjectLocation.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.sendCustomerEnquiry = this.sendCustomerEnquiry.bind(this);
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }
  handleContactNumber(e) {
    this.setState({ contactNumber: e.target.value });
  }
  handleEmailId(e) {
    this.setState({ emailId: e.target.value });
  }
  handleProjectLocation(e) {
    this.setState({ projectLocation: e.target.value });
  }
  handleMessage(e) {
    this.setState({ message: e.target.value });
  }

  sendCustomerEnquiry(e) {
    e.preventDefault();
    console.log(this.state);

    let estimateData = {
      name: this.state.name,
      contactNumber: this.state.contactNumber,
      emailId: this.state.emailId,
      projectLocation: this.state.projectLocation,
      message: this.state.message,
    };
    axios
      .post("http://192.168.64.2/admin/api/customerEnquiry.php", estimateData)
      .then((response) => {
        console.log(response);

        let contactUsStatusMessage = document.querySelector(
          ".enquiryStatusMessage"
        );

        if (response.data.isEnquirySaved == true) {
          this.setState({
            name: "",
            contactNumber: "",
            emailId: "",
            projectLocation: "",
            message: "",
          });

          // if previous attempt was failed statusFailure class will be there, so remove it
          contactUsStatusMessage.classList.remove("statusFailure");

          contactUsStatusMessage.classList.remove("d-none");
          contactUsStatusMessage.classList.add("statusSuccess");
          contactUsStatusMessage.innerText =
            "Thank you for contacting us! We will be in touch with you shortly";

          // after 2 seconds hide
          //this.props.closeBtnClickChild();

          setTimeout(() => {
            ///this.props.closeBtnClickChild();
            contactUsStatusMessage.classList.add("d-none");
          }, 3000);
        } else {
          contactUsStatusMessage.classList.remove("d-none");
          contactUsStatusMessage.classList.add("statusFailure");
          contactUsStatusMessage.innerText =
            "Something went wrong. Please try again";
        }
      });
  }

  render() {
    return (
      <div className="Contact-root-container">
        {/* {top bar starts} */}

        {/* {top bar ends} */}

        {/* enquiry section starts */}
        <div className="enquirySectionContainer">
          <img className="imageEnquiry" src={Site2} />
          <div className="typingFieldContainer">
            <p className="enquiryStatusMessage d-none"></p>
            <h5>Enquiry</h5>
            <form onSubmit={this.sendCustomerEnquiry}>
              <input
                type="text"
                name="personName"
                placeholder="NAME"
                value={this.state.name}
                onChange={this.handleName}
                required
              ></input>
              <br />
              <input
                type="text"
                name="contactNumber"
                placeholder="CONTACT NUMBER"
                value={this.state.contactNumber}
                onChange={this.handleContactNumber}
                required
              ></input>
              <br />
              <input
                type="email"
                name="emailId"
                placeholder="EMAIL ID"
                value={this.state.emailId}
                onChange={this.handleEmailId}
                required
              ></input>
              <br />
              <input
                type="text"
                name="projectLocation"
                placeholder="PROJECT LOCATION"
                value={this.state.projectLocation}
                onChange={this.handleProjectLocation}
              ></input>
              <br />
              <textarea
                name="message"
                cols="30"
                rows="4"
                placeholder="MESSAGE"
                value={this.state.message}
                onChange={this.handleMessage}
              ></textarea>
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        {/* enquiry section ends */}
        <p className="generalEnquiryText">
          For general enquiries - enquiry@maxstyleinteriors.com
        </p>

        <div className="addressCardContainer">
          <div className="firstRow">
            <AddressCard
              header="Sales Office, KERALA"
              address={
                <>
                  Prasidhi Maxstyle Interiors <br></br>
                  A.S. Canal Road<br></br>
                  Kalappura North P.O.<br></br>
                  Alappuzha, 688 007<br></br>
                  Kerala
                </>
              }
              phone="Tel: +91 751 02 44 440"
              email="Email: enquiry@maxstyleinteriors.com"
              website="www.maxstyleinteriors.com"
              locationUrl="https://goo.gl/maps/KjuxVwMttrqdSnUR7"
            />
            <AddressCard
              header="FACTORY, KERALA"
              address={
                <>
                  Prasidhi Maxstyle Interiors <br></br>
                  No. 13/263 A Deshabhimani Road<br></br>
                  S.L. Puram P.O. <br></br>
                  Alappuzha, 688 007
                  <br></br>
                  Kerala<br></br>
                </>
              }
              locationUrl=""
            />

            <AddressCard
              header="OFFICE, UAE"
              address={
                <>
                  38/ F 9. <br></br>
                  P.O. Box: 51942<br></br>
                  HFZ-1<br></br>
                  Sharjah- U.A.E<br></br>
                  Tele:+ 971 52 56 44 009
                </>
              }
            />
          </div>
        </div>

        <div className="ContactUs-number-social-media-container container text-center">
          <label>
            Call us on <span>Kerala: +91 751 02 44 440 </span>{" "}
            <span>UAE: +971 52 56 44 009</span>
          </label>
          <p className="mt-4">
            For latest update, follow<br></br>{" "}
            <div className="ContactUs-follow-icon mt-4">
              <img src={icFacebook} /> @Prasidhi Maxstyle Home Interiors{" "}
            </div>
            <div className="ContactUs-follow-icon mt-4">
              <img src={icInstagram} /> @Maxstyle_home_interiors
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
