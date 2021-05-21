import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import json from '../../json';
import { 
  Container, 
  PokemonImg, 
  PokemonName, 
  PokemonTypes,
  HeaderWrapper, 
  Wrapper, 
  PokemonDescription,
  Bar,
  BarColor,
  BarContent,
  BarTitle,
  InlineWrapper,
  ContentWrapper,
  BoxInfo,
  MiddleWrapper,
  StatsWrapper,
  BoxTitle,
  BoxText,
  BoxImg,
  Button,
  ButtonText
} from './styles';

export default function InfoHeader({pokeImage, pokeData, pokeTypes, pokeDescription}) {

  const [barSize, setBarSize] = useState();
  //const [barColor, setBarColor] = useState();

  useEffect(() => {
    pokeData.stats.map(i => {
      let size = (i.base_stat * 100 )/ 150;
      setBarSize(size)
      return ""
    })

    console.log(pokeData)
  }, [pokeData])

  return (
    <Container>
      <HeaderWrapper>
        <Wrapper>
          <PokemonImg src={pokeImage}></PokemonImg>
          <ContentWrapper>
            <InlineWrapper>
              <PokemonName>{pokeData.name}</PokemonName>
              {pokeTypes.map(types => (
              <PokemonTypes key={types} bgColor={`#${json.map(items => (items[types.type.name]))}`}>{types.type.name}</PokemonTypes>
              ))}
            </InlineWrapper>
            <PokemonDescription>{pokeDescription}</PokemonDescription>
          </ContentWrapper>
        </Wrapper>
      </HeaderWrapper>
      <MiddleWrapper>
        <StatsWrapper>
          {pokeData.stats.map(i => (
            <Bar key={i.stat.name}>
            <BarTitle>{i.stat.name}</BarTitle>
            <BarColor>
              <BarContent size={`${barSize}%`} >{i.base_stat}</BarContent>
            </BarColor>
            </Bar>
          ))}
        </StatsWrapper>
        <BoxInfo>
          <InlineWrapper>
            <BoxTitle>Height:</BoxTitle><BoxText>{pokeData.height / 10} M</BoxText>
            <BoxTitle>Weight:</BoxTitle><BoxText>{pokeData.weight / 10} Kg</BoxText>
          </InlineWrapper>
          <InlineWrapper>
            <BoxTitle>Experience:</BoxTitle><BoxText>{pokeData.base_experience}</BoxText>
            <BoxTitle>Sprite:</BoxTitle><BoxImg src={pokeData.sprites.front_default} />
          </InlineWrapper>
        </BoxInfo>
      </MiddleWrapper>
      <Link to="/pokedex" style={{textDecoration: 'none'}} ><Button><ButtonText>BACK</ButtonText></Button></Link>
    </Container>
  );
}