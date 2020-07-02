import React from "react";

import { DropdownContainer } from "./dropdown.styles";

const DropDown = ({ open, children }) => {
  return open ? <DropdownContainer>{children}</DropdownContainer> : null;
};

export default DropDown;
