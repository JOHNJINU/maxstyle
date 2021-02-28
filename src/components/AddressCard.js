import {Component} from 'react';
import '../css/AddressCard.css';
import icLocation from '../img/ic_location.png';

class AddressCard extends Component {

    render(){

        return( 

            <div className="cardContainer">
                <div className="header">
                    <h5>{this.props.header}</h5>
                </div>
                <div className="body">
                    <p className="address">{this.props.address}</p>
                    <p className="phone">{this.props.phone} </p>
                    <a className="locationBlock" href="#"><div><img src={icLocation} /> LOCATION MAP  </div></a>
                </div>
                <hr className="locationUnderline"/>
            </div>
        )
    }

}

export default AddressCard;