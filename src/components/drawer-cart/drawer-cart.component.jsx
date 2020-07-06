import React, { useRef } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleShowCart } from "../../redux/cart/cart.actions";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core/";
import {
  selectIsShow,
  selectCartItems,
  selectTotalPrice,
  selectQuantity,
} from "../../redux/cart/cart.selectors";
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
import { useOutsideAlerter } from "../utils.component";

const DrawerCart = ({
  isShow,
  toggleShowCart,
  cartItems,
  totalPrice,
  quantity,
}) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, toggleShowCart);
  return (
    <DrawerBox ref={isShow ? wrapperRef : null} show={isShow}>
      <DrawerHeader>
        <ButtonClose onClick={toggleShowCart}>{"<"} Back</ButtonClose>
      </DrawerHeader>
      <DrawerContainer>
        {cartItems.length === 0 ? (
          <EmptyText>Your cart is empty!</EmptyText>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </DrawerContainer>
      <CheckOutContainer>
        <CheckOutLeft>
          <p style={{ margin: 0 }}>Total</p>
          <p style={{ margin: 0 }}>
            quantity: <strong>{quantity}</strong>
          </p>
          <p style={{ margin: 0 }}>
            price: <strong>{totalPrice}฿</strong>
          </p>
        </CheckOutLeft>
        <CheckOutRight>
          <Link to="/checkout">
            <Button
              variant="contained"
              color="secondary"
              onClick={toggleShowCart}
            >
              Check out
            </Button>
          </Link>
        </CheckOutRight>
      </CheckOutContainer>
    </DrawerBox>
  );
};

const mapStateToProps = createStructuredSelector({
  isShow: selectIsShow,
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice,
  quantity: selectQuantity,
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowCart: () => dispatch(toggleShowCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerCart);
