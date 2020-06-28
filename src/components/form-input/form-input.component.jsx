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
        <FormInputLabel >
          {label.charAt(0).toUpperCase() + label.slice(1)}
          {addForgotPassword ? <LinkTag to='/password_reset'>Forgot password ?</LinkTag> : null}
        </FormInputLabel>
      ) : null}
      <FormInputContainer onChange={handleChange} {...props} />
    </GroupContainer>
  );
};

export default FormInput;
