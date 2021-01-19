import {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import '../css/Home.css';
import icCarousel1 from '../img/carousel_img_1.png';
import icCarousel2 from '../img/carousel_img_2.png';
import icCarousel3 from '../img/carousel_img_3.png';
import icShakeHand from '../img/icShakeHand.png';
import icLogoWhyToChoose from '../img/icLogoWhyToChoose.png';
import icTestimonialPerson1 from '../img/ic_person_1.png';
import icTestimonialPerson2 from '../img/ic_person_2.png';


class Home extends Component{

   render(){

    return(

        <div>
            
        <Header />

        {/* carousel starts */}
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={icCarousel1} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={icCarousel2} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={icCarousel3} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
{/* carousel ends */}

{/* quadrant block starts */}

<div className="firstBar d-flex row-fluid">
    <div className="firstHalf position-relative col-6">
        <h4>The trusted brand in Kerala</h4>
        <span className="d-block" >Over 20 years <br/> of experience</span>
        <img src={icShakeHand}/>
    </div> 
    <div className="secondHalf col-6">
        <img src={icCarousel2}/>
    </div>
</div>
<div className="secondBar d-flex row-fluid no-gutters">
   
    <div className="secondHalf col-6">
        <img src={icCarousel2}/>
    </div>
    <div className="firstHalf position-relative col-6">
        <h4>Our quality measures</h4>
        <span className="d-block" >An ISO 9001 <br/> certified Company</span>
        <img src={icShakeHand}/>
    </div> 

</div>
{/* quadrant block ends  */}

<hr/>

{/* why to choose block starts */}

<div className="whyToChooseContainer text-center">
    <span className="tagLine">Why to choose <img src={icLogoWhyToChoose} /> ?</span>
</div>

<div className="whyToChooseContent d-flex row-fluid">

<div className="firstColumn col-8 ">
        <div className="position-relative">
            <img src={icCarousel1} className="w-50" />
            <h4 className="position-absolute"  style= { {top:'0px', left:'440px'} }>IMPORTED GOODS</h4>
            <p className="position-absolute" style= { {top:'40px', left:'440px'} } >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat.</p>
            <button type="button" className="btn btn-primary getEstimateButton position-absolute" style= { {bottom:'4px', left:'440px'} }>EXPLORE</button>
        </div>
        <div className="position-relative">
            <img src={icCarousel2} className="w-50" />
            <h4 className="position-absolute"  style= { {top:'0px', left:'440px'} }>FINEST DETAILING</h4>
            <p className="position-absolute" style= { {top:'40px', left:'440px'} } >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat.</p>
            <button type="button" className="btn btn-primary getEstimateButton position-absolute" style= { {bottom:'4px', left:'440px'} }>EXPLORE</button>
        </div>
</div>
<div className="seondColumn col-4 ">
        <div>
        <img src={icCarousel1} className="w-100"/>
            <h4>COST EFFICIENT</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat.</p>
            <button type="button" className="btn btn-primary getEstimateButton" style= { {bottom:'4px', left:'330px'} }>EXPLORE</button>
        </div>
</div>

</div>
{/* why to choose ends */}

<hr/>

{/* customer experience starts */}

<div className="customerExperienceContainer">
    <h4>CUSTOMER EXPERIENCES</h4>

    <div className="customerExperienceList">
        <div className="customerExperienceBox1 col-6 position-relative">
        <img src={icTestimonialPerson1} />
        <h5 className="position-absolute" style= { {top:'25px', left:'165px'} }>Mr Gautham Vasudev <br/> Vytilla</h5>
        <hr className="testimonialLine position-absolute" style= { {top:'67px', left:'165px'} }/>
        <p className="position-absolute" style= { {top:'105px', left:'165px'} }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat.</p>
        </div>
        <div className="customerExperienceBox1 col-6 position-relative">
        <img src={icTestimonialPerson2} />
        <h5 className="position-absolute" style= { {top:'25px', left:'165px'} }>Mr Sabu Thomas <br/> Thrissur</h5>
        <hr className="testimonialLine position-absolute" style= { {top:'67px', left:'165px'} }/>
        <p className="position-absolute" style= { {top:'105px', left:'165px'} }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat.</p>
        </div>
    </div>
    <button type="button" className="btn btn-primary getEstimateButton " id="viewAllTestimonialsButton" >View All</button>

</div>

{/* customer experience ends */}



        <Footer />

        </div>
    )
    }
}
   
export default Home;