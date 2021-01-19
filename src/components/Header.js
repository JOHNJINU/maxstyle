import {Component} from 'react';
import '../css/Header.css';
import icPhoneReceiver from '../img/ic_phone_receiver.png';
import icEmail from '../img/ic_email.png';
import icCompanyLogo from '../img/ic_company_logo.png';

class Header extends Component{
    render(){

        return(
            <div>
                <div className="headerStrip" >
                <span> For enquiries please call : <img src={icPhoneReceiver} /> INDIA - 0091 123 45678 90. UAE - 00971 123 4566 2123. <img src={icEmail} /> enquiry@maxstyleinteriors.com </span>
                </div>
                

                {/* navbar starts */}

                <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="navBarCompanyLogo" src={icCompanyLogo} alt="" width="30" height="24"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PACKAGES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">OUR CAPABILITIES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PROJECTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">GALLERY</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CAREERS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT</a>
        </li>
        <button type="button" className="btn btn-primary getEstimateButton">GET AN ESTIMATE</button>
      </ul>
    </div>
  </div>
</nav>
                {/* navbar ends */}
       

            </div>
        )
    }

}

export default Header;
