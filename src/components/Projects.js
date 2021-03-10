import {Component} from 'react';
import '../css/Projects.css';
import icCarousel1 from '../img/carousel_img_1.png';
import icCarousel2 from '../img/carousel_img_2.png';
import icCarousel3 from '../img/carousel_img_3.png';
import icProjects2 from '../img/ic_projects_2.png';
import icProjects3 from '../img/ic_projects_3.png';

class Projects extends Component{

    render(){
        return(
            <div>
                
                {/* top banner starts */}

                <div className="topBannerProjects">
                    <h3 className="topBannerProjectsHeading">Our works</h3>
                    <p className="topBannerProjectsDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</p>
                </div>

                <div className="ourWorksImageContainer">
                   <img src={icCarousel3} />
                </div>

                {/* top banner ends */}

                {/* project list starts  */}

                <div className="projectListItemsContainer">

                    <div className="listItemOne">
                        <div className="left">
                            <h3>Apartment Interior,</h3>
                            <h3>Mr. Antony Varghese</h3> 
                            <h6>Panampilly Nagar</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</p>
                        </div>
                        <div className="right">
                            <img className="imageOne objectCoverImage" src={icCarousel2} />
                            <img className="imageTwo objectCoverImage"  src={icCarousel2} />
                            <img className="imageThree objectCoverImage"  src={icCarousel2} />
                        </div>
                    </div>

                    <div className="listItemOne secondItem">
                        <div className="left">
                            <h3>Home Interior, </h3>
                            <h3>Mr. Sabin Muhammad</h3> 
                            <h6>Vytilla</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</p>
                        </div>
                        <div className="right">
                            <img className="imageOne objectCoverImage" src={icProjects2} />
                            <img className="imageTwo objectCoverImage"  src={icProjects2} />
                            <img className="imageThree objectCoverImage"  src={icProjects2} />
                        </div>
                    </div>

                    <div className="listItemOne thirdItem">
                        <div className="left">
                            <h3>Apartment Interior, </h3>
                            <h3>Mr. Thomas Chacko</h3> 
                            <h6>Kottayam</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</p>
                        </div>
                        <div className="right">
                            <img className="imageOne objectCoverImage" src={icProjects3} />
                            <img className="imageTwo objectCoverImage"  src={icProjects3} />
                            <img className="imageThree objectCoverImage"  src={icProjects3} />
                        </div>
                    </div>

                </div>

                {/* project list ends */}
               
            </div>
        )
    }

}

export default Projects;