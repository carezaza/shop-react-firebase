import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/collections/collections.selectors";

import {
  HomeContainer,
  CollectionsContainer,
  Title,
  MenusContainer,
  HappyText,
  HappyTextContainer,
  SeeMoreButton,
  ImgContainer,
} from "./homepage.styles";

const HomePage = ({ collections }) => {
  return (
    <HomeContainer>
      <CollectionsContainer>
        <Title>Clothing Shop</Title>
        <HappyTextContainer>
          <HappyText>
            <span role="img" aria-label="FreeDelivery">
              🚚
            </span>{" "}
            FreeDelivery
          </HappyText>
          <HappyText>
            <span role="img" aria-label="SaveCost">
              💸
            </span>{" "}
            SaveCost
          </HappyText>
          <HappyText>
            <span role="img" aria-label="HighQuality">
              🏆
            </span>{" "}
            HighQuality
          </HappyText>
        </HappyTextContainer>
        <MenusContainer>
          {collections.map((collection) => (
            <ImgContainer key={collection.id} bgImg={collection.image}>
              <SeeMoreButton to={`/shop/${collection.title}`}>
                Shop{" "}
                {collection.title.charAt(0).toUpperCase() +
                  collection.title.slice(1)}
              </SeeMoreButton>
            </ImgContainer>
          ))}
        </MenusContainer>
      </CollectionsContainer>
    </HomeContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(HomePage);
