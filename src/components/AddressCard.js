import {Component} from 'react';
import '../css/AddressCard.css';
import icLocation from '../img/ic_location.png';

class AddressCard extends Component {

    render(){

        return( 

            <div className="cardContainer">
                <div className="header">
                    <h5>CORPORATE OFFICE, DUBAI</h5>
                </div>
                <div className="body">
                    <p className="address">Dubai, UAE<br></br>Address Line 1 <br></br>Address Line 2<br></br>Address Line 3</p>
                    <p className="phone">Phone: +971 123456780 </p>
                    <a className="locationBlock" href="#"><div><img src={icLocation} /> LOCATION MAP  </div></a>
                </div>
                <hr className="locationUnderline"/>
            </div>
        )
    }

}

export default AddressCard;