import styled from "styled-components";

export const SelectInputContainer = styled.div`
  width: 100%;
  margin: 10px 0;
`;

export const InputSelect = styled.select`
  font-size: 16px;
  width: 100%;
  border-radius: 5px;
  height: 38px;
  padding: 10px 10px 10px 5px;
  margin: 5px 0;
  
  &:hover {
    border: 1px solid #61dafb;
  }
`;

export const FormInputLabel = styled.label`
  display: flex;
  justify-content: space-between;
  color: black;
  font-size: 20px;
  font-weight: 600;
`;
