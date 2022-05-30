import React from "react";
import PokemonesFavoritos from "../Context/PokemonesFavoritos";

const {useContext} = React;

export const Header = () => {

    const {favoritePokemon} = useContext(PokemonesFavoritos);
    

    const URL = `https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png`;
    return(
        <header className="Header" id="Header">
            <picture className="Picture">
            <img alt="Poke-img" src={URL}/>
            </picture>
            <div className="Pokemons-favoritos">
            <i>&#10084;&#65039; {favoritePokemon.length}</i>
            </div>
            </header>
    );
}