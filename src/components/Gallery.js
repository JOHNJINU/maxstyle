import { useState } from "react";
import "../css/Gallery.css";
import icOfferStripBullet from "../img/ic_offer_strip_bullet.png";
import imagePool from "./imagePool";
import axios from "axios";

function Gallery() {
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [positionOfImage, setPositionOfImage] = useState(0);
  const closePopup = () => {
    setShowImagePopup(false);
  };

  const handleImageClick = (pOfImage) => {
    setPositionOfImage(pOfImage);
    console.log("image path with index is " + imagePool[pOfImage].src);
    setShowImagePopup(true);
  };

  return (
    <div className="Gallery-root-container">
      <div className="galleryTopSection">
        <h3 className="galleryHeading">Gallery</h3>

        {/* top advertisement bar starts */}

        <div className="offerStripAbout offerStripGallery">
          <div className=" innerOfferStripAbout d-flex">
            <span></span>
            <h5> OUR PRICE IS LESS THAN 35% </h5>
            <span></span>
            <h5> FACTORY PRODUCTION </h5>
            <span></span>
            <h5> DIRECT INSTALLATION </h5>
          </div>
        </div>

        {/* top advertisement bar ends */}
      </div>

      {/* gallery image container starts */}

      <div className="galleryImageContainer">
        {imagePool.map((item, index) => (
          <img
            loading="lazy"
            className="objectCoverImage Gallery-image-of-gallery"
            src={process.env.PUBLIC_URL + item.src}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {/* gallery image container ends */}
      {showImagePopup && (
        <div className="Gallery-outer-shadow-wrapper-container">
          <div className="Gallery-outer-shadow-container">
            <span onClick={closePopup}>CLOSE </span>
            <div>
              <img src={imagePool[positionOfImage].src} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
