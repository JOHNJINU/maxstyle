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

            <hr className="hrLineourCapabilitiesOne" />
         
            {/* projects and years facility starts */}

            <div className="projectsYearsContainer">

                <div className="left">

                    <div className="secondBarHalfFeaturesAbout">
                        <img src={icCarousel1} />
                    </div>

                    <div className="firstBarHalfFeaturesAbout">
                        <h3>50</h3>
                        <h5>Projects per month.</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. 
                            Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</p>    
                    </div>
                   
                </div>

                <div className="center">
                    <hr/>
                </div>

                <div className="right">
                    <div className="firstBarHalfFeaturesAbout">
                        <h3>20</h3>
                        <h5>Years of experience.</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. 
                            Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</p>    
                    </div>
                    <div className="secondBarHalfFeaturesAbout">
                        <img src={icCarousel1} />
                    </div>
                </div>
            </div>

            {/* projects and years facility ends */}

            {/* hassle free experience starts */}
            <div className="hassleFreeContainer">
                <div className="firstSection">

                    <div className="firstImage">
                            <img src={icCarousel1} />
                        <div className="firstBarHalfFeaturesAbout">
                            <p>Our experienced professionals will make sure your idea is transformed into precise drawings.</p>    
                        </div>
                    </div>
                    <div className="secondImage">
                            <img src={icCarousel1} />
                        <div className="firstBarHalfFeaturesAbout">
                            <p>Since every material is pre-inspected and kept in our facility, there is no delay for production.</p>    
                        </div>
                    </div>
                    <div className="thirdImage">
                        <img src={icCarousel1} />
                        <div className="firstBarHalfFeaturesAbout">
                            <p>By producing at our own facility, with high end machinery, time and budget is always in check.</p>    
                        </div>
                    </div>

                </div>
                <div className="secondSection">

                </div>
                <div className="thirdSection">

                </div>
            </div>

            {/* hassle free experience ends */}
                <Footer />
            </div>
        )
    }

}

export default OurCapabilities;