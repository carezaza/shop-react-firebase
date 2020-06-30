import React from "react";
import { connect } from "react-redux";

import CarouselMenus from "../../components/carousel-menus/carousel-menus.component";

import { HomeContainer } from "./homepage.styles";

const HomePage = ({ error }) => {

  return (
    <HomeContainer>
        <CarouselMenus />
    </HomeContainer>
  );
};

const mapStateToProps = (state) => ({
  error: state.user.errorMessage,
});

export default connect(mapStateToProps)(HomePage);
