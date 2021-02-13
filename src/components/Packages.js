import {Component} from 'react';
import Footer from './Footer';
import '../css/Packages.css';
import ic_warranty from '../img/ic_warranty.png';

class Packages extends Component{

    render(){
        return(
            <div>

                {/* top banner starts */}

                <div className="topBannerPackages">
                    <h3 className="topBannerPackagesHeading">Packages</h3>
                    <p className="topBannerPackagesDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero accumsan nisi dignissim feugiat. Vestibulum mollis, justo sed vulputate fermentum, augue dolor facilisis erat, sed venenatis mi velit ac enim.</p>
                </div>

                <div className="offerBoardPackages">
                    <div className="innerBoxofferBoardPackages">
                        <h5> 35% LESS THAN <br/> RETAIL OUTLET </h5>
                        <h5> FACTORY <br/> PRODUCTION </h5>
                        <h5> DIRECT INSTALLATION </h5>
                        <button type="button" className="btn btn-primary " >GET AN ESTIMATE</button>
                    </div>
                </div>

                {/* top banner ends */}

                <img src={ic_warranty} className="imgWarranty" />

                <h3 className="packageHeading">
                PACKAGE OFFERS
                </h3>

                <div className="offerPackDiv">
                    <div className="offerPackDivHeader">
                        <h2>ESSENTIAL PACK</h2>
                        <h2>Offer Price : 3.50 Lakhs</h2>
                    </div>
                    <div className="offerPackDivBody">
                    <div className="offerPackDivLeftColumn" >
                        <h5>
                        FOYER
                        </h5>
                        <p>
                        Shoe rack – 100*75 cm
                        </p>
                        <h5>
                        LIVING ROOM
                        </h5>
                        <p>
                        Premium LCD display unit – 180 * 160 cm
                        </p>
                        <h5>
                        DINING ROOM
                        </h5>
                        <p>
                        6 Seater dining table with 12 mm clear glass top <br/> Hylo dining chair – 3 Nos <br/> 3 Seater dining bench – 1 No
                        </p>
                        <h5>
                        MASTER BEDROOM
                        </h5>
                        <p>
                        Soft close wardrobe – 150 * 210 cm <br/> Queen size bed with bottom Storage – 157*198 cm <br/> Bed side table (2 No) – 40*40 cm
                        </p>
                    </div>
                    <div className="offerPackDivRightColumn" >
                        <h5>
                        KIDS ROOM
                        </h5>
                        <p>
                        Soft close wardrobe – 150 X 210 cm <br/> Queen size bed with bottom Storage – 157*198 cm <br/>  Bed side table (2 No) – 40*40 cm 
                        </p>
                        <h5>
                        GUEST BEDROOM 
                        </h5>
                        <p>
                        Soft close wardrobe – 150 * 210 cm <br/> Queen size bed with bottom storage – 157*198 cm <br/> Bed side table (2 No) – 40*40 cm
                        </p>
                        <h5>
                        KITCHEN
                        </h5>
                        <p>
                        Top cabinet – 304*60 cm, Bottom cabinet – 304*90 cm <br/> Hettich (German Made – 15 year warranty) Accessories – 6 Nos* <br/> Hood and Hob – Faber
                        </p>
                        
                    </div>
                    </div>
                    <div className="offerPackDivBottom">
                        <h5>
                        Hettich Premium Soft close Accessories(60cm)
                        </h5>
                        <p>
                        Cutlary tray - Plain basket - Plate rack - Bottle pull out - Waste bin – Pull out Model - Detergent holder
                        </p>
                    </div>
                </div>
                
                <div className="offerPackDiv">
                     <div className="offerPackDivHeader">
                        <h2>LUXURY PACK</h2>
                        <h2>Offer Price : 6.50 Lakhs</h2>  
                    </div> 
                    <div className="offerPackDivBody">
                    <div className="offerPackDivLeftColumn" >
                        <h5>
                        FOYER
                        </h5>
                        <p>
                        Shoe rack – 100*75 cm
                        </p>
                        <h5>
                        LIVING ROOM
                        </h5>
                        <p>
                        Premium LCD display unit – 180 * 160 cm
                        </p>
                        <h5>
                        DINING ROOM
                        </h5>
                        <p>
                        6 Seater dining table with 12 mm clear glass top <br/> Hylo dining chair – 3 Nos <br/> 3 Seater dining bench – 1 No
                        </p>
                        <h5>
                        MASTER BEDROOM
                        </h5>
                        <p>
                        Soft close wardrobe – 150 * 210 cm <br/> Queen size bed with bottom Storage – 157*198 cm <br/> Bed side table (2 No) – 40*40 cm
                        </p>
                    </div>
                    <div className="offerPackDivRightColumn" >
                        <h5>
                        KIDS ROOM
                        </h5>
                        <p>
                        Soft close wardrobe – 150 X 210 cm <br/> Queen size bed with bottom Storage – 157*198 cm <br/>  Bed side table (2 No) – 40*40 cm 
                        </p>
                        <h5>
                        GUEST BEDROOM 
                        </h5>
                        <p>
                        Soft close wardrobe – 150 * 210 cm <br/> Queen size bed with bottom storage – 157*198 cm <br/> Bed side table (2 No) – 40*40 cm
                        </p>
                        <h5>
                        KITCHEN
                        </h5>
                        <p>
                        Top cabinet – 304*60 cm, Bottom cabinet – 304*90 cm <br/> Hettich (German Made – 15 year warranty) Accessories – 6 Nos* <br/> Hood and Hob – Faber
                        </p>
                        
                    </div>
                    </div>
                    <div className="offerPackDivBottom">
                        <h5>
                        Hettich Premium Soft close Accessories(60cm)
                        </h5>
                        <p>
                        Cutlary tray - Plain basket - Plate rack - Bottle pull out - Waste bin – Pull out Model - Detergent holder
                        </p>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }

}

export default Packages;

// FOYER Shoe rack – 100*75 cm LIVING ROOM Premium LCD display unit – 180 * 160 cm DINING ROOM 6 Seater dining table with 12 mm clear glass top Hylo dining chair – 3 Nos 3 Seater dining bench – 1 No MASTER BEDROOM Soft close wardrobe – 150 * 210 cm Queen size bed with bottom Storage – 157*198 cm Bed side table (2 No) – 40*40 cm

// KIDS ROOM Soft close wardrobe – 150 X 210 cm Queen size bed with bottom Storage – 157*198 cm Bed side table (2 No) – 40*40 cm GUEST BEDROOM Soft close wardrobe – 150 * 210 cm Queen size bed with bottom storage – 157*198 cm Bed side table (2 No) – 40*40 cm KITCHEN Top cabinet – 304*60 cm, Bottom cabinet – 304*90 cm Hettich (German Made – 15 year warranty) Accessories – 6 Nos* Hood and Hob – Faber

// Hettich Premium Soft close Accessories(60cm) Cutlary tray - Plain basket - Plate rack - Bottle pull out - Waste bin – Pull out Model - Detergent holder