import {Component} from 'react';
import Footer from './Footer';
import '../css/About.css';
import icCarousel1 from '../img/carousel_img_1.png';

class Careers extends Component{

    render(){
        return(
            <div>
                
                <p>THis is careers</p>

                {/* top quadrant starts */}

                <div className="topQuadrantFirstBar d-flex" >
                    <div>

                    </div>
                    <div>
                        <img src={icCarousel1} />
                    </div>
                </div>
                <div className="topQuadrantSecondBar d-flex">
                    <div>

                    </div>
                </div>

                {/* top quadrant ends */}
                

                <Footer />
            </div>
        )
    }

}

export default Careers;