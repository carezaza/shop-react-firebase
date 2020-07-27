import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserOrder } from "../../redux/order/order.selectors";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@material-ui/core";
import { OrderInfoContainer } from "./order-info.styles";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import OrderCart from "../order-cart/order-cart.component";

const OrderInfo = ({ orders }) => {
  const [openCart, setOpenCart] = useState(false);
  const [items, setItems] = useState([]);

  const handleOpen = (cartItems) => {
    setOpenCart(true);
    setItems(cartItems);
  };
  return (
    <OrderInfoContainer>
      <Typography variant="h5" align="center">
        Order
      </Typography>
      <TableContainer
        component={Paper}
        style={{ margin: "10px", width: "100%" }}
      >
        <Table aria-label="order table">
          {orders.length === 0 ? (
            <TableHead>
              <TableRow>
                <TableCell align="center">Your order is empty.</TableCell>
              </TableRow>
            </TableHead>
          ) : (
            <Fragment>
              <TableHead>
                <TableRow>
                  <TableCell align="center">OrderId</TableCell>
                  <TableCell align="center">Address</TableCell>
                  <TableCell align="center">Shipment</TableCell>
                  <TableCell align="center">Paid</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Cart</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell align="center">{order.id}</TableCell>
                    <TableCell align="center">
                      <p>
                        {"บ้านเลขที่ " +
                          order.address.houseNo +
                          " หมู่ " +
                          order.address.villageNo}
                      </p>
                      <p>
                        {"ตำบล " +
                          order.address.district +
                          " อำเภอ " +
                          order.address.amphoe +
                          " จังหวัด " +
                          order.address.province +
                          " " +
                          order.address.zipcode}
                      </p>
                    </TableCell>
                    <TableCell align="center">
                      {order.status.shipment ? (
                        <CheckCircleIcon style={{ color: "green" }} />
                      ) : (
                        <HighlightOffIcon style={{ color: "red" }} />
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {order.status.paid ? (
                        <CheckCircleIcon style={{ color: "green" }} />
                      ) : (
                        <HighlightOffIcon style={{ color: "red" }} />
                      )}
                    </TableCell>
                    <TableCell align="center">{order.price + "฿"}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="secondary"
                        aria-label="see-cart"
                        onClick={() => handleOpen(order.cartItems)}
                      >
                        <ShoppingBasketIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Fragment>
          )}
        </Table>
      </TableContainer>
      <OrderCart
        open={openCart}
        handleClose={() => setOpenCart(false)}
        cartItems={items}
      />
    </OrderInfoContainer>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    orders: selectUserOrder(state.user.currentUser.id),
  });

export default connect(mapStateToProps)(OrderInfo);
