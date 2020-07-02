import styled from "styled-components";

export const DropdownContainer = styled.div`
  transition: all 0.15s ease;
  position: fixed;
  background-color: var(--dark-color);
  border: 1px solid var(--blueLight-color);
  border-radius: 5px;
  top: 50px;
  padding: 10px;
  animation: expand 0.4s ease;
  overflow: hidden;

  @keyframes expand {
    from{
        transform: scaleY(0);    
        transform-origin: top;
    }
  }
`;
