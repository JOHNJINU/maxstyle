import {Component} from 'react';
import Footer from './Footer';
import '../css/About.css';
import icCarousel1 from '../img/carousel_img_1.png';
import icOfferStripBullet from '../img/ic_offer_strip_bullet.png';

class About extends Component{

    render(){
        return(
            <div>
                
                {/* top quadrant starts */}

            <div className="topQuadrantAbout">
                
                <div className="topQuadrantFirstBarAbout d-flex" >
                    <div className="firstBarHalfAbout">

                        <h4>What we do?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. 
                            Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</p>
                    </div>
                    <div className="secondBarHalfAbout">
                        <img src={icCarousel1} />
                    </div>
                </div>
                <div className="topQuadrantSecondBarAbout d-flex">
                   
                    <div className="secondBarHalfAbout">
                        <img src={icCarousel1} />
                    </div>
                    <div className="firstBarHalfAbout">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. 
                            Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</p>
                    </div>
                </div>

            </div>
                {/* top quadrant ends */}

                {/* offer strip starts  */}

                <div className="offerStripAbout ">
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

                {/* offer strip ends */}
   
                <hr />

                {/* process work start  */}
                {/* process work end    */}

                <h3 className="ourFeatuesAboutTagline">As you saw the process is hassle free, time bound, and a memorable one.</h3>

                {/* about our features starts */}
                {/* about our features end */}



                <Footer />
            </div>
        )
    }

}

export default About;