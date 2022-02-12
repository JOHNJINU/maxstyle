import {Component} from 'react';
import '../css/OurCapabilities.css';
import icCapabilities1 from '../img/ic_capabilities_1.png';
import icCapabilities2 from '../img/ic_capabilities_2.png';
import icCapabilities3 from '../img/ic_capabilities_3.png';
import icCapabilities4 from '../img/ic_capabilities_4.png';
import icCapabilities5 from '../img/ic_capabilities_5.png';

import our_capabilities_1 from '../img/our_capabilities_1.JPG';
import our_capabilities_2 from '../img/our_capabilities_2.jpeg';
import our_capabilities_3 from '../img/our_capabilities_3.JPG';
import our_capabilities_4 from '../img/our_capabilities_4.jpg';
import our_capabilities_5 from '../img/our_capabilities_5.jpg';

class OurCapabilities extends Component{

    render(){
        return(
            <div>
                

            {/* quadrant block starts */}

            <div className="firstBarOurCapabilities d-flex row-fluid">
                <div className="firstHalf position-relative col-6">
                    <h4>Our infrastructure</h4>
                    <span className="d-block " >10,750 SqFt own production facility for assuring fast production and delivery. Superior German panel processing machines for best fit and finish. Skilled artisans, talented designers & dedicated management for making your home into a class apart.</span>
                </div> 
                <div className="secondHalf col-6">
                    <img src={our_capabilities_1} className="objectCoverImage"/>
                </div>
            </div>
            <div className="secondBarCapabilities d-flex row-fluid no-gutters">
                <div className="secondHalf col-6">
                    <img src={our_capabilities_2} className="objectCoverImage"/>
                </div>
                <div className="firstHalf position-relative col-6">
                    <span className="d-block" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</span>
                </div> 
            </div>

            {/* quadrant block ends  */}

            {/* production facility starts */}

            <div className="ourFeatuesCapabilitiesFirstBar d-flex">
                        <div className="firstBarHalfFeaturesCapabilities">
                            <h3>10,750 SqFt</h3>
                            <h5>Production facility.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. 
                            Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</p>
                            
                        </div>
                        <div className="secondBarHalfFeaturesCapabilities">
                            <img src={our_capabilities_3} className="objectCoverImage" />
                        </div>
                    </div>

             {/* production facility ends */}

            <hr className="hrLineourCapabilitiesOne" />
         
            {/* projects and years facility starts */}

            <div className="projectsYearsContainer">

                <div className="left">

                    <div className="secondBarHalfFeaturesAbout">
                        <img src={our_capabilities_4} className="objectCoverImage" />
                    </div>

                    <div className="firstBarHalfFeaturesCapabilities">
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
                    <div className="firstBarHalfFeaturesCapabilities">
                        <h3>20</h3>
                        <h5>Years of experience.</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. 
                            Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</p>    
                    </div>
                    <div className="secondBarHalfFeaturesAbout">
                        <img src={our_capabilities_5} className="objectCoverImage"/>
                    </div>
                </div>
            </div>

            {/* projects and years facility ends */}

            <h3 className="hassleFreeTagline">Want to know how this transforms to a hassle free experience?</h3>

            {/* hassle free experience starts */}
            <div className="hassleFreeContainer">
                <div className="firstSection">

                    <div className="firstImage">
                            <img src={icCapabilities1} />
                        <div className="firstBarHalfFeaturesCapabilities">
                            <p>Our experienced professionals will make sure your idea is transformed into precise drawings.</p>    
                        </div>
                    </div>
                    <div className="secondImage">
                            <img src={icCapabilities2} />
                        <div className="firstBarHalfFeaturesAbout">
                            <p>Since every material is pre-inspected and kept in our facility, there is no delay for production.</p>    
                        </div>
                    </div>
                    <div className="thirdImage">
                        <img src={icCapabilities3} />
                        <div className="firstBarHalfFeaturesAbout">
                            <p>By producing at our own facility, with high end machinery, time and budget is always in check.</p>    
                        </div>
                    </div>

                </div>
                <div className="secondSection">
                    <hr className="hrLineourCapabilitiesOne" />
                </div>
                <div className="thirdSection">
                    <div className="firstImage">
                            <img src={icCapabilities4} />
                        <div className="firstBarHalfFeaturesCapabilities">
                            <p>Installation is done with utmost precision and guidance.</p>    
                        </div>
                    </div>
                    <div className="center">
                        <hr/>
                    </div>
                    <div className="secondImage">
                            <img src={icCapabilities5} />
                        <div className="firstBarHalfFeaturesCapabilities">
                            <p>After sales service will be a pleasant experience.</p>    
                        </div>
                    </div>
                </div>
            </div>

            {/* hassle free experience ends */}
                
            </div>
        )
    }

}

export default OurCapabilities;