import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductsItemsContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  animation: slide 1s ease;
  @keyframes slide {
    from {
      transform: translateX(-5%);
    }
  }

`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  padding: 10px;
  margin: 0;
  text-transform: uppercase;
`;

export const SeeMore = styled(Link)`
  margin: 10px 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const NewLabel = styled.div`
  text-align: center;
  border: 1px solid grey;
  color: var(--dark-color);
  width: 50px;
  margin-left: auto;
  background-color: var(--blueLight-color);
  cursor: default;
`;

export const ProductsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  padding: 10px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  outline: none;
  width: 220px;
  height: 300px;
  background: white;
`;

export const ProductImg = styled.div`
  width: 100%;
  min-height: 200px;
  border: 1px solid grey;
  padding: 1px;
  outline: none;
  background-image: ${({ bgImg }) => (bgImg ? `url(${bgImg})` : "")};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const ProductPrice = styled.p`
  margin: 5px;
  font-size: 18px;
  font-weight: 600;
  float: left;
`;

export const ProductDiscount = styled.p`
  text-decoration: line-through;
  color: grey;
  margin: 9px;
  font-size: 14px;
  font-weight: 600;
  float: right;
`;

export const ProductName = styled(Link)`
  margin: 10px 0;
  transition: all 0.4s ease;
  &:hover {
    color: blue;
    transform: scale(0.99);
  }
`;

export const TextName = styled.p`
  margin: 0;
`;

export const ContainerAdding = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonAddProduct = styled.button`
  transition: all 1s ease;
  border: none;
  border-radius: 50%;
  outline: none;
  width: 33px;
  height: 33px;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    background-color: var(--blueLight-color);
  }
`;
