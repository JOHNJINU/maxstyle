import {Component} from 'react';
import '../css/GetEstimateModal.css';
import icClose from '../img/ic_close.png';
import axios from 'axios';

class GetEstimateModal extends Component{

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
        this.sendEstimate = this.sendEstimate.bind(this);

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
    sendEstimate(e){
        e.preventDefault();
        console.log(this.state);

        let estimateData = {
            name:this.state.name,
            contactNumber:this.state.contactNumber,
            emailId:this.state.emailId,
            projectLocation:this.state.projectLocation,
            message:this.state.message
        }
        axios.post("http://192.168.64.2/admin/getEstimate.php", estimateData).then(response => {

        console.log(response);

        let contactUsStatusMessage = document.querySelector(".contactUsStatusMessage");
        let nonStatusItemsContainer = document.querySelector(".nonStatusItemsContainer");

            if(response.data.isEstimateSaved==true){
                
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
                nonStatusItemsContainer.classList.add("d-none");
                
                // after 2 seconds hide
                //this.props.closeBtnClickChild();

                setTimeout( ()=> {
                    this.props.closeBtnClickChild();
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
                {/* getEstimate section starts */}
                <div className="getEstimateContainer">
                    <div className="getEstimateTypingContainer">
                           
                                <p className="contactUsStatusMessage d-none"></p> 

                                <div className="nonStatusItemsContainer">
                                <img src={icClose} onClick={this.props.closeBtnClickChild}/>
                                <h5>GET AN ESTIMATE</h5>
                                <form onSubmit={this.sendEstimate}>
                                    <input type="text" name="personName" placeholder="NAME" value={this.state.name} onChange={this.handleName} required></input> 
                                    <br/>
                                    <input type="text" name="contactNumber" placeholder="CONTACT NUMBER" value={this.state.contactNumber} onChange={this.handleContactNumber} required></input>
                                    <br/>
                                    <input type="email" name="emailId" placeholder="EMAIL ID" value={this.state.emailId} onChange={this.handleEmailId} required></input>
                                    <br/>
                                    <input type="text" name="projectLocation" placeholder="PROJECT LOCATION" value={this.state.projectLocation} onChange={this.handleProjectLocation}></input>
                                    <br/>
                                    <textarea name="message" cols="30" rows="3"  placeholder="MESSAGE" value={this.state.message} onChange={this.handleMessage}></textarea>
                                    <br/>
                                    <input type="submit" value="Submit"/>
                                </form>
                                </div>
                            
                    </div>
                </div>
                {/* getEstimate section ends */}
            </div>
        )
    }
}

export default GetEstimateModal;