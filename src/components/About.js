import {Component} from 'react';
import '../css/About.css';
import icOfferStripBullet from '../img/ic_offer_strip_bullet.png';
import icMechanic from '../img/ic_mechanic.png';
import ic_requirement from '../img/ic_requirement.png';
import ic_quotation from '../img/ic_quotation.png';
import ic_advance from '../img/ic_advance.png';
import ic_confirm_design from '../img/ic_confirm_design.png';
import ic_suggestion from '../img/ic_suggestion.png';
import ic_design from '../img/ic_design.png';
import ic_right_arrow from '../img/ic_right_arrow.png';
import ic_down_arrow from '../img/ic_down_arrow.png';
import ic_left_arrow from '../img/ic_left_arrow.png';
import about_1 from '../img/about_1.jpg';
import about_2 from '../img/about_2.jpg';
import about_3 from '../img/about_3.jpg';
import about_4 from '../img/about_4.jpg';
import about_5 from '../img/about_5.jpg';
import about_6 from '../img/about_6.jpg';

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
                        <img src={about_1}  className="objectCoverImage"/>
                    </div>
                </div>
                <div className="topQuadrantSecondBarAbout d-flex">
                   
                    <div className="secondBarHalfAbout">
                        <img src={about_2} className="objectCoverImage"/>
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

                <div className="processContainerAbout">
                    <h3>How the process work</h3>
                    <p className="processParaInAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        
                        <div className="diagramBannerContainer">
                            <div className="diagramContainerAbout">

                                <div className="firstRowDiagramContainerAbout d-flex">

                                    <div className="blockDiagramContainerAbout">
                                        <img src={ic_requirement} className="d-block" />
                                        <p>Understanding the client requirement.</p>
                                    </div>
                                    <div className="arrowDiagramContainerAbout">
                                        <img src={ic_right_arrow}  />
                                    </div>
                                    <div className="blockDiagramContainerAbout">
                                        <img src={ic_quotation} className="d-block" />
                                        <p>A quotation is given.</p>
                                    </div>
                                    <div className="arrowDiagramContainerAbout">
                                        <img src={ic_right_arrow}  />
                                    </div>
                                    <div className="blockDiagramContainerAbout">
                                        <img src={ic_advance} className="d-block" />
                                        <p>Receiving an advance amount.</p>
                                    </div>
                                  
                                </div>

                                <div className="downArrowDiagramContainerAbout">
                                    <img src={ic_down_arrow}  />
                                </div>
                                

                                <div className="thirdRowDiagramContainerAbout d-flex">

                                    <div className="blockDiagramContainerAbout">
                                        <img src={ic_confirm_design} className="d-block" />
                                        <p>Confirm the design.</p>
                                    </div>
                                    <div className="arrowDiagramContainerAbout">
                                        <img src={ic_left_arrow}  />
                                    </div>
                                    <div className="blockDiagramContainerAbout">
                                        <img src={ic_suggestion} className="d-block" />
                                        <p>Client can also suggest their ideas.</p>
                                    </div>
                                    <div className="arrowDiagramContainerAbout">
                                        <img src={ic_left_arrow}  />
                                    </div>
                                    <div className="blockDiagramContainerAbout">
                                        <img src={ic_design} className="d-block" />
                                        <p>Design is presented to you.</p>
                                    </div>
                                  
                                </div>

                                <div className="downArrowDiagramContainerAbout downArrowLeftDiagramContainerAbout">
                                    <img src={ic_down_arrow}  />
                                </div>

                                <div className="fifthRowDiagramContainerAbout d-flex">
                                   
                                    <div className="blockDiagramContainerAbout">
                                            <img src={ic_confirm_design} className="d-block" />
                                            <p>Confirm the order.</p>
                                        </div>
                                        <div className="arrowDiagramContainerAbout">
                                            <img src={ic_right_arrow}  />
                                        </div>
                                        <div className="blockDiagramContainerAbout">
                                            <img src={ic_suggestion} className="d-block" />
                                            <p>Production at the factory.</p>
                                        </div>
                                        <div className="arrowDiagramContainerAbout">
                                            <img src={ic_right_arrow}  />
                                        </div>
                                        <div className="blockDiagramContainerAbout">
                                            <img src={ic_design} className="d-block" />
                                            <p>Delivering and installation at the site.</p>
                                        </div>
                                    
                                    </div>

                            </div>
                            <div className="bannerContainerAbout">
                                <div className="innerBoxbannerContainerAbout">
                                    <h4>LIFETIME <br /> SERVICE <br />  GUARANTEED</h4>
                                    <img src={icMechanic} />
                                </div>

                            </div>
                        </div>

                </div>

                <hr />
               
                {/* process work end    */}

                <h3 className="ourFeatuesAboutTagline">As you saw the process is hassle free, time bound, and a memorable one.</h3>

                {/* about our features starts */}

                <div className="ourFeatuesAbout">

                    <div className="ourFeatuesAboutFirstBar d-flex">
                        <div className="firstBarHalfFeaturesAbout">
                            <h3><span className="firstCapitalFeatureAbout">U</span>nique design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus nisl quis diam cursus, nec ultricies ligula aliquam. Mauris vel purus in nibh sollicitudin porta eu vitae eros. Proin pulvinar tellus nulla, eu pharetra est viverra quis.</p>
                            <button type="button" className="btn btn-primary readMoreButton">READ MORE</button>
                        </div>
                        <div className="secondBarHalfFeaturesAbout">
                            <img src={about_3} className="objectCoverImage"/>
                        </div>
                    </div>

                    <div className="ourFeatuesAboutSecondBar d-flex">
                        <div className="secondBarHalfFeaturesAbout">
                            <img src={about_4} className="objectCoverImage"/>
                        </div>
                        <div className="firstBarHalfFeaturesAbout">
                            <h3><span className="firstCapitalFeatureAbout">T</span>op-notch materials</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. 
                            Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</p>
                            <button type="button" className="btn btn-primary readMoreButton">READ MORE</button>
                        </div>
                    </div>

                    <div className="ourFeatuesAboutFirstBar d-flex" id="ourFeatuesAboutThirdBar">
                        <div className="firstBarHalfFeaturesAbout">
                            <h3><span className="firstCapitalFeatureAbout">S</span>killed employees</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</p>
                            <button type="button" className="btn btn-primary readMoreButton">READ MORE</button>
                        </div>
                        <div className="secondBarHalfFeaturesAbout">
                            <img src={about_5} className="objectCoverImage" />
                        </div>
                    </div>

                    <div className="ourFeatuesAboutSecondBar d-flex" id="ourFeatuesAboutFourthBar">
                        <div className="secondBarHalfFeaturesAbout">
                            <img src={about_6} className="objectCoverImage"/>
                        </div>
                        <div className="firstBarHalfFeaturesAbout">
                            <h3><span className="firstCapitalFeatureAbout">H</span>igh end machineries</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. 
                            Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</p>
                            <button type="button" className="btn btn-primary readMoreButton">READ MORE</button>
                        </div>
                    </div>

                </div>

                {/* about our features end */}

            </div>
        )
    }

}

export default About;