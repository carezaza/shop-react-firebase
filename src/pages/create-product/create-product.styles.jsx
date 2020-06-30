import styled from "styled-components";

export const ImageUpload = styled.img`
  width: 200px;
  height: 200px;
  border: none;
  outline: none;
  margin: auto;
  border-radius: 3px;
`;

export const FormCreateProduct = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const Container = styled.div`
  width: 450px;
  margin: auto;
  background-color: white;
  padding: 10px;
  border: 1px solid grey;
`;

export const TextReviewTitle = styled.p`
  font-weight: 300;
  font-size: 16px;
  margin: 5px 0;
`;

export const TextReviewValue = styled.p`
  margin: 5px 0;
  font-weight: 600;
  font-size: 16px;
`;

export const TextUpLoading = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #3f51b5;
    cursor: default;
    animation: blinker 1s linear infinite;

    @keyframes blinker {
        50% {
          opacity: 0;
        }
      }
`;
