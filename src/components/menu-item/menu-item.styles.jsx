import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const dark = "#20232a";
const blueLight = "#61dafb";

const transitionStyle = css`
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
`;

export const MenuItemContainer = styled.div`
  text-align: center;
  width: 100%;
  height: auto;
  padding: 60px 40px;
  border: none;
  background-image: ${({ bgImg }) =>
    bgImg
      ? `url(${bgImg})`
      : "linear-gradient(to left,rgba(6, 157, 107, 1) 0%, rgba(0,0,0,0) 100%)"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 800px) {
    height: auto;
    padding: 20px 10px;
  }

  @media screen and (max-width: 425px) {
    padding: 10px;
  }
`;
export const Title = styled.h2`
  transition: all 1s ease;
  color: #ffffff;
  margin: 15px 0 0 0;

  @media screen and (max-width: 425px) {
    font-size: 2rem;
  }
`;

export const Description = styled.h4`
  color: #ffffff;
`;

export const MenuCard = styled.div`
  ${transitionStyle}
  display: flex;
  border: 5px solid grey;
  border-radius: 0px;
  padding: 15px 15px;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
  width: 800px;
  height: 400px;
  margin: auto;

  @media screen and (max-width: 800px) {
    width: 95%;
    border: 5px solid grey;
    padding: 10px;
  }
`;

export const Image = styled.img`
  ${transitionStyle}
  opacity: 1;
  display: block;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const SeemoreButton = styled.button`
  outline: none;
  border: 1px solid grey;
  margin: auto;
  height: 20%;
  width: 80%;
  background-color: ${dark};
  color: #ffffff;
  opacity: 0;
  ${transitionStyle}
  cursor: pointer;

  &:hover {
    background-color: #1c1f25;
    color: ${blueLight};
  }

  @media screen and (max-width: 425px) {
    opacity: 1;

    &:hover {
      background-color: ${dark};
      color: 1;
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  outline: none;
  border: 1px solid grey;
  width: 300px;
  height: 200px;
  margin: 10px auto;
  transition: all 1s ease;
  background-image: ${({ bgImg }) =>
    bgImg
      ? `url(${bgImg})`
      : "linear-gradient(to left,rgba(6, 157, 107, 1) 0%, rgba(0,0,0,0) 100%)"};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    opacity: 0.8;
  }

  &:hover ${SeemoreButton} {
    opacity: 1;
  }

  @media screen and (max-width: 425px) {
    width: 90%;

    &:hover {
      opacity: 1;
    }

    &:hover ${SeemoreButton} {
      opacity: 1;
    }
  }
`;

export const TextImg = styled(Link)`
${transitionStyle}
  background-color: ${dark};
  border: 2px solid grey;
  outline: none;
  font-size: 1rem;
  color: #ffffff;
  padding: 15px;

  &:hover {
    background-color: #1c1f25;
    color: ${blueLight};
  }
`;

export const Button = styled.button`
  ${transitionStyle}
  border: none;
  outline: none;
  color: #ffffff;
  background-color: ${dark};
  margin: 20px auto;
  height: 50px;
  font-size: 1rem;
  text-align: center;
  width: 400px;
  cursor: pointer;

  &:hover {
    background-color: #1c1f25;
    color: ${blueLight};
  }

  @media screen and (max-width: 425px) {
    width: 95%;
  }
`;
