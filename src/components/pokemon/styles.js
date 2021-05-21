import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-left: 30px;
`;
export const Card = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    transform: scale(0.9);

    &:hover {
        transform: scale(1);
    }
`;

export const InfoContainer = styled.div`
    position: relative;
    left: -80px;
    display: flex;
    align-items: left;
    flex-direction: column;
`;

export const TypeWrapper = styled.div`
    display: flex;
`;

export const Name = styled.text`
    font-size: 25px;
    font-weight: bold;
    color: black;

    &:first-letter{
        text-transform: uppercase;
    }
`;

export const Type = styled.text`
    font-size: 18px;
    background-color: ${props => props.bgColor};
    border-radius: 15px;
    text-align: center;
    width: 80px;
    margin-right: 10px;
`;

export const PokemonIndex = styled.text`
    font-size: 16px;
    color: #777;
`;

export const Image = styled.img`
    position: relative;
    left: -90px;
    margin-left: 50px;
    width: 150px;
    height: 150px;
`;