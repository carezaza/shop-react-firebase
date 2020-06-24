import React from "react";

import MenuItem from '../menu-item/menu-item.component'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CarouselContainer } from "./carousel-menus.styles";

function CarouselMenus() {
    var settings = {
        dots:true,
        autoplay:true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <CarouselContainer  {...settings}>
        <MenuItem />
    </CarouselContainer>
  );
}

export default CarouselMenus;
