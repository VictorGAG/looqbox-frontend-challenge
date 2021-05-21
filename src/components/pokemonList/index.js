import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getPokemonInfo } from '../../services/getPokemons';
import { Container, Card, Image, InfoContainer, Name, PokemonIndex, Type, TypeWrapper} from './styles';

import json from '../../json';

export default function PokemonList({url}) {
    const history = useHistory();

    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonImg, setPokemonImg] = useState();
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    const pokemonId = url.split('/')[url.split('/').length -2];

    useEffect(() => {
        const request = async () => {
            await getPokemonInfo(url).then((res) => {
                setLoading(true)
                setPokemonData(res)
                setPokemonImg(res.sprites.other.dream_world.front_default)
                setPokemonTypes(res.types)
                setLoading(false)
            })
        }
        request()
    }, [url])

    const handleClick = async (e) => {
        return history.push({
            pathname: '/pokeinfo',
            state: {index: e}
        });
    }

    return (
    loading ? <h1 style={{textAlign: "center"}}>Loading...</h1> : (
      <Container>
                <Card onClick={() => handleClick(pokemonId)}>
                    <Image src={pokemonImg}/>
                    <InfoContainer>
                        <PokemonIndex>N°{pokemonId}</PokemonIndex>
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
