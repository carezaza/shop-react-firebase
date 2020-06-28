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
export const Title = styled.h1`
  ${transitionStyle}
  transition: all 1s ease;
  font-size: 3rem;
  color: #ffffff;
  margin: 15px 0 0 0;

  @media screen and (max-width: 425px) {
    font-size: 2rem;
  }
`;

export const Description = styled.h3`
  ${transitionStyle}
  color: #ffffff;
`;

export const MenuCard = styled.div`
  ${transitionStyle}
  display: flex;
  border: 10px solid grey;
  border-radius: 0px;
  padding: 30px 15px;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  width: 800px;
  height: auto;
  margin: auto;

  &:hover {
    border: 10px solid ${blueLight};
  }

  &:hover ${Title} {
    color: ${blueLight};
  }

  &:hover ${Description} {
    color: ${blueLight};
  }

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

export const Middle = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  width: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

export const ImgContainer = styled.div`
  outline: none;
  border-radius: 5px;
  border: 2px solid grey;
  width: 400px;
  height: 300px;
  margin: 10px auto;
  transition: all 1s ease;

  &:hover {
    transform: scale(1);
    border: 2px solid ${blueLight};
  }

  @media screen and (max-width: 425px) {
    width: 90%;
    height: 200px;
  }

  &:hover ${Middle} {
    opacity: 0.9;
  }

  &:hover ${Image} {
    opacity: 0.5;
  }
`;

export const TextImg = styled(Link)`
${transitionStyle}
  background-color: ${dark};
  border: 2px solid grey;
  font-size: 1rem;
  color: #ffffff;
  padding: 16px 32px;
  border-radius: 5px;

  &:hover {
    background-color: #1c1f25;
    border: 2px solid ${blueLight};
    color: ${blueLight};
  }
`;

export const Button = styled.button`
  ${transitionStyle}
  border: none;
  outline: none;
  border: 2px solid grey;
  border-radius: 5px;
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
    border: 2px solid ${blueLight};
    color: ${blueLight};
  }

  @media screen and (max-width: 425px) {
    width: 95%;
  }
`;
