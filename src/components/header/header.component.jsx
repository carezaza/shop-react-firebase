import React from "react";
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors'

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
  LogoSvg
} from "./header.styles";

const Header = ({ currentUser , signOutStart }) => {

  return (
    <HeaderContainer>
      <NavbarContainer>
        <LogoContainer to="/">
          <LogoSvg />
        </LogoContainer>
        <MenusContainer>
          <MenusLink exact to="/" activeClassName="is-active" >Home</MenusLink>
          <MenusLink to="/shop" activeClassName="is-active">Shop</MenusLink>
          <MenusLink to="/add" activeClassName="is-active">Add</MenusLink>
        </MenusContainer>
        <UserContainer>
          { !currentUser ? <MenusLink to="/signin" activeClassName="is-active">Sign In</MenusLink> : <ButtonOptions onClick={signOutStart}>SignOut</ButtonOptions> }
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
