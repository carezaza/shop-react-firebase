import styled from "styled-components";

const dark = '#20232a';
const blueLight = '#61dafb';
export const MenuItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width : 100%;
    height: 400px;
    margin: auto;

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        height: auto;
    }
`;

export const DescriptionContainer = styled.div`
    width : 70%;
    align-self: center;
    justify-self: end;
    text-align: center;
`;

export const PreviewContainer = styled.div`
    width : 70%;
    align-self: center;
    text-align:center;

    @media screen and (max-width: 800px) {
        width : 90%;
    }
`;

export const Title = styled.h1`
    font-size: 4rem;
    color: black;
`;

export const Description = styled.h1`
    color: black;
`;

export const Image = styled.img`
    border: none;
    outline: none;
    border-radius: 5px;
    width: 300px;
    height: 200px;
    margin: auto;

    @media screen and (max-width: 800px) {
        width: 100%;
        height: 300px;
    }
`;

export const Button = styled.button`
    border: none;
    outline: none;
    border-radius: 5px;
    color: #ffffff;
    background-color: ${dark};
    margin-top: 10px;
    height: 50px;
    text-align: center;
    width: 300px;
    cursor: pointer;
    &:hover {
        color: ${blueLight};
    }

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

