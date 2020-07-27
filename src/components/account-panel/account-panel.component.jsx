import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import {
  AccountPanelContainer,
  LinkPanel,
  IconLink,
  ButtonExpand,
} from "./account-panel.styles";

import FaceIcon from "@material-ui/icons/Face";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const AccountPanel = ({ currentUser, signOutStart, match }) => {
  const [expand, setExpand] = React.useState(true);

  return (
    <AccountPanelContainer expand={expand}>
      <ButtonExpand
        color="secondary"
        style={{ marginLeft: "auto" }}
        onClick={() => setExpand(!expand)}
      >
        {expand ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
      </ButtonExpand>
      {expand && (
        <React.Fragment>
          <LinkPanel to="/account">
            <IconLink>
              <FaceIcon />
            </IconLink>
            Account
          </LinkPanel>
          <LinkPanel to="/account/order">
            <IconLink>
              <ShoppingBasketIcon />
            </IconLink>
            My Order
          </LinkPanel>
          <LinkPanel to="/" onClick={signOutStart}>
            <IconLink>
              <ExitToAppIcon />
            </IconLink>
            Sign out
          </LinkPanel>
        </React.Fragment>
      )}
    </AccountPanelContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountPanel);
