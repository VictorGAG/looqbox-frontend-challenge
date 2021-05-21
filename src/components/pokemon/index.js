import React, { useState, useEffect } from 'react';
import { Container, Card, Image, InfoContainer, Name, PokemonIndex, Type, TypeWrapper} from './styles';

import json from '../../json';

export default function Pokemon({data, index}) {

    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonImg, setPokemonImg] = useState();
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState();


    useEffect(()=>{
            setLoading(true)
            setPokemonData(data)
            setPokemonImg(data.sprites.other.dream_world.front_default)
            setPokemonTypes(data.types)
            setLoading(false) 
            setUrl(data.id)

       
    }, [data])

  return (
    loading ? <h1 style={{textAlign:'center'}}>Loading...</h1> : ( 
      <Container>
                <Card >
                    <Image src={pokemonImg}/>
                    <InfoContainer>
                        <PokemonIndex>N°{url}</PokemonIndex>
                        <Name>{pokemonData.name}</Name>
                            <TypeWrapper>
                                {pokemonTypes.map(type => (
                                    <Type key={type} bgColor={`#${json.map(items => (items[type.type.name]))}`}>
                                        {type.type.name}
                                    </Type>
                                ))}
                            </TypeWrapper>
                    </InfoContainer>
                </Card>
      </Container>
      
    )
  );
}
