import React from "react";
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors'

import { ReactComponent as Logo } from "../../assets/brands/brandsSVG.svg";
import { signOutStart } from '../../redux/user/user.actions'

// import styles
import {
  NavbarContainer,
  LogoContainer,
  MenusContainer,
  MenusLink,
  HeaderContainer,
  UserContainer,
  ButtonOptions,
} from "./header.styles";

const Header = ({ currentUser , signOutStart }) => {
  return (
    <HeaderContainer>
      <NavbarContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <MenusContainer>
          <MenusLink to="/">Home</MenusLink>
          <MenusLink to="/">Shop</MenusLink>
          <MenusLink to="/admin/add_product">About</MenusLink>
        </MenusContainer>
        <UserContainer>
          { !currentUser ? <MenusLink to="/signin">Sign In</MenusLink> : <ButtonOptions onClick={signOutStart}>SignOut</ButtonOptions> }
        </UserContainer>
      </NavbarContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
