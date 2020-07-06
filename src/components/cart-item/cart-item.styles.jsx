import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartItemContainer = styled.div`
  width: 100%;
  height: 80px;
  min-height: 80px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  border: 1px solid white;
  border-radius: 2px;
  padding: 5px;
`;

export const ImageItem = styled.img`
  min-width: 80px;
  max-width: 80px;
  border-radius: 2px;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  justify-content: space-between;
  width: 100%;
`;

export const NameAndRemoveContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuantityAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IncreaseAndDecreaseButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  color: #f50057;
`;

export const RemoveButton = styled.button`
  outline: none;
  border: none;

  cursor: pointer;
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  color: #f50057;
`;

export const NameLink = styled(Link)`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 14px;
  color: #f50057;
`;
