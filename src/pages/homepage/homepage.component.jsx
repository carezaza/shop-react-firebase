import React from "react";

import CarouselMenus from '../../components/carousel-menus/carousel-menus.component'

import { HomeContainer } from "./homepage.styles";

const HomePage = () => {
  return (
    <HomeContainer>
      <CarouselMenus />
    </HomeContainer>
  );
};

export default HomePage;