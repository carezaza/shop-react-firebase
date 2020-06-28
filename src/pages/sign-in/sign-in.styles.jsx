import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/brands/brandsSVG.svg";

const dark = "#20232a";

const AnimetionStyle = css`
  animation-name: example;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes example {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(270deg);
    }
    50% {
      transform: rotate(540deg);
    }
    75% {
      transform: rotate(810deg);
    }
    100% {
      transform: rotate(1080deg);
    }
  }
`;

const getAnimetionStyles = ( { isPending } ) => {
  if (isPending) {
    return AnimetionStyle;
  }
  return null;
};

export const AnimationSpin = styled.div``;

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0 5px;

  @media screen and (min-width: 350px) {
    width: 350px;
  }

  @media screen and (max-width: 350px) {
    width: 100%;
  }
`;

export const SvgLogo = styled(Logo)`
  ${getAnimetionStyles}
  width: 48px;
  height: 48px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -.5px;
}
`;

export const Card = styled.div`
  margin: 15px 0 20px 0;
  padding: 15px;
  background-color: white;
  border: 1px solid ${dark};
  border-radius: 5px;
`;

export const LinkTag = styled(Link)`
  color: #0366d6;
  text-decoration: none;

  &:hover {
    color: blue;
  }
`;

export const CreateAccount = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

// animation-name: example;
// animation-duration: 2s;
// animation-iteration-count: infinite;

// @keyframes example {
//   0%   {transform: rotate(0deg);}
//   25%  {transform: rotate(270deg);}
//   50%  {transform: rotate(540deg);}
//   100% {transform: rotate(1080deg);}
// }
