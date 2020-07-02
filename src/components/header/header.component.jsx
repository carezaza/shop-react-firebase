import React from "react";
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors'

import { signOutStart } from '../../redux/user/user.actions'
import AccountCircle from '@material-ui/icons/AccountCircle';

// import styles
import {
  NavbarContainer,
  LogoContainer,
  MenusContainer,
  MenusLink,
  HeaderContainer,
  UserContainer,
  ButtonUser,
  LogoSvg
} from "./header.styles";
import Cart from '../../components/cart/cart.components';
import UserButton from '../user-button/user-button.component'

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
          <Cart />
          { !currentUser ? <MenusLink to="/signin" activeClassName="is-active">Sign In</MenusLink> : <ButtonUser onClick={signOutStart}><AccountCircle/></ButtonUser> }
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
