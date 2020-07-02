import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleShowCart } from "../../redux/cart/cart.actions";
import { ButtonCart, ShopCart } from "./cart.styles";
import { selectQuantity } from "../../redux/cart/cart.selectors";

const Cart = ({ toggleShowCart,ItemsQuantity }) => {
  return (
    <ButtonCart onClick={toggleShowCart}>
      <ShopCart />
      <div>{ItemsQuantity}</div>
    </ButtonCart>
  );
};

const mapStateToProps = createStructuredSelector({
  ItemsQuantity: selectQuantity,
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowCart: () => dispatch(toggleShowCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
