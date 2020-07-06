import React from "react";
import Modal from "../modal/modal.component";
import { FormOrderCart, ProductImage } from "./order-cart.styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@material-ui/core/";
import CloseIcon from "@material-ui/icons/Close";

const OrderCart = ({ open, handleClose, cartItems }) => {
  return (
    <Modal open={open}>
      <FormOrderCart>
        <IconButton
          aria-label="close"
          style={{ marginLeft: "auto" }}
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Product</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="left">
                    <ProductImage src={item.imageURL} />
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">{item.realPrice + " ฿"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </FormOrderCart>
    </Modal>
  );
};

export default OrderCart;
