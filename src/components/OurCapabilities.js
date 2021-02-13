import {Component} from 'react';
import Footer from './Footer';
import '../css/OurCapabilities.css';
import icCarousel1 from '../img/carousel_img_1.png';

class OurCapabilities extends Component{

    render(){
        return(
            <div>
                

            {/* quadrant block starts */}

            <div className="firstBar d-flex row-fluid">
                <div className="firstHalf position-relative col-6">
                    <h4>Our infrastructure</h4>
                    <span className="d-block " >10,750 SqFt own production facility for assuring fast production and delivery. Superior German panel processing machines for best fit and finish. Skilled artisans, talented designers & dedicated management for making your home into a class apart.</span>
                </div> 
                <div className="secondHalf col-6">
                    <img src={icCarousel1}/>
                </div>
            </div>
            <div className="secondBar d-flex row-fluid no-gutters">
                <div className="secondHalf col-6">
                    <img src={icCarousel1}/>
                </div>
                <div className="firstHalf position-relative col-6">
                    <span className="d-block" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</span>
                </div> 
            </div>

            {/* quadrant block ends  */}

            {/* production facility starts */}

            <div className="ourFeatuesAboutFirstBar d-flex">
                        <div className="firstBarHalfFeaturesAbout">
                            <h3>10,750 SqFt</h3>
                            <h5>Production facility.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. 
                            Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</p>
                            
                        </div>
                        <div className="secondBarHalfFeaturesAbout">
                            <img src={icCarousel1} />
                        </div>
                    </div>

             {/* production facility ends */}

                <Footer />
            </div>
        )
    }

}

export default OurCapabilities;