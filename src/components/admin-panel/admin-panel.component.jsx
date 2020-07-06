import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import FaceIcon from "@material-ui/icons/Face";
import WorkIcon from "@material-ui/icons/Work";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  AdminPanelContainer,
  ProfileContainer,
  LinkPanel,
  ProfileImage,
  ProfileText,
  IconLink,
} from "./admin-panel.styles";

const AdminPanel = ({ currentUser , match, signOutStart }) => {
  const { displayName } = currentUser;
  return (
    <AdminPanelContainer>
      <ProfileContainer>
        <ProfileImage src={`https://via.placeholder.com/100x100/20232a/FFFFFF/?text=${displayName.charAt(0).toUpperCase()}`} />
        <ProfileText>
          Hello, {displayName.charAt(0).toUpperCase() + displayName.slice(1)}!
        </ProfileText>
      </ProfileContainer>
      <LinkPanel to={`${match.path}`}>
        <IconLink>
          <AssignmentIndIcon />
        </IconLink>
        Users
      </LinkPanel>
      <LinkPanel to={`${match.path}/products`}>
        <IconLink>
          <WorkIcon />
        </IconLink>
        Products
      </LinkPanel>
      <LinkPanel to={`${match.path}/orders`}>
        <IconLink>
          <ShoppingBasketIcon />
        </IconLink>
        Orders
      </LinkPanel>
      <LinkPanel to="/" onClick={signOutStart}>
        <IconLink>
          <ExitToAppIcon />
        </IconLink>
        Sign Out
      </LinkPanel>
    </AdminPanelContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
})

export default connect(mapStateToProps,mapDispatchToProps)(AdminPanel);
