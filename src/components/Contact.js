import {Component} from 'react';
import '../css/Contact.css';
import icCarousel1 from '../img/ic_enquiry_bg.png';
import AddressCard from './AddressCard';
import axios from 'axios';

class Contact extends Component{

    constructor(props){
        super(props);

        this.state ={
            name:'',
            contactNumber:'',
            emailId:'',
            projectLocation:'',
            message:''
        };
        this.handleName = this.handleName.bind(this);
        this.handleContactNumber = this.handleContactNumber.bind(this);
        this.handleEmailId = this.handleEmailId.bind(this);
        this.handleProjectLocation = this.handleProjectLocation.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.sendCustomerEnquiry = this.sendCustomerEnquiry.bind(this);

    }

    handleName(e){
        this.setState({name: e.target.value});
    }
    handleContactNumber(e){
        this.setState({contactNumber: e.target.value});
    }
    handleEmailId(e){
        this.setState({emailId: e.target.value});
    }
    handleProjectLocation(e){
        this.setState({projectLocation: e.target.value});
    } 
    handleMessage(e){
        this.setState({message: e.target.value});
    }

    sendCustomerEnquiry(e){
        e.preventDefault();
        console.log(this.state);

        let estimateData = {
            name:this.state.name,
            contactNumber:this.state.contactNumber,
            emailId:this.state.emailId,
            projectLocation:this.state.projectLocation,
            message:this.state.message
        }
        axios.post("http://192.168.64.2/maxstylebackend/customerEnquiry.php", estimateData).then(response => {

        console.log(response);

        let contactUsStatusMessage = document.querySelector(".enquiryStatusMessage");

            if(response.data.isEnquirySaved==true){
                
                this.setState({
                    name:'',
                    contactNumber:'',
                    emailId:'',
                    projectLocation:'',
                    message:''
                });

                // if previous attempt was failed statusFailure class will be there, so remove it
                contactUsStatusMessage.classList.remove("statusFailure");

                contactUsStatusMessage.classList.remove("d-none");
                contactUsStatusMessage.classList.add("statusSuccess"); 
                contactUsStatusMessage.innerText = "Thank you for contacting us! We will be in touch with you shortly" ;
                
                // after 2 seconds hide
                //this.props.closeBtnClickChild();

                setTimeout( ()=> {
                    ///this.props.closeBtnClickChild();
                    contactUsStatusMessage.classList.add("d-none");
                }, 3000);

            }else{
                contactUsStatusMessage.classList.remove("d-none");
                contactUsStatusMessage.classList.add("statusFailure"); 
                contactUsStatusMessage.innerText = "Something went wrong. Please try again";
            }

        });
    }


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
                    <p className="enquiryStatusMessage d-none"></p> 
                        <h5>Enquiry</h5>
                        <form onSubmit={this.sendCustomerEnquiry}>
                            <input type="text" name="personName" placeholder="NAME" value={this.state.name} onChange={this.handleName}  required></input> 
                            <br/>
                            <input type="text" name="contactNumber" placeholder="CONTACT NUMBER" value={this.state.contactNumber} onChange={this.handleContactNumber} required></input>
                            <br/>
                            <input type="email" name="emailId" placeholder="EMAIL ID" value={this.state.emailId} onChange={this.handleEmailId} required></input>
                            <br/>
                            <input type="text" name="projectLocation" placeholder="PROJECT LOCATION" value={this.state.projectLocation} onChange={this.handleProjectLocation}></input>
                            <br/>
                            <textarea name="message" cols="30" rows="4"  placeholder="MESSAGE" value={this.state.message} onChange={this.handleMessage}></textarea>
                            <br/>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                {/* enquiry section ends */}
                <p className="generalEnquiryText">For general enquiries - enquiry@maxstyleinteriors.com</p>

                <div className="addressCardContainer">
                    <div className="firstRow">
                        <AddressCard header="CORPORATE OFFICE, UAE" address={<>Dubai, UAE<br></br>Address Line 1 <br></br>Address Line 2<br></br>Address Line 3</>} phone="Phone: +971 123456780" locationUrl="https://goo.gl/maps/KjuxVwMttrqdSnUR7" />  
                        {/* direct html string wont be rendered as JSX so we send props like this inside empty tags fragment can be used but i didnt may be we have to import it,  */}
                        <AddressCard header="DUBAI" address={<>Dubai, UAE<br></br>Address Line 1 <br></br>Address Line 2<br></br>Address Line 3</>} phone="Phone: +971 123456780" locationUrl="https://goo.gl/maps/KjuxVwMttrqdSnUR7" />  
                    </div>
                    <div className="firstRow">
                        <AddressCard header="CORPORATE OFFICE, KERALA" address={<>Dubai, UAE<br></br>Address Line 1 <br></br>Address Line 2<br></br>Address Line 3</>} phone="Phone: 123456780" locationUrl="https://goo.gl/maps/KjuxVwMttrqdSnUR7"  />  
                        <AddressCard header="FACTORY" address={<>Dubai, UAE<br></br>Address Line 1 <br></br>Address Line 2<br></br>Address Line 3</>} phone="Phone: 123456780" locationUrl="https://goo.gl/maps/KjuxVwMttrqdSnUR7"  />  
                    </div>
                </div>


            </div>
        )
    }

}

export default Contact;