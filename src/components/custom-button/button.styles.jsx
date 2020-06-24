import styled from "styled-components";

export const CustomButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid grey;
  background-color: ${({ bgColor }) => (bgColor != null ? bgColor : "white")};
  color: ${({ textColor }) => (textColor != null ? textColor : "black")};

  &:hover {
    color: #61dafb;
    border: 1px solid #61dafb;
  }

`;
