import {Component} from 'react';
import '../css/Footer.css'
import icDotPattern from '../img/ic_dot_pattern.png';
import icLogo from '../img/ic_astiea_logo.png';
import icFacebook from '../img/ic_facebook.png';
import icInstagram from '../img/ic_instagram.png';

class Footer extends Component{

    render(){


        return(
            <div>

                {/* pattern and logo container starts */}
                <div className="patternLogoContainer">

                    <div className="patternLogoContainerImages d-flex">
                        <img src={icDotPattern} id="icPattern" className="d-block"/>
                        <div className="d-flex flex-column">
                        <p className="fromText">from</p>    
                        <img src={icLogo} id="icAstiea" className="d-block"/>
                        </div>
                    </div>

                </div>
                 {/* pattern and logo container ends */}

                {/* bottom rectangle starts */}
                <div className="bottomRectangle d-flex">

                    <div className="firstColumn col-4">
                        <p>Ready to make your interiors <br/> a piece of art?</p>
                        <button type="button" className="btn btn-primary getEstimateButton">GET AN ESTIMATE</button>
                    </div>
                    <div className="secondColumn col-4">
                        <p>+91 1234567890</p>
                        <p>+91 1234567890</p>
                        <span>Follow us </span>
                        <img src={icFacebook} />
                        <img src={icInstagram} />
                    </div>
                    <div className="thirdColumn col-4">
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Packages</li>
                            <li>Capabilities</li>
                        </ul>
                        <ul>
                            <li>Projects</li>
                            <li>Gallery</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                </div>
                {/* bottom rectangle ends */}

            </div>
        )

    }

}

export default Footer;