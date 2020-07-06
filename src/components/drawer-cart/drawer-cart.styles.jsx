import styled from "styled-components";
import { Link } from "react-router-dom";

export const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  outline: none;
  border: none;
  height: 80%;
  background: rgba(0, 0, 0, 0.9);
  overflow: auto;
`;

export const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8%;
  outline: none;
  background: white;
  padding: 10px;
`;

export const ButtonClose = styled.button`
  transition: all 0.5s ease;
  outline: none;
  border: none;
  background-color: transparent;
  color: black;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export const DrawerBox = styled.div`
  transition: right 0.2s ease;
  position: fixed;
  top: 0;
  right: ${({ show }) => (show ? "0" : "-100%")};
  width: 300px;
  height: 100%;
  z-index: 1;
`;

export const EmptyText = styled.span`
  margin: 10px auto;
  color: rgba(255, 255, 255, 0.9);
`;

export const CheckOutLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CheckOutRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export const CheckOutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 12%;
  padding: 10px;
  outline: none;
  background: white;
`;

export const CheckoutButton = styled(Link)`
  transition: text-decoration .4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid grey;
  background-color: var(--blueLight-color);
  color: black;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

