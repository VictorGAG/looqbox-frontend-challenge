import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Wrapper = styled.div`
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 30vw;
    height: 80vh;
    background-color: white;
    border-radius: 10px;
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: black;
    margin-bottom: 30px;
`;

export const Info = styled.text`
    font-size: 18px;
    color: black;
    width: 300px;
    height: auto;
    margin-bottom: 30px;
`;


export const Button = styled.div`
    width: 350px;
    height: 50px;
    background-color: #4c4cff;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.text`
    color: white;
    font-size: 18px;
    text-decoration: none;
`;

export const PokeballImg = styled.img`
    width: 120px;
    height: 120px;
`;