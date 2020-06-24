import styled from "styled-components";
import { Link } from "react-router-dom";

const dark = "#20232a";
const blueLight = "#61dafb";

export const HeaderContainer = styled.div`
  position: fixed;
  height: 110px;
  max-height: 110px;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: ${dark};
  z-index: 1;
  padding: 10px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;

export const NavbarContainer = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const NavbarHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoContainer = styled(Link)`
  height: 48px;
  width: 80px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${blueLight};

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0 10px;
  }
`;

export const UserContainer = styled.div`
  width: 40%;
  height: 100%;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 90%;
    padding: 0 10px;
  }
`;

export const MenusContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 90%;
    padding: 0 10px;
  }
`;

export const MenusLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #ffffff;

  &:hover {
    color: #61dafb;
  }
`;

export const LinkTag = styled.a`
  cursor: pointer;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: #61dafb;
  }
`;
