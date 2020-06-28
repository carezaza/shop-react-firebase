import styled, { css } from "styled-components";

const transitionStyle = css`
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
`;
export const CustomButton = styled.button`
  ${transitionStyle}
  display: block;
  width: 100%;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid grey;
  cursor: pointer;
  background-color: ${({ bgColor }) => (bgColor != null ? bgColor : "white")};
  color: ${({ textColor }) => (textColor != null ? textColor : "black")};

  &:hover {
    color: #61dafb;
    border: 1px solid #61dafb;
  }

  &[disabled] {
    color: grey;
    border: none;
  }
  &[disabled]:hover {
    border: none;
  }
`;
