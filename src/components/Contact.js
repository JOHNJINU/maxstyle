import {Component} from 'react';
import Footer from './Footer';
import '../css/Contact.css';
import icCarousel1 from '../img/carousel_img_1.png';

import AddressCard from './AddressCard';

class Contact extends Component{

    render(){
        return(
            <div>

                <div className="addressCardContainer">
                    <div className="firstRow">
                        <AddressCard />
                        <AddressCard />
                    </div>
                    <div className="firstRow">
                        <AddressCard />
                        <AddressCard />
                    </div>
                </div>


                <Footer />
            </div>
        )
    }

}

export default Contact;