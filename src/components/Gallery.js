import {Component} from 'react';
import '../css/Gallery.css';
import icCarousel1 from '../img/carousel_img_1.png';
import icOfferStripBullet from '../img/ic_offer_strip_bullet.png';
import icGallery1 from '../img/ic_gallery_1.png';
import icCarousel2 from '../img/carousel_img_2.png';
import icCarousel3 from '../img/carousel_img_3.png';
import icProjects2 from '../img/ic_projects_2.png';
import icProjects3 from '../img/ic_projects_3.png';

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

                {/* gallery image container starts */}
                
                <div className="galleryImageContainer">
                    <img loading="lazy" src={icProjects3}/>
                    <img loading="lazy"  src={icCarousel2}/>
                    <img  loading="lazy" src={icCarousel3}/>
                    <img  loading="lazy" src={icProjects2}/>
                    <img  loading="lazy" src={icGallery1}/>
                    <img  loading="lazy" src={icCarousel1}/>
                </div>

                {/* gallery image container ends */}

            </div>
        )
    }

}

export default Gallery;