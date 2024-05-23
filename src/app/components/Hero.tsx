"use client"
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";


const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slideData = [
    {
      id: 0,
      img: "/bannner-1-webp",
      title: "Trending Item",
      mainTitle: "WOMEN LATEST FASHION SALE",
      price: "$20",
    },
    {
      id: 1,
      img: "/bannner-2-webp",
      title: "Trending Item",
      mainTitle: "WOMEN LATEST FASHION SALE",
      price: "$20",
    },
    {
      id: 2,
      img: "/bannner-3-webp",
      title: "Trending Item",
      mainTitle: "WOMEN LATEST FASHION SALE",
      price: "$20",
    },
  ];

  return (
    <div className="container pt-6 lg:pt-0">
      {/* <Slider {...settings}>
        {slideData.map((item) => (
          <Slide key={item.id} img={item.img} title={item.title} mainTitle={item.mainTitle} price={item.price} />
        ))}
      </Slider> */}
     
    </div>
  );
};

export default Hero;
