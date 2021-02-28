import {Component} from 'react';
import Footer from './Footer';
import '../css/Careers.css';
import icCarousel1 from '../img/carousel_img_1.png';

class Careers extends Component{

    render(){
        return(
            <div>
                <h3 className="careerHeading">Careers</h3>                
                <div className="careerBar">
                    <img src={icCarousel1} />
                    <div className="careerBarText">
                        <p className="careerBarTextContent" >If you believe you can bring more value to our team,</p>
                        <span className="careerBarTextTagLine">Send your resume to</span>
                        <span className="careerBarTextMailId">abc@abc.com</span>
                        <hr className="careerBarTextMailIdUnderLine"/>
                    </div>
                    
                </div>
                <Footer />
            </div>
        )
    }

}

export default Careers;