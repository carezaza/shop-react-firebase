import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOrders } from "../../redux/order/order.selectors";
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
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import OrderCart from "../order-cart/order-cart.component";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DialogOkCancel from "../dialog-ok-cancel/dialog-ok-cancel.component";

const OrderForAdmin = ({ orders }) => {
  const [openCart, setOpenCart] = useState(false);
  const [items, setItems] = useState([]);
  const [del, setDel] = useState(false);

  const handleDelete = (user) => {
    setDel(true);
  };
  const handleOpenCart = (cartItems) => {
    setOpenCart(true);
    setItems(cartItems);
  };
  return (
    <div style={{ padding: 20 }}>
      <h3 style={{ textAlign: "center", color: "black" }}>
        In the progress...
      </h3>
      <Typography variant="h5" align="center">
        Orders
      </Typography>
      <TableContainer
        component={Paper}
        style={{ margin: "10px", width: "100%" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">OrderId</TableCell>
              <TableCell align="center">User</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Shipment</TableCell>
              <TableCell align="center">Paid</TableCell>
              <TableCell align="center">Cart</TableCell>
              <TableCell align="center">Edit / Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((o) => (
              <TableRow>
                <TableCell align="center">{o.id}</TableCell>
                <TableCell align="center">{o.userEmail}</TableCell>
                <TableCell align="center">
                  <p>
                    {"บ้านเลขที่ " +
                      o.address.houseNo +
                      " หมู่ " +
                      o.address.villageNo}
                  </p>
                  <p>
                    {"ตำบล " +
                      o.address.district +
                      " อำเภอ " +
                      o.address.amphoe +
                      " จังหวัด " +
                      o.address.province +
                      " " +
                      o.address.zipcode}
                  </p>
                </TableCell>
                <TableCell align="center">{o.price + "฿"}</TableCell>
                <TableCell align="center">
                  {o.status.shipment ? (
                    <CheckCircleIcon style={{ color: "green" }} />
                  ) : (
                    <HighlightOffIcon style={{ color: "red" }} />
                  )}
                </TableCell>
                <TableCell align="center">
                  {o.status.paid ? (
                    <CheckCircleIcon style={{ color: "green" }} />
                  ) : (
                    <HighlightOffIcon style={{ color: "red" }} />
                  )}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="secondary"
                    aria-label="see-cart"
                    onClick={() => handleOpenCart(o.cartItems)}
                  >
                    <ShoppingBasketIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton color="secondary" aria-label="edit-role">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    aria-label="delete-role"
                    onClick={handleDelete}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <OrderCart
          open={openCart}
          handleClose={() => setOpenCart(false)}
          cartItems={items}
        />
        <DialogOkCancel open={del} handleCancel={() => setDel(false)}>
          <div>
            <h4 style={{ margin: 0 }}>Delete order</h4>
            <p style={{ margin: "10px 0" }}>
              Are you sure to delete this order?
            </p>
          </div>
        </DialogOkCancel>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  orders: selectOrders,
});

export default connect(mapStateToProps)(OrderForAdmin);
