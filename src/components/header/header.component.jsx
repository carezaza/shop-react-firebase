import React from "react";

import { ReactComponent as Logo } from "../../assets/brands/brandsSVG.svg";

// import styles
import {
  NavbarContainer,
  LogoContainer,
  MenusContainer,
  MenusLink,
  HeaderContainer,
  NavbarHeader,
  NavbarContent,
  UserContainer,
  LinkTag
} from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <NavbarContainer>
        <NavbarHeader>
          <LogoContainer to="/">
            <Logo />
          </LogoContainer>
          <UserContainer>
            <LinkTag href="/signin">Sign In</LinkTag>
          </UserContainer>
        </NavbarHeader>
        <NavbarContent>
          <MenusContainer>
            <MenusLink to="/">Home</MenusLink>
            <MenusLink to="/">Shop</MenusLink>
            <MenusLink to="/">About</MenusLink>
            <MenusLink to="/">Contact</MenusLink>
          </MenusContainer>
        </NavbarContent>
      </NavbarContainer>
    </HeaderContainer>
  );
};

export default Header;
