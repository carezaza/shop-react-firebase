import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../redux/cart/cart.selectors";
import {
  selectIsPending,
  selectSuccess,
} from "../../redux/order/order.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
  OrderContainer,
  Title,
  SelectContainer,
  SelectTitle,
  SelectBox,
  BottomContainer,
} from "./order-confirm.styles";
import { createOrderStart } from "../../redux/order/order.actions";
import AddressBox from "../../components/address-box/address-box.component";
import {
  Radio,
  Button,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Typography,
} from "@material-ui/core/";
import Spinner from "../../components/spinner/spinner.component";
import CreateOrderSuccess from '../../pages/create-order-success/create-order-success.componnent'

const OrderConfirm = ({
  cartItems,
  totalPrice,
  currentUser,
  isPendingOrder,
  createOrderStart,
  selectSuccess,
  successOrder,
}) => {
  const [order, setOrder] = useState({
    userId: currentUser.id,
    userEmail: currentUser.email,
    cartItems: cartItems,
    address: "0",
    price: totalPrice + 50,
    shipment: "express",
    payment: "bank transfer",
  });

  const { address, price, shipment, payment } = order;

  const handleConfirm = () => {
    const realAddress = currentUser.address[address];
    if (!realAddress) {
      alert("Please select address for shipping!");
      return;
    }
    createOrderStart({ ...order, address: realAddress });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "shipment") {
      if (value === "registered") {
        setOrder((state) => ({ ...state, price: state.price - 25 }));
      } else {
        setOrder((state) => ({ ...state, price: state.price + 25 }));
      }
    }
    setOrder((state) => ({ ...state, [name]: value }));
  };
  if (successOrder) return <CreateOrderSuccess />;
  if (cartItems.length === 0) return <Redirect to="/checkout" />;
  return isPendingOrder ? (
    <Spinner />
  ) : (
    <OrderContainer>
      <Title>Order Confirm</Title>
      <SelectContainer>
        <SelectTitle>Select address</SelectTitle>
        <SelectBox>
          <AddressBox handleChange={handleChange} value={address} />
        </SelectBox>
      </SelectContainer>
      <SelectContainer>
        <SelectTitle>Payment</SelectTitle>
        <SelectBox>
          <FormControl component="fieldset" style={{ padding: 10 }}>
            <RadioGroup
              aria-label="payment"
              name="payment"
              onChange={handleChange}
              value={payment}
            >
              <FormControlLabel
                value="bank transfer"
                control={<Radio />}
                label="Bank transfer"
              />
              <FormControlLabel
                value="cash on delivery"
                control={<Radio />}
                label="Cash on delivery"
              />
            </RadioGroup>
          </FormControl>
        </SelectBox>
      </SelectContainer>
      <SelectContainer>
        <SelectTitle>Shipment</SelectTitle>
        <SelectBox>
          <FormControl component="fieldset" style={{ padding: 10 }}>
            <RadioGroup
              aria-label="shipment"
              name="shipment"
              value={shipment}
              onChange={handleChange}
            >
              <FormControlLabel
                value="express"
                control={<Radio />}
                label="Express (+50฿)"
              />
              <FormControlLabel
                value="registered"
                control={<Radio />}
                label="Registered (+25฿)"
              />
            </RadioGroup>
          </FormControl>
        </SelectBox>
      </SelectContainer>
      <BottomContainer>
        <div>
          <Typography variant="h4" component="h5">
            Total
          </Typography>
          <Typography variant="h6">
            Price: <strong>{price}฿</strong>{" "}
            <small>(prices included shipping)</small>
          </Typography>
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ margin: "10px 0" }}
          onClick={handleConfirm}
        >
          Confirm order
        </Button>
      </BottomContainer>
    </OrderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice,
  currentUser: selectCurrentUser,
  isPendingOrder: selectIsPending,
  successOrder: selectSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  createOrderStart: (order) => dispatch(createOrderStart(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirm);
