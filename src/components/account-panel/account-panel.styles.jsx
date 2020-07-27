import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core/";

export const ButtonExpand = styled(IconButton)`
  transition: all 0.3s ease;
`;

export const AccountPanelContainer = styled.div`
  display: flex;
  outline: none;
  border: none;
  flex-direction: column;
  height: 100%;
  padding: 10px 0;
  width: ${({ expand }) => (expand ? "250px" : "0")};
  transition: all 0.3s ease;
  background-color: var(--dark-color);
`;

export const ProfileContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px 0;
  border-radius: 50%;
  border: 1px solid grey;
`;

export const ProfileText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  margin-top: 0;
`;

export const LinkPanel = styled(Link)`
  padding: 10px 20px;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: row;
  &:is-active {
    background-color: #1c1f25;
  }
  &:hover {
    background-color: #1c1f25;
  }
`;

export const IconLink = styled.span`
  padding: 0 10px;
`;
