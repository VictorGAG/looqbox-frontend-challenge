import React, { useState } from 'react';
import { Container, InputArea, TextInput, InputButton, TitleArea } from './styles';
import SearchIcon from '@material-ui/icons/Search';

export default function Search(props) {

  const [pokemon, setPokemon] = useState("");

  return (
    <Container>
        <TitleArea>
        </TitleArea>
        <InputArea>
          <TextInput
           type="text"
           placeholder="Procure por um pokémon..."
           onChange={(event) => {
              setPokemon(event.target.value)
           }}
           onKeyPress={event => {
             if(event.key === "Enter"){
                props.getSearch(pokemon)
             }
           }}
            />
          <InputButton onClick={(e) => props.getSearch(pokemon)}><SearchIcon /></InputButton>
        </InputArea>
    </Container>
  );
}

