import React from 'react';
import { GlobalStyle } from '../../global_styles';
import { Link } from 'react-router-dom';
import { Container, Wrapper, Title, Info, Button, PokeballImg, ButtonText } from './styles';

function Hello() {
  return (
      <Container>
          <GlobalStyle />
          <Wrapper>
            <PokeballImg src="https://img.icons8.com/plasticine/2x/open-pokeball.png"/>
            <Title>Pokédex</Title>
            <Info>This is my chalenge to Looqbox, basically is a Pokedex from Pokemon World where you have information about the pokemons that are little monsters from this world. I tried my best but 3 days is a little tight so I hope you enjoy It.</Info>
            <Link to="/pokedex" style={{textDecoration: 'none'}} ><Button><ButtonText>START</ButtonText></Button></Link>
          </Wrapper>
      </Container>
  );
}

export default Hello;
