import {Component} from 'react';
import '../css/Gallery.css';
import icOfferStripBullet from '../img/ic_offer_strip_bullet.png';

import axios from 'axios';

class Gallery extends Component{

    
    constructor(props) {
        super(props);
        this.state = {
            arrayOfImages: []
        };
    }
    getUsersData() {
        axios
            .get("http://192.168.64.2/admin/api/getGalleryImages.php")
            .then(res => {
               this.setState({arrayOfImages:res.data})
            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }

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

                   { this.state.arrayOfImages.map((item) => (
                           
                        <img loading="lazy" src= {"http://192.168.64.2/admin/gallery_images/" + item.filename}  className="objectCoverImage"/> 
                       
                         ))
                   }

                </div>

                {/* gallery image container ends */}

            </div>
        )
    }

}

export default Gallery;