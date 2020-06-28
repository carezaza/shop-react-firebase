import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/collections/collections.selectors";

import MenuItem from "../menu-item/menu-item.component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CarouselContainer } from "./carousel-menus.styles";

function CarouselMenus({ collections }) {
  var settings = {
    dots: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    lazyLoad: true,
  };

  return (
    <CarouselContainer {...settings}>
      {collections.map((collection) => (
        <MenuItem
          key={collection.id}
          title={collection.title}
          description={collection.description}
          backgroundURL={collection.backgroundImg}
          exampleURL={collection.exampleImg}
        />
      ))}
    </CarouselContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CarouselMenus);
