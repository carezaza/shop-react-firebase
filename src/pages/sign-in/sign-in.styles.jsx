import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/brands/brandsSVG.svg";

const dark = "#20232a";

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

export const LinkTag = styled.a`
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
