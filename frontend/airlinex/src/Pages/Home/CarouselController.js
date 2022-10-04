import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import "./CarouselController.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import image1 from "./../../assets/images/carousel1.jpg";
import image2 from "./../../assets/images/carousel2.jpg";
import image3 from "./../../assets/images/carousel3.jpg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";

// const CarouselController = (props) => {
// const settings = {
//     infinite: true,
//     dots: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     lazyLoad: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
// };

// return (
//     <>
//         <div className="imgslider">
//             <Slider {...settings}>
//                 {props.images.map((item) => (
//                     <div key={item.id}>
//                         <img src={item.src} alt={item.alt}/>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     </>
// )
// }

const CarouselController = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="row">
              <div className="col-8">
                <img src={image1} className="w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Booking a flight with us is easy</h5>
                  <p>Head over to our 'Book Now' link to explore more</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            {/* <img src={image2} class="d-block" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Booking a flight with us is easy</h5>
              <p>Head over to our 'Book Now' link to explore more</p>
            </div> */}
            <div className="row">
              <div className="col-8">
                <img src={image2} className="w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Booking a flight with us is easy</h5>
                  <p>Head over to our 'Book Now' link to explore more</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            {/* <img src={image3} class="d-block" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Become a member to enjoy exclusive benefits</h5>
              <p>Login to access premium offers and earn rewards </p>
            </div> */}
            <div className="row">
              <div className="col-8">
                <img src={image3} className="w-100"  alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Booking a flight with us is easy</h5>
                  <p>Head over to our 'Book Now' link to explore more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>
    </>
  );
};

export default CarouselController;
