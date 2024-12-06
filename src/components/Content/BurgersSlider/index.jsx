import { CustomNextArrow } from "./CustomNextArrow";

import cheeseBurger from "../../../assets/cheese-burger.png";
import onionTomatoBurger from "../../../assets/onion-tomato-burger.png";
import chickenBurger from "../../../assets/chicken-burger.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BurgersSlider = () => {
    var settings = {
      dots: false,
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <CustomNextArrow />
    };

    return (
      <Slider {...settings} className="w-[600px] h-[600px] mx-auto relative top-[-150px]">
        <div><img src={cheeseBurger} alt="Cheese burger"/></div>
        <div><img src={onionTomatoBurger} alt="Onion tomato burger" /></div>
        <div><img src={chickenBurger} alt="Chicken burger" /></div>
      </Slider>

    )
}