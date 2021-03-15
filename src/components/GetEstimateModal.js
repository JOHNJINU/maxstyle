import {Component} from 'react';
import '../css/GetEstimateModal.css';
import icClose from '../img/ic_close.png';

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
    }

    render(){
        return(
            <div>
                {/* getEstimate section starts */}
                <div className="getEstimateContainer">
                    <div className="getEstimateTypingContainer">

                        <img src={icClose} onClick={this.props.closeBtnClickChild}/>

                        <h5>GET AN ESTIMATE</h5>
                        <form onSubmit={this.sendEstimate}>
                            <input type="text" name="personName" placeholder="NAME" value={this.state.name} onChange={this.handleName}></input> 
                            <br/>
                            <input type="text" name="contactNumber" placeholder="CONTACT NUMBER" value={this.state.contactNumber} onChange={this.handleContactNumber}></input>
                            <br/>
                            <input type="text" name="emailId" placeholder="EMAIL ID" value={this.state.emailId} onChange={this.handleEmailId}></input>
                            <br/>
                            <input type="text" name="projectLocation" placeholder="PROJECT LOCATION" value={this.state.projectLocation} onChange={this.handleProjectLocation}></input>
                            <br/>
                            <textarea name="message" cols="30" rows="3"  placeholder="MESSAGE" value={this.state.message} onChange={this.handleMessage}></textarea>
                            <br/>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
                {/* getEstimate section ends */}
            </div>
        )
    }
}

export default GetEstimateModal;