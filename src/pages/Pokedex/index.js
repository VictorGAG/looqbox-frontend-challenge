import React, { useState, useEffect } from 'react';
import Search from '../../components/search';
import PokemonList from '../../components/pokemonList';
import Pokemon from '../../components/pokemon';
import { getPokemon, getSearchPokemon } from '../../services/getPokemons';
import { GlobalStyle } from '../../global_styles';
import { Container } from './styles';

function App() {
    
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonSearch, setPokemonSearch] = useState('');
    const [pokemonIndex, setPokemonIndex] = useState('');

    const getSearch = (query) => {
        const setSearch = async () => {
            await getSearchPokemon(query).then((res) => {
                setPokemonIndex(query)
                setPokemonSearch(res)
            })
        }
        setSearch()
    }

    useEffect(() => {
        const request = async () => {
            await getPokemon("").then((res) => {
                setPokemonData(res.results)
            })
        }

        request()
    }, []);


    return (
        <Container>
            <GlobalStyle />
            <Search getSearch={getSearch}/>
            {pokemonSearch? <Pokemon data={pokemonSearch} index={pokemonIndex}/> : (
                pokemonData.map(pokemonData => (
                    <PokemonList key={pokemonData.name} name={pokemonData.name} url={pokemonData.url}/>
                ))
            )}
        </Container>
    );
}

export default App;