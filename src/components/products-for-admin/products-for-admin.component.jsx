import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectProducts,
  selectIsPending,
} from "../../redux/products/products.selectors";
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
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { ProductImage } from "./products.for-admin.styles";
import DialogOkCancel from "../dialog-ok-cancel/dialog-ok-cancel.component";

const ProductsForAdmin = ({ products, isPending }) => {
  const [del, setDel] = useState(false);

  const handleDelete = (user) => {
    setDel(true);
  };
  return (
    <div style={{ padding: 20 }}>
      <h3 style={{ textAlign: "center", color: "black" }}>
        In the progress...
      </h3>
      <Typography variant="h5" align="center">
        Products
      </Typography>
      <TableContainer
        component={Paper}
        style={{ margin: "10px", width: "100%" }}
      >
        <Table aria-label="products-table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ProductId</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Discount</TableCell>
              <TableCell align="center">Edit / Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((p) => (
              <TableRow>
                <TableCell align="center">{p.id}</TableCell>
                <TableCell align="center">
                  <ProductImage src={p.imageURL} />
                </TableCell>
                <TableCell align="center">{p.name}</TableCell>
                <TableCell align="center">{p.type}</TableCell>
                <TableCell align="center">{p.price + "฿"}</TableCell>
                <TableCell align="center">{p.discount + "%"}</TableCell>
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
        <DialogOkCancel
          open={del}
          handleCancel={() => setDel(false)}
          isPending={isPending}
        >
          <div>
            <h4 style={{ margin: 0 }}>Delete product</h4>
            <p style={{ margin: "10px 0" }}>
              Are you sure to delete this product?
            </p>
          </div>
        </DialogOkCancel>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
  isPending: selectIsPending,
});

export default connect(mapStateToProps)(ProductsForAdmin);
