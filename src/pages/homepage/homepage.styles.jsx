import styled from "styled-components";

import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-color);
  overflow-y: auto;

  @media screen and (max-width: 600px) {
    padding: 50px 0;
  }
`;

export const CollectionsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 600px) {
    margin-bottom: auto;
  }
`;

export const Title = styled.h2`
  overflow: hidden;
  text-align: center;
  width: 9em;
  color: rgba(255, 255, 255, 0.9);
  border-right: 0.15em solid rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  white-space: nowrap;
  cursor: default;
  animation: typing 2s steps(40, end), blink-caret 0.5s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 9em;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: rgba(255, 255, 255, 0.9);
    }
  }
`;

export const HappyTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: 20px;
  animation: slide 1s ease;
  @keyframes slide {
    from {
      transform: translateX(-10%);
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const HappyText = styled.div`
  margin: 0 15px;
  color: gold;
  padding: 10px;
  font-size: 16px;
  font-weight: 300;
`;

export const MenusContainer = styled.div`
  margin: auto;
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  animation: slide 1s ease;
  @keyframes slide {
    from {
      transform: translateX(-10%);
    }
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: 100%;
  }
`;

export const SeeMoreButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 1px solid grey;
  margin: auto;
  height: 20%;
  width: 80%;
  background-color: var(--dark-color);
  color: #ffffff;
  opacity: 0;
  transition: all 1s ease;
  cursor: pointer;

  &:hover {
    background-color: #16181d;
    color: var(--blueLight-color);
  }

  @media screen and (max-width: 425px) {
    opacity: 1;

    &:hover {
      background-color: transparent;
      color: 1;
    }
  }
`;

// const randomColor = () => {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

export const ImgContainer = styled.div`
  display: flex;
  outline: none;
  border-radius: 5px;
  height: 200px;
  border: 1px solid grey;
  margin: 10px;
  transition: all 1s ease;
  background-image: ${({ bgImg }) => (bgImg ? `url(${bgImg})` : "")};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  animation: blink 10s linear infinite;

  &:hover {
    opacity: 0.8;
  }

  &:hover ${SeeMoreButton} {
    opacity: 1;
  }

  @media screen and (max-width: 600px) {
    & {
      opacity: 1;
    }

    & ${SeeMoreButton} {
      opacity: 1;
    }
  }
`;
