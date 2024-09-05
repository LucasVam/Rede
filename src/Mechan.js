import React from "react";

import './App.css';
import img_1 from '../src/assets/img_1.png'
import img_2 from '../src/assets/img_2.png'
import img_3 from '../src/assets/img_3.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Mark = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true
    
  };

  return (
    <div style={{ width: "30%", margin: "0 auto" }} className='container'>
      <Slider {...settings}>
        <div className='divimg1'>
          <img src={img_1} alt="Imagem 1" style={{ width: "100%"}} className='img1'  />
        </div>
        <div className='divimg2'>
          <img src={img_2} alt="Imagem 2" style={{ width: "100%" }} className='img2' />
        </div>
        <div className='divimg3' >
          <img src={img_3} alt="Imagem 3" style={{ width: "100%" }} className='img3' />
        </div>
      </Slider>
    </div>
  );
};

export default Mark;
  