import styled from "styled-components";

export const UserButtonContainer = styled.button`
  transition: all 0.4s ease;
  background-color: transparent;
  color: ${({open}) => open ? 'var(--blueLight-color)' : 'rgba(255, 255, 255, 0.9)'} ;
  padding-top: 5px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
    color: var(--blueLight-color);
  }
`;

export const MenuUser = styled.div`
  transition: all 0.4s ease;
  padding: 5px;
  color: rgba(255, 255, 255, 0.9);
  outline: none;
  cursor: pointer;

  &:hover {
    color: var(--blueLight-color);
    text-decoration: underline;
  }
`;
