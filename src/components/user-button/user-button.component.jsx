import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOutStart, toggleDropdown } from "../../redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectDropdown,
} from "../../redux/user/user.selectors";
import { UserButtonContainer, MenuUser } from "./user-button.styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import DropDown from "../dropdown/dropdown.component";

const UserButton = ({
  signOutStart,
  currentUser,
  dropdownShow,
  toggleDropdown,
}) => {
  const handleSignOut = () => {
    signOutStart();
    toggleDropdown();
  };

  return (
    <Fragment>
      <UserButtonContainer open={dropdownShow} onClick={toggleDropdown}>
        <AccountCircle />
      </UserButtonContainer>
      <DropDown>
        <Link to="/account">
          <MenuUser>Account</MenuUser>
        </Link>
        {currentUser.role === "admin" ? (
          <Link to="/admin">
            <MenuUser>Admin Page</MenuUser>
          </Link>
        ) : null}
        <Link to="/">
          <MenuUser onClick={handleSignOut}>Sign out</MenuUser>
        </Link>
      </DropDown>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  dropdownShow: selectDropdown,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserButton);
