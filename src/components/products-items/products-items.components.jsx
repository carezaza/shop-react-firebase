import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useRouteMatch, useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { ReactComponent as CardIcon } from "../../assets/cart-icon.svg";
import { selectProductsByType } from "../../redux/products/products.selectors";
import { addItem } from "../../redux/cart/cart.actions";
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
  TitleContainer,
  SeeMore,
} from "./products.items.styles";

const ProductsItems = ({ type, products, addItemToCart }) => {

  const match = useRouteMatch();
  const { typeId } = useParams();
  return (
    <Fragment>
      <ProductsItemsContainer>
        <TitleContainer>
          <Title>{type}</Title>
          {typeId === undefined ? (
            <SeeMore to={`${match.path}/${type}`}>See more {">"}</SeeMore>
          ) : null}
        </TitleContainer>

        <ProductsBox>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImg bgImg={product.imageURL}>
                <NewLabel>New</NewLabel>
              </ProductImg>
              <ProductName to="/shop">
                <TextName>{product.name}</TextName>
              </ProductName>
              <ContainerAdding>
                <div>
                  <ProductPrice>
                    {product.price - (product.price * product.discount) / 100}฿
                  </ProductPrice>
                  <ProductDiscount>{product.price}฿</ProductDiscount>
                </div>
                <ButtonAddProduct onClick={() => addItemToCart(product)}>
                  <CardIcon />
                </ButtonAddProduct>
              </ContainerAdding>
            </ProductCard>
          ))}
        </ProductsBox>
      </ProductsItemsContainer>
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) =>
  createStructuredSelector({
    products: selectProductsByType(ownProps.type),
  });

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsItems);
