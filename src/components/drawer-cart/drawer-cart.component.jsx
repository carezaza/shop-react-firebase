import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleShowCart } from "../../redux/cart/cart.actions";
import { selectIsShow, selectCartItems, selectTotalPrice, selectQuantity } from "../../redux/cart/cart.selectors";
import {
  DrawerContainer,
  DrawerHeader,
  ButtonClose,
  DrawerBox,
  EmptyText,
  CheckOutContainer,
  CheckOutLeft,
  CheckOutRight,
  CheckoutButton,
} from "./drawer-cart.styles";
import CartItem from "../cart-item/cart-item.component";

const DrawerCart = ({ isShow, toggleShowCart, cartItems, totalPrice, quantity }) => {
  return (
    <DrawerBox show={isShow}>
      <DrawerHeader>
        <ButtonClose onClick={toggleShowCart}>{"<"} Back</ButtonClose>
      </DrawerHeader>
      <DrawerContainer>
        {cartItems.length === 0 ? (
          <EmptyText>Your cart is empty!</EmptyText>
        ) : (
          cartItems.map((item) => <CartItem item={item} />)
        )}
      </DrawerContainer>
      <CheckOutContainer>
        <CheckOutLeft>
          <p style={{ margin: 0 }}>Total</p>
          <p style={{ margin: 0 }}>quantity: <strong>{quantity}</strong></p>
          <p style={{ margin: 0 }}>price: <strong>{totalPrice}฿</strong></p>
        </CheckOutLeft>
        <CheckOutRight>
          <CheckoutButton>Check out</CheckoutButton>
        </CheckOutRight>
      </CheckOutContainer>
    </DrawerBox>
  );
};

const mapStateToProps = createStructuredSelector({
  isShow: selectIsShow,
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice,
  quantity: selectQuantity
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowCart: () => dispatch(toggleShowCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerCart);
