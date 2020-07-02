import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOutStart } from "../../redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { UserButtonContainer, MenuUser } from "./user-button.styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import DropDown from "../dropdown/dropdown.component";

const UserButton = ({ signOutStart, currentUser }) => {
  const [open, setOpen] = useState(false);
  const handleSignOut = () => {
    signOutStart();
    setOpen(false);
  };
  return (
    <Fragment>
      <UserButtonContainer onClick={() => setOpen(!open)}>
        <AccountCircle />
      </UserButtonContainer>
      <DropDown open={open}>
        <MenuUser>Account</MenuUser>
        {currentUser.role === "admin" ? (
          <Link to="/admin">
            <MenuUser>Admin Page</MenuUser>
          </Link>
        ) : null}
        <MenuUser onClick={handleSignOut}>Sign out</MenuUser>
      </DropDown>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserButton);
