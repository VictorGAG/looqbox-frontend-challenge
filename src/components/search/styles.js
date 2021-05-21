import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TitleArea = styled.div`
    width: 500px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url("https://www.pngjoy.com/pngl/160/3195325_pokeball-pokeball-sprites-png-download.png");
    background-size: 250px;
    background-repeat: no-repeat;
    background-position: center;
`;

export const InputArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const Title = styled.text`
    font-size: 25px;
    text-shadow: 2px 2px;
    font-weight: bold;
    color: white;
`;

export const TextInput = styled.input`
    width: 80vh;
    height: 40px;
    border: none;
    padding-left: 20px;
    color: #8b7d77;
    outline: none;

    @media(max-width: 500px) {
        width: 50vh;
    }
`;

export const InputButton = styled.button`
    width: 50px;
    height: 42px;
    cursor: pointer;
    background-color: #4c4cff;
    color: white;
    border: none;
`;

