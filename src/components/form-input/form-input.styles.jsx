import styled from "styled-components";
import { Link } from 'react-router-dom'

export const GroupContainer = styled.div`
  position: relative;
  margin: 10px 0; 
`;

export const FormInputContainer = styled.input`
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid grey;
  color: black;
  margin: 5px 0 20px 0;

  &:focus {
    border: 2px solid #61dafb;
  }

  &:hover {
    border: 1px solid #61dafb;
  }

  &[disabled]{
    background-color: rgba(0,0,0,0.1);
  }

  &[disabled]:hover{
    border: 1px solid grey;
  }

`;

FormInputContainer.displayName = 'FormInputContainer';

export const FormInputLabel = styled.label`
  display: flex;
  justify-content: space-between;
  color: black;
  font-size: 15px;;
  font-weight: 600;
`;

FormInputLabel.displayName = 'FormInputLabel';

export const LinkTag = styled(Link)`
  font-size: 12px;;
  font-weight: 600;
  color: #0366d6;
  text-decoration: none;
`;
