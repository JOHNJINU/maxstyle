import {Component} from 'react';
import Footer from './Footer';
import '../css/Gallery.css';
import icCarousel1 from '../img/carousel_img_1.png';
import icOfferStripBullet from '../img/ic_offer_strip_bullet.png';

class Gallery extends Component{

    render(){
        return(
            <div>
                
                <div className="galleryTopSection">

                <h3 className="galleryHeading">Gallery</h3>   

                {/* top advertisement bar starts */}

                <div className="offerStripAbout offerStripGallery">
                    <div className=" innerOfferStripAbout d-flex">
                        <img src={icOfferStripBullet} className="d-block" />
                        <h5> 35% LESS THAN RETAIL OUTLET </h5>
                        <img src={icOfferStripBullet} className="d-block" />
                        <h5> FACTORY PRODUCTION </h5>
                        <img src={icOfferStripBullet} className="d-block" />
                        <h5> DIRECT INSTALLATION </h5>
                        <button type="button" className="btn btn-primary moreBtnAbout" >MORE OFFERS</button>
                    </div>
                </div>

                {/* top advertisement bar ends */}
                </div>

                <Footer />
            </div>
        )
    }

}

export default Gallery;