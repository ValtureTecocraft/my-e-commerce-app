import React from "react";
import Slider from "react-slick";
import { mainbanner_1, mainbanner_2 } from "../assets";
import { Link } from "react-router-dom";

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings} className="">
      <Link to={"/products"} className="">
        <img src={mainbanner_1} alt="banner1" />
      </Link>
      <Link to={"/products"} className="">
        <img src={mainbanner_2} alt="banner2" />
      </Link>
    </Slider>
  );
};

export default Banner;
