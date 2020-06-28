import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid red;
  border-radius: 5px;
`;

export const ButtonClose = styled.button`
  border: 1px solid pink;
  border-radius: 5px;
  margin-right: 5px;
  background-color: transparent;
  color: red;
  width: 24px;
  height: 24px;
  align-self: center;
  &:hover {
    background-color: pink;
  }
`;

export const MessageTag = styled.p`
  margin: 10px;
  font-size: 14px;
  font-weight: 600;
  color: red;
`;
