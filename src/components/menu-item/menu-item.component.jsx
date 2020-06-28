import React from "react";

import {
  MenuItemContainer,
  Title,
  Description,
  Image,
  Button,
  MenuCard,
  ImgContainer,
  Middle,
  TextImg,
} from "./menu-item.styles";

const MenuItem = ({ title, description, backgroundURL, exampleURL }) => {
  

  return (
    <MenuItemContainer bgImg={backgroundURL}>
      <MenuCard>
        <Title>{title.toUpperCase()}</Title>
        <Description>{description}</Description>
        <ImgContainer>
          <Image src={exampleURL} />
          <Middle>
            <TextImg to="/">See more</TextImg>
          </Middle>
        </ImgContainer>
        <Button>SHOP NOW</Button>
      </MenuCard>
    </MenuItemContainer>
  );
};

export default MenuItem;
