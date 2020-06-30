import React from "react";

import {
  MenuItemContainer,
  Title,
  Description,
  MenuCard,
  ImgContainer,
  SeemoreButton,
} from "./menu-item.styles";

const MenuItem = ({ title, description, backgroundURL, exampleURL }) => {
  return (
    <MenuItemContainer bgImg={backgroundURL}>
      <MenuCard>
        <Title>{title.toUpperCase()}</Title>
        <Description>{description}</Description>
        <ImgContainer bgImg={exampleURL}>
          <SeemoreButton>
            SEE MORE
            {/* <TextImg to="/">See more</TextImg> */}
          </SeemoreButton>
        </ImgContainer>
      </MenuCard>
    </MenuItemContainer>
  );
};

export default MenuItem;
