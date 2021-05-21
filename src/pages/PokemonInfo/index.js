import React, { useState, useEffect} from 'react';
import { getPokemonData, getDescription } from '../../services/getPokemons';
import { GlobalStyle } from '../../global_styles';
import { useLocation } from "react-router-dom";
import InfoHeader from '../../components/infoHeader';

import {
   Container 

} from './styles';

function PokemonInfo(props) {
  let location = useLocation();
  let index = location.state.index

  const [pokemonData, setPokemonData] = useState();
  const [pokemonImg, setPokemonImg] = useState();
  const [pokemonDesc, setPokemonDesc] = useState();
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
      const getData = async () => {
        await getPokemonData(index).then((res) => {
            setLoading(true)
            setPokemonData(res);
            setPokemonImg(res.sprites.other.dream_world.front_default)
            setPokemonTypes(res.types)
            setLoading(false)
            console.log(res)
        });
      }
      const getDes = async () => {
          await getDescription(index).then((res) => {
            res.descriptions.map((i) => {
              if (i.language.name === "en"){
                setPokemonDesc(i.description)  
              }
              return ""
            })
        });
      }

      getData()
      getDes()
  }, [index])

  
  return (
    <>
      {loading ? console.log("a") : (
      <Container>
          <GlobalStyle />
          <InfoHeader 
            pokeImage={pokemonImg} 
            pokeData={pokemonData} 
            pokeTypes={pokemonTypes}
            pokeDescription={pokemonDesc}
          />
      </Container>
      )}
    </>
  );
}

export default PokemonInfo;