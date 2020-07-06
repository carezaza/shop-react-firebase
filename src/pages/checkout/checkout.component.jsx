import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectTotalPrice,
  selectQuantity,
} from "../../redux/cart/cart.selectors";
import { removeItem, clearItem, addItem } from "../../redux/cart/cart.actions";
import {
  CheckOutContainer,
  Title,
  ProductImage,
  BottomContainer,
} from "./checkout.styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Button,
  Icon,
  IconButton,
  Typography,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  headText: {
    fontWeight: "bold",
  },
  margin: {
    margin: theme.spacing(1),
  },
  table: {
    borderTop: "1px solid rgba(224, 224, 224, 1)",
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const CheckOut = ({
  cartItems,
  totalQuantity,
  totalPrice,
  addItem,
  removeItem,
  clearItem,
}) => {
  const classes = useStyles();
  return (
    <CheckOutContainer>
      <Title>Check out</Title>
      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", margin: "50px 0" }}>
          <Typography variant="h6" align="center" className={classes.margin}>
            Your cart is empty!
          </Typography>
          <Link to="/shop">
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              className={classes.button}
            >
              GO TO Shop
            </Button>
          </Link>
        </div>
      ) : (
        <Fragment>
          <TableContainer>
            <Table aria-label="simple table" className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.headText} align="center">
                    Product
                  </TableCell>
                  <TableCell className={classes.headText} align="center">
                    Name
                  </TableCell>
                  <TableCell className={classes.headText} align="center">
                    Quantity
                  </TableCell>
                  <TableCell className={classes.headText} align="center">
                    Price
                  </TableCell>
                  <TableCell className={classes.headText} align="center">
                    Remove
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id} >
                    <TableCell component="th" scope="row" align="center">
                      <ProductImage src={item.imageURL} />
                    </TableCell>
                    <TableCell align="center">{item.name}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        aria-label="arrow-left"
                        onClick={() => removeItem(item)}
                      >
                        <ArrowLeftIcon size="medium" />
                      </IconButton>
                      {item.quantity}
                      <IconButton
                        aria-label="arrow-right"
                        onClick={() => addItem(item)}
                      >
                        <ArrowRightIcon size="medium" />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">{item.realPrice}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        aria-label="delete"
                        onClick={() => clearItem(item)}
                      >
                        <DeleteIcon size="medium" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <BottomContainer>
            <div>
              <Typography variant="h4" component="h5">
                Total
              </Typography>
              <Typography variant="h6">
                Quantity: <strong>{totalQuantity}</strong>
              </Typography>
              <Typography variant="h6">
                Price: <strong>{totalPrice}฿</strong>{" "}
                <small>(prices do not include shipping)</small>
              </Typography>
            </div>
            <Link to="/order_confirm">
              <Button
                variant="contained"
                color="primary"
                size="medium"
                className={classes.button}
              >
                Confirm Order
              </Button>
            </Link>
          </BottomContainer>
        </Fragment>
      )}
    </CheckOutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  totalQuantity: selectQuantity,
  totalPrice: selectTotalPrice,
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
