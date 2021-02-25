import {Component} from 'react';
import Footer from './Footer';
import '../css/Projects.css';
import icCarousel1 from '../img/carousel_img_1.png';

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
                   <img src={icCarousel1} />
                </div>

                {/* top banner ends */}
                

                <Footer />
            </div>
        )
    }

}

export default Projects;