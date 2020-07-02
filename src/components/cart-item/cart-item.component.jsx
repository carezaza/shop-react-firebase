import React from "react";
import { connect } from 'react-redux'
import { removeItem, addItem, clearItem } from '../../redux/cart/cart.actions'
import {
  CartItemContainer,
  ImageItem,
  InformationContainer,
  NameAndRemoveContainer,
  QuantityAndPrice,
  IncreaseAndDecreaseButton,
  RemoveButton,
  NameLink,
} from "./cart-item.styles";

const CartItem = ({ item, addItem, removeItem, clearItem}) => {
  const { name, imageURL, quantity, realPrice } = item;
  return (
    <CartItemContainer>
      <ImageItem src={imageURL} />
      <InformationContainer>
        <NameAndRemoveContainer>
          <NameLink>{name}</NameLink>
          <RemoveButton onClick={() => clearItem(item)}>🗑</RemoveButton>
        </NameAndRemoveContainer>
        <QuantityAndPrice>
          <div style={{ color: "rgba(255, 255, 255,0.9)", fontWeight: "300" }}>
            <IncreaseAndDecreaseButton onClick={() => removeItem(item)}>-</IncreaseAndDecreaseButton>
            {quantity}
            <IncreaseAndDecreaseButton onClick={() => addItem(item)}>+</IncreaseAndDecreaseButton>
          </div>
          <div style={{ color: "rgba(255, 255, 255,0.9)", fontWeight: "300" }}>
            {realPrice} ฿
          </div>
        </QuantityAndPrice>
      </InformationContainer>
    </CartItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    clearItem: (item) => dispatch(clearItem(item)),
})

export default connect(null, mapDispatchToProps)(CartItem);
