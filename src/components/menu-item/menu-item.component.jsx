import React from "react";

import {
  MenuItemContainer,
  DescriptionContainer,
  PreviewContainer,
  Title,
  Description,
  Image,
  Button,
} from "./menu-item.styles";

const MenuItem = () => {
  return (
    <MenuItemContainer>
      <DescriptionContainer>
        <Title>Title</Title>
        <Description>Description</Description>
      </DescriptionContainer>
      <PreviewContainer>
        <Image></Image>
        <Button>SHOP NOW</Button>
      </PreviewContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
