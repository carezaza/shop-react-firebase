import React, { useRef } from "react";
import { connect } from "react-redux";
import { toggleDropdown } from "../../redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { DropdownContainer } from "./dropdown.styles";
import { selectDropdown } from "../../redux/user/user.selectors";
import { useOutsideAlerter } from "../utils.component";

const DropDown = ({ children, toggleDropdown, dropdownShow }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, toggleDropdown);
  if (!dropdownShow) return null;
  return (
    <DropdownContainer ref={dropdownShow ? wrapperRef : null}>
      {children}
    </DropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  dropdownShow: selectDropdown,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
