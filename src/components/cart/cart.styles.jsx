import styled from "styled-components";
import { ShoppingCart } from "@material-ui/icons/";
import IconButton from "@material-ui/core/IconButton";

export const ButtonCart = styled(IconButton)`
  transition: all 0.4s ease !important;
  outline: none;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9) !important;
  &:hover {
    transform: scale(.95);
    color: var(--blueLight-color) !important;
  }
`;
