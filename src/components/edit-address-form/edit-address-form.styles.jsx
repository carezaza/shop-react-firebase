import styled from "styled-components";

export const FormEditAddress = styled.form`
  background-color: white;
  width: 100%;
  max-width: 600px;
  max-height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 20px;
  transform: translate(-50%, -50%);
  overflow: auto;
`;

export const FormContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  @media screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;
