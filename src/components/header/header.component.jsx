import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import { signOutStart } from "../../redux/user/user.actions";


// import styles
import {
  NavbarContainer,
  LogoContainer,
  MenusContainer,
  MenusLink,
  HeaderContainer,
  UserContainer,
  LogoSvg,
} from "./header.styles";
import Cart from "../../components/cart/cart.components";
import UserButton from "../user-button/user-button.component";
import DrawerCart from '../drawer-cart/drawer-cart.component'

const Header = ({ currentUser, signOutStart }) => {
  return (
    <HeaderContainer>
      <NavbarContainer>
        <LogoContainer to="/">
          <LogoSvg />
        </LogoContainer>
        <MenusContainer>
          <MenusLink exact to="/" activeClassName="is-active">
            Home
          </MenusLink>
          <MenusLink to="/shop" activeClassName="is-active">
            Shop
          </MenusLink>
        </MenusContainer>
        <UserContainer>
          <Cart />
          <DrawerCart /> 
          {!currentUser ? (
            <MenusLink to="/signin" activeClassName="is-active">
              Sign In
            </MenusLink>
          ) : (
            <UserButton />
          )}
        </UserContainer>
      </NavbarContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
