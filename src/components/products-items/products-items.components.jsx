import React, { Fragment } from "react";

import { ReactComponent as CardIcon } from "../../assets/cart-icon.svg";

import {
  ProductsItemsContainer,
  ProductsBox,
  ProductCard,
  Title,
  ProductImg,
  ProductName,
  TextName,
  ProductPrice,
  ButtonAddProduct,
  ContainerAdding,
  ProductDiscount,
  NewLabel,
} from "./products.items.styles";

const name =
  "adasdsaadasdsadsadadasdsadsadadasdsadsadadasdsadsadadasdsadsadadasdsadsadadasdsadsadadasdsadsaddsad";

const ProductsItems = () => {
  return (
    <Fragment>
      <ProductsItemsContainer>
        <Title>TITLE</Title>
        <ProductsBox>
          <ProductCard>
            <ProductImg>
              <NewLabel>New</NewLabel>
            </ProductImg>
            <ProductName to="/shop">
              <TextName>
                {name.length > 22 ? name.slice(0, 22) + "..." : name}
              </TextName>
            </ProductName>
            <ContainerAdding>
              <div>
                <ProductPrice>150฿</ProductPrice>
                <ProductDiscount>550฿</ProductDiscount>
              </div>
              <ButtonAddProduct>
                <CardIcon />
              </ButtonAddProduct>
            </ContainerAdding>
          </ProductCard>
        </ProductsBox>
      </ProductsItemsContainer>
    </Fragment>
  );
};

export default ProductsItems;
