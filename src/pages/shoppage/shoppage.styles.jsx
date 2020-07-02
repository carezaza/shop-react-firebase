import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShopPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 80%;
  margin: auto;
`;

export const TitleShop = styled(Link)`
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
  color: grey;
  animation: slide 1s ease;
  @keyframes slide {
    from {
      transform: translateX(-10%);
    }
  }

  &:hover {
    text-decoration: underline;
  }
`;
