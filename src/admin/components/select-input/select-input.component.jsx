import React from "react";

import {
  SelectInputContainer,
  InputSelect,
  FormInputLabel,
} from "./select-input.styles";

export default function SelectInput({ label, values , ...props}) {
  if(!values) return null;

  return (
    <SelectInputContainer>
      {!label ? null : <FormInputLabel>{label.charAt(0).toUpperCase() + label.slice(1)}</FormInputLabel>}
      <InputSelect {...props} >
        {
            values.map((value,index) => (<option value={value} key={index}>{value.toUpperCase()}</option>))
        }
      </InputSelect>
    </SelectInputContainer>
  );
}
