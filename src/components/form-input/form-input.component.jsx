import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
  LinkTag
} from "./form-input.styles";

const FormInput = ({ handleChange, label, addForgotPassword , ...props }) => {
  return (
    <GroupContainer>
      {label ? (
        <FormInputLabel className={props.value.length ? "shrink" : ""} >
          {label.charAt(0).toUpperCase() + label.slice(1)}
          {addForgotPassword ? <LinkTag>Forgot password ?</LinkTag> : null}
        </FormInputLabel>
      ) : null}
      <FormInputContainer onChange={handleChange} {...props} />
    </GroupContainer>
  );
};

export default FormInput;
