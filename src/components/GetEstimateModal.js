import {Component} from 'react';
import '../css/GetEstimateModal.css';
import icClose from '../img/ic_close.png';

class GetEstimateModal extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {/* getEstimate section starts */}
                <div className="getEstimateContainer">
                    <div className="getEstimateTypingContainer">

                        <img src={icClose} onClick={this.props.closeBtnClickChild}/>

                        <h5>GET AN ESTIMATE</h5>
                        <form>
                            <input type="text" name="personName" placeholder="NAME"></input> 
                            <br/>
                            <input type="text" name="contactNumber" placeholder="CONTACT NUMBER"></input>
                            <br/>
                            <input type="text" name="emailId" placeholder="EMAIL ID"></input>
                            <br/>
                            <input type="text" name="projectLocation" placeholder="PROJECT LOCATION"></input>
                            <br/>
                            <textarea name="message" cols="30" rows="3"  placeholder="MESSAGE"></textarea>
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