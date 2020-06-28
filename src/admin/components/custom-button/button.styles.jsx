import styled from "styled-components";

export const CustomButton = styled.button`
  display: block;
  width: ${({ width }) => (width != null ? width : "100%")};
  padding: ${({ pad }) => (pad != null ? pad : "15px")};
  text-align: center;
  border-radius: 5px;
  border: 1px solid grey;
  margin: 5px 0 10px auto;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  background-color: ${({ bgColor }) => (bgColor != null ? bgColor : "white")};
  color: ${({ textColor }) => (textColor != null ? textColor : "black")};

  &:hover {
    border: 1px solid #61dafb;
    color: #61dafb;
  }
`;
