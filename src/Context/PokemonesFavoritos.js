import React from "react";

const PokemonesFavoritos = React.createContext({
     favoritePokemon: [],
     updateFavoritePokemon: (id) => null
})

export const FavoriteProvider = PokemonesFavoritos.Provider;

export default PokemonesFavoritos;