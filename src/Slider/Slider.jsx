import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';

const Slider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
      showArrows={true}
    >
      <div className="slide">
      <img src="https://vt-oliva.myshopify.com/cdn/shop/files/img_8_1.jpg?v=1714064431" alt="Slide 1" />
        <div className="overlay">
          <h2>NEW ARRIVALS</h2>
          <h1>Auto parts at reasonable prices</h1>
          <p>With constant discounts</p>
        </div>
      </div>
      <div className="slide">
      <img src="https://vt-oliva.myshopify.com/cdn/shop/files/img_6_1.jpg?v=1714064432" alt="Slide 2" />
        <div className="overlay">
          <h2>NEW ARRIVALS</h2>
          <h1>Auto parts at reasonable prices</h1>
          <p>With constant discounts</p>
        </div>
      </div>
      <div className="slide">
          <img src="https://vt-oliva.myshopify.com/cdn/shop/files/img_7_1.jpg?v=1714064432" alt="Slide 3" />
         <div className="overlay">
          <h2>NEW ARRIVALS</h2>
          <h1>Auto parts at reasonable prices</h1>
          <p>With constant discounts</p>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
