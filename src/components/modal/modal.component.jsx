import React from "react";
import { ModalContainer } from "./modal.styles";

const Modal = ({ open, children }) => {
  if (!open) return null;
  return <ModalContainer>{children}</ModalContainer>;
};

export default Modal;
