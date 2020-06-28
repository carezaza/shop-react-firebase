import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, addForgotPassword , ...props }) => {

  return (
    <GroupContainer>
      {label ? (
        <FormInputLabel >
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </FormInputLabel>
      ) : null}
      <FormInputContainer onChange={handleChange} {...props} />
    </GroupContainer>
  );
};

export default FormInput;
