import React, { useContext } from "react";
import { Link } from 'wouter'
import PokemonesFavoritos from "../Context/PokemonesFavoritos";

const Pokemon = (props) => {
    const { pokemon } = props
    const {favoritePokemon, updateFavoritePokemon} = useContext(PokemonesFavoritos)

    const heartBlack = "🖤";
    const heartRed = "💖";

    const hearts = favoritePokemon.includes(pokemon.name) ? heartRed : heartBlack;

    const clickFavoritos = (e) => {
        e.preventDefault()
        updateFavoritePokemon(pokemon.name)
    }

    return(
        <div className="pokemons-cards">
        <div className="poke-img">
        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        </div>
        <div className="cont-info">
        <div className="Poke-name">
        <Link href={`/${pokemon.name}`} className=".Link-pokemon" >{pokemon.name}</Link>
        <h4>{pokemon.id}</h4>
        </div>
        <div className="poke-tipos">
        {pokemon.types.map((tipo,idx) => {
            return <div className="poke-tipo" key={idx}>{tipo.type.name}</div>
        })}
        <div className="like">
        <button className="Favorito " onClick={clickFavoritos}>{hearts}</button>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Pokemon;