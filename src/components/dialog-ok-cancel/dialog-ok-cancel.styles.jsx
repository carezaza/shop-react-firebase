import styled from "styled-components";

export const DialogContainer = styled.div`
  background-color: white;
  width: 300px;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transform: translate(-50%, -50%);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ContentContainer = styled.div`
  margin: 5px;
`;
