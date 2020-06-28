import styled from "styled-components";

const dark = "#20232a";
const blueLight = "#61dafb";

export const ErrorImageOverlay = styled.div`
  height: auto;
  width: 100%;
  padding: 30px 10px;
  background-color: ${dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: ${blueLight};

  animation: blinker 1s linear infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

export const ErrorDescription = styled.p`
  width: 60%;
  text-align: left;
  font-size: 18px;
  color: ${blueLight};

  @media screen and (max-width: 900px) {
    width: 95%;
  }
`;
