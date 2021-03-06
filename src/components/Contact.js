import {Component} from 'react';
import '../css/Contact.css';
import icCarousel1 from '../img/ic_enquiry_bg.png';

import AddressCard from './AddressCard';

class Contact extends Component{

    render(){
        return(
            <div>

                {/* {top bar starts} */}
                <div className="topQuadrantFirstBarAbout contactUsTopPortionText d-flex" >
                    <div className="firstBarHalfAbout">

                        <h4>Contact us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. 
                            Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</p>
                    </div>
                    <div className="secondBarHalfAbout">
                        <img src={icCarousel1} />
                    </div>
                </div>
                {/* {top bar ends} */}

                {/* enquiry section starts */}
                <div className="enquirySectionContainer">
                    <img className="imageEnquiry" src={icCarousel1} />
                    <div className="typingFieldContainer">
                        <h5>Enquiry</h5>
                        <form>
                            <input type="text" name="personName" placeholder="NAME"></input> 
                            <br/>
                            <input type="text" name="contactNumber" placeholder="CONTACT NUMBER"></input>
                            <br/>
                            <input type="text" name="emailId" placeholder="EMAIL ID"></input>
                            <br/>
                            <input type="text" name="projectLocation" placeholder="PROJECT LOCATION"></input>
                            <br/>
                            <textarea name="message" cols="30" rows="4"  placeholder="MESSAGE"></textarea>
                            <br/>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
                {/* enquiry section ends */}
                <p className="generalEnquiryText">For general enquiries - enquiry@maxstyleinteriors.com</p>

                <div className="addressCardContainer">
                    <div className="firstRow">
                        <AddressCard header="CORPORATE OFFICE, DUBAI" address={<>Dubai, UAE<br></br>Address Line 1 <br></br>Address Line 2<br></br>Address Line 3</>} phone="Phone: +971 123456780" />  
                        {/* direct html string wont be rendered as JSX so we send props like this inside empty tags fragment can be used but i didnt may be we have to import it,  */}
                        <AddressCard header="DUBAI" address={<>Dubai, UAE<br></br>Address Line 1 <br></br>Address Line 2<br></br>Address Line 3</>} phone="Phone: +971 123456780" />  
                    </div>
                    <div className="firstRow">
                        <AddressCard header="ALAPPUZHA" address={<>Dubai, UAE<br></br>Address Line 1 <br></br>Address Line 2<br></br>Address Line 3</>} phone="Phone: 123456780" />  
                        <AddressCard header="ALAPPUZHA, WAREHOUSE:" address={<>Dubai, UAE<br></br>Address Line 1 <br></br>Address Line 2<br></br>Address Line 3</>} phone="Phone: 123456780" />  
                    </div>
                </div>


            </div>
        )
    }

}

export default Contact;