import {Component} from 'react';
import '../css/Home.css';
import icCarousel1 from '../img/carousel_img_1.png';
import icCarousel2 from '../img/carousel_img_2.png';
import icCarousel3 from '../img/carousel_img_3.png';
import icShakeHand from '../img/icShakeHand.png';
import icLogoWhyToChoose from '../img/icLogoWhyToChoose.png';
import icTestimonialPerson1 from '../img/ic_person_1.png';
import icTestimonialPerson2 from '../img/ic_person_2.png';
import icIso from '../img/ic_iso.png';
import icHome2 from '../img/ic_home_2.png';
import icHome3 from '../img/ic_home_3.png';
import icHome4 from '../img/ic_home_4.png';
import icHome5 from '../img/ic_home_5.png';
import {
  Link
} from 'react-router-dom';
import icOfferHome from '../img/ic_offer_home.png';
import axios from 'axios';

class Home extends Component{


  componentDidMount(){

    this.checkIfAnyOfferIsPresent();
    this.dummyApi();
  }

  checkIfAnyOfferIsPresent(){

    // if number of rows greater than or equal to 1 
    // then show this offerstrip

    let checkOfferStrip = document.querySelector(".offers_link_header");

    axios.get("http://192.168.64.2/admin/api/checkIfAnyOfferPresent.php")
    .then( res => {
        if(res.data.length >= 1){
          checkOfferStrip.style.display = 'block';

        }else{
          checkOfferStrip.style.display = 'none';
        }
    })

    
  }

  dummyApi (){
    axios.get("api/cubixitems")
    .then( res => {
        console.log(res);
    })
    .catch(e =>{
      console.log("error is " + e);
    })
  }

   render(){

    return(

        <div>
              <div>
              <Link to='/offers' className="offers_link_header" >
                <div className="headerOfferStrip text-center" >
                Check out the latest offers <img src={icOfferHome} />
                </div> 
                </Link>
              </div>

        {/* carousel starts */}
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner position-relative">
    <div class="carousel-item active">
      <img src={icCarousel1} class="d-block w-100" alt="..." />
      <div className="blackOverlayCarousel" ></div>
      <div class="carousel-caption d-md-block">
        <h5>Turn your interior into masterpiece.</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={icCarousel1} class="d-block w-100" alt="..." />
      <div className="blackOverlayCarousel" ></div>
      <div class="carousel-caption d-md-block">
        <h5>Create Memories</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={icCarousel1} class="d-block w-100" alt="..." />
      <div className="blackOverlayCarousel" ></div>
      <div class="carousel-caption d-md-block">
        <h5>Precise and artistic</h5>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <div className="prevIconContainer position-absolute"></div>
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <div className="prevIconContainer position-absolute"></div>
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
  <div className="offerBoardCarousel">
      <div className="innerBoxofferBoardCarousel">
        <h5> 35% LESS THAN <br/> RETAIL OUTLET </h5>
        <h5> FACTORY <br/> PRODUCTION </h5>
        <h5> DIRECT INSTALLATION </h5>
        <button type="button" className="btn btn-primary " >MORE OFFERS</button>
      </div>
  </div>
  <button type="button" className="btn btn-primary getEstimateButton" id="downloadBrochureButton" >DOWNLOAD BROCHURE</button>
</div>
{/* carousel ends */}


{/* quadrant block starts */}

<div className="firstBar d-flex row-fluid">
    <div className="firstHalf position-relative col-6">
        <h4 className="text-center">The trusted brand in Kerala</h4>
        <span className="d-block " >Over 20 years <br/> of experience</span>
        <img src={icShakeHand}/>
    </div> 
    <div className="secondHalf col-6">
        <img src={icCarousel2}/>
    </div>
</div>
<div className="secondBar d-flex row-fluid no-gutters">
   
    <div className="secondHalf col-6">
        <img src={icHome2}/>
    </div>
    <div className="firstHalf position-relative col-6">
        <h4 className="text-center">Our quality measures</h4>
        <span className="d-block" >An ISO 9001 <br/> certified Company</span>
        <img src={icIso}/>
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
            <img src={icHome3} className="w-50 objectCoverImage" />
            <h4 className="position-absolute"  >IMPORTED GOODS</h4>
            <p className="position-absolute" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat.</p>
            <button type="button" className="btn btn-primary getEstimateButton position-absolute" >EXPLORE</button>
        </div>
        <div className="position-relative">
            <img src={icHome4} className="w-50 objectCoverImage" />
            <h4 className="position-absolute">FINEST DETAILING</h4>
            <p className="position-absolute"  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat.</p>
            <button type="button" className="btn btn-primary getEstimateButton position-absolute" >EXPLORE</button>
        </div>
</div>
<div className="seondColumn col-4 ">
        <div className="position-relative">
        <img src={icHome5} className="w-100 objectCoverImage"/>
            <h4>COST EFFICIENT</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat.</p>
            <button type="button" className="btn btn-primary getEstimateButton position-absolute" style= { {bottom:'0px', left:'0px'} }>EXPLORE</button>
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
        <p className="position-absolute" style= { {top:'105px', left:'165px'} }>" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. "</p>
        </div>
        <div className="customerExperienceBox1 col-6 position-relative">
        <img src={icTestimonialPerson2} />
        <h5 className="position-absolute" style= { {top:'25px', left:'165px'} }>Mr Sabu Thomas <br/> Thrissur</h5>
        <hr className="testimonialLine position-absolute" style= { {top:'67px', left:'165px'} }/>
        <p className="position-absolute" style= { {top:'105px', left:'165px'} }>" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. "</p>
        </div>
    </div>
    <button type="button" className="btn btn-primary getEstimateButton " id="viewAllTestimonialsButton" >View All</button>

</div>



{/* customer experience ends */}

        </div>
    )
    }
}
   
export default Home;