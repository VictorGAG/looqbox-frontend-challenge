import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 39%;
    height: 65%;
    border-radius: 20px;
    background-color: white;
    padding: 40px 40px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 20px;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PokemonImg = styled.img`
    width: 250px;
    height: 250px;
    border: 5px solid #CCCC;
    border-radius: 40px;
`;

export const PokemonName = styled.text`
    font-size: 50px;
    font-weight: bold;
    color: black;

    &::first-letter{
        text-transform: uppercase;
    }
`;

export const PokemonTypes = styled.text`
    font-size: 20px;
    font-weight: bold;
    width: 100px;
    height: 28px;
    border-radius: 20px;
    background-color: ${props => props.bgColor};
    text-align: center;
    margin: 10px;
`;
export const PokemonDescription = styled.text`
    font-size: 20px;
    text-align: center;
    color: black;
    margin-bottom: 10px;
`;

export const Bar = styled.div`
    width: 350px;
    color: black;
    display: flex;
    margin-bottom: 10px;
`;

export const BarTitle = styled.text`
    color: black;
    font-size: 18px;
    font-weight: bold;
    width: 50px;
`;

export const BarColor = styled.div`
    display: flex;
    width: 350px;
    max-width: 350px;
    background-color: #7989C4;
    height: 20px;
    margin-left: 30px;
    border-radius: 20px;

`;

export const BarContent = styled.text`
    color: white;
    width: ${props => props.size};
    text-align: right;
    padding-right: 20px;
    border-radius: 20px;
    background-color: #4c4cff;
`;

export const ContentWrapper = styled.div`
    display: flex;
    margin-top: -20px;
    flex-direction: column;
    margin-left: 15px;
`;

export const InlineWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const MiddleWrapper = styled.div`
    display: flex;
`;
export const StatsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;

export const BoxInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 300px;
    height: 120px;
    background-color: #7989C4;
    border-radius: 50px;
    padding: 30px;
    margin-left: 20px;
    margin-top: 40px;
`;

export const BoxTitle = styled.text`
    font-size: 18px;
    color: white;
    font-weight: bold;

    &::first-letter{
        text-transform: uppercase;
    }
`;

export const BoxText = styled.text`
    font-size: 17px;
    color: white;
    margin-right: 30px;
    margin-left: 5px;
`;

export const BoxImg = styled.img`
    width: 100px;
    height: 100px;
`;

export const Button = styled.div`
    width: 350px;
    height: 50px;
    background-color: #4c4cff;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 200px;
    margin-top: 25px;
`;

export const ButtonText = styled.text`
    color: white;
    font-size: 18px;
    text-decoration: none;
`;