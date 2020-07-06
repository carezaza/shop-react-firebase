import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import {
  AccountPanelContainer,
  ProfileContainer,
  LinkPanel,
  ProfileImage,
  ProfileText,
  IconLink,
} from "./account-panel.styles";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import FaceIcon from "@material-ui/icons/Face";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const AccountPanel = ({ currentUser, signOutStart, match }) => {
  const { displayName } = currentUser;
  return (
    <AccountPanelContainer>
      <ProfileContainer>
        <ProfileImage
          src={`https://via.placeholder.com/100x100/20232a/FFFFFF/?text=${displayName
            .charAt(0)
            .toUpperCase()}`}
        />
        <ProfileText>
          Hello, {displayName.charAt(0).toUpperCase() + displayName.slice(1)}!
        </ProfileText>
      </ProfileContainer>
      <LinkPanel to='/account'>
        <IconLink>
          <FaceIcon />
        </IconLink>
        Account
      </LinkPanel>
      <LinkPanel to='/account/order'>
        <IconLink>
          <ShoppingBasketIcon />
        </IconLink>
        Order
      </LinkPanel>
      <LinkPanel to="/" onClick={signOutStart}>
        <IconLink>
          <ExitToAppIcon />
        </IconLink>
        Sign out
      </LinkPanel>
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
