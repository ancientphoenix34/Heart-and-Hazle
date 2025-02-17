import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Banner.css'
import img1  from '../../assets/banner1.jpg'
import img2 from '../../assets/banner2.jpg'
import img3 from '../../assets/banner3.jpg'



const Banner = () => {

    const settings = {
        dots: true,           // Show navigation dots
        infinite: true,       // Infinite looping
        speed: 3000,          // Slide transition speed
        slidesToShow: 1,     // Show 1 slide at a time
        slidesToScroll: 1,   // Scroll 1 slide at a time
        autoplay: true,      // Auto slide
        autoplaySpeed: 400, // Slide every 3s
      };

      const images = [
        img1,
        img2,
        img3
      ];

  return (
    <div className="banner">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="banner-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
  
export default Banner
