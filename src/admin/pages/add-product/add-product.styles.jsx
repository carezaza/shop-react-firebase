import styled from "styled-components";

const dark = "#20232a";
const blueLight = "#61dafb";

export const AddProductContainer = styled.div`
  border: 2px solid ${dark};
  border-radius: 5px;
  margin: 100px auto 0 auto;
  width: 500px;
  padding: 20px;

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  padding: 15px 30px;
  width: auto;
  margin: auto;
`;

export const PreviewImage = styled.img`
  border: none;
  outline: none;
  border-radius: 5px;
  margin-top: 15px;
  width: 100%;
  height: 300px;

  @media screen and (max-width: 350px) {
    height: 200px;
  }
`;

export const InputFile = styled.input`
  &[type="file"] {
    height: 0;
    overflow: hidden;
    width: 0;
  }

  &[type="file"] + label {
    background: ${dark};
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    width: auto !important;
    font-size: 12px
    display: inline-block;
    font-weight: 600;
    margin-left:auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
    outline: none;
    padding: 10px 15px;
    position: relative;
    transition: all 0.3s;

    &:hover {
      color: ${blueLight};
    }

    &{
        background-color: ${dark};
      }
    
  }
`;

export const FormProduct = styled.form`
  display: flex;
  flex-direction: column;
`;
