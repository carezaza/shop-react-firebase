import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleShowCart } from "../../redux/cart/cart.actions";
import { ButtonCart } from "./cart.styles";
import { selectQuantity } from "../../redux/cart/cart.selectors";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    padding: '0 4px',
  },

}))(Badge);

const Cart = ({ toggleShowCart, ItemsQuantity }) => {
  return (
    <ButtonCart aria-label="cart" onClick={toggleShowCart}>
      <StyledBadge badgeContent={ItemsQuantity} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
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
