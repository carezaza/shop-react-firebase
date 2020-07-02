import styled from "styled-components";
import { ShoppingCart } from "@material-ui/icons/";

export const ButtonCart = styled.button`
  display: flex;
  flex-direction: row;
  transition: all 1s ease;
  outline: none;
  border: none;
  cursor: pointer;
  color: #ffffff;
  background: transparent;
  &:hover {
    color: var(--blueLight-color);
    transform: scale(0.95);
  }
`;

export const ShopCart = styled(ShoppingCart)`
  width: 18px !important;
  height: 18px !important;
`;
