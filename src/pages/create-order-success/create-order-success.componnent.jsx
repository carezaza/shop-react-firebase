import React, { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { createOrderSuccess } from "../../redux/order/order.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSuccess } from "../../redux/order/order.selectors";
import { Typography, Button } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

import { CreateOrderSuccessContainer } from "./create-order-success.styles";

const CreateOrderSuccess = ({ successMessage,createOrderSuccess }) => {
  useEffect(() => {
    return () => {
      createOrderSuccess(null);
    }
  },[createOrderSuccess]);

  if (!successMessage) return <Redirect to="/" />;
  return (
    <CreateOrderSuccessContainer>
      <Typography variant="h5" align="center">
        Create order success
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0 20px 0",
        }}
      >
        <Alert
          severity="success"
          style={{
            width: "100%",
            alignSelf: "center",
            border: "1px solid grey",
          }}
        >
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>{successMessage}</strong>
        </Alert>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to="/shop">
          <Button color="secondary" variant="contained">
            Back to shop
          </Button>
        </Link>
      </div>
    </CreateOrderSuccessContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  successMessage: selectSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  createOrderSuccess: (message) => dispatch(createOrderSuccess(message))
})

export default connect(mapStateToProps,mapDispatchToProps)(CreateOrderSuccess);
