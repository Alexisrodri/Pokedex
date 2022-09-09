import React,{ useState, useEffect } from 'react';
import { Header } from './Header';
import Pokedex from './Pokedex';
import  Busqueda  from './Searchs';
import { FavoriteProvider } from '../Context/PokemonesFavoritos';
import { resultPokemons, dataPokemons, pokemonsAPI} from '../Fetch';


function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [cargando,setCargando] = useState(true);
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(0)
  const [favoritos, setFavoritos] = useState([])
  const [noEncontrado, setNoEncontrado] = useState()
  const [buscando, setBuscando] = useState(false)


  const localStorageKey = "favorites_pokemon"
  
  const fecthPokemons = async() => {
    try{
    setCargando(true);
    const data = await resultPokemons(24, 24 * page);
    const promesas = data.results.map(async(pokemon)=> {
      return await dataPokemons(pokemon.url)
    })
    const resultados = await Promise.all(promesas)
    setPokemons(resultados)
    setCargando(false)
    setTotal(Math.floor(data.count / 24))
    setNoEncontrado(false)
  }catch(error){} 
  }

  const loadFavoritesPokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(localStorageKey))|| [];
    setFavoritos(pokemons)

  }

  useEffect(()=>{
    loadFavoritesPokemons();
  },[])


  useEffect(()=>{
    if(!buscando){
      fecthPokemons()
    }
  },[page])

const updateFavoritePokemons = (name) => {
  const actualizarFav = [...favoritos]
  const Addfavorito = actualizarFav.indexOf(name)
  if(Addfavorito >= 0 ){
    actualizarFav.splice(Addfavorito, 1)
  }else{
    actualizarFav.push(name)
  }
  setFavoritos(actualizarFav)
  window.localStorage.setItem(localStorageKey,
    JSON.stringify(actualizarFav))
}

const Buscador = async (pokemon) => {
  if(!pokemon){
    return fecthPokemons()
  }
  setCargando(true)
  setCargando(false)
  setBuscando(true)
  const lowerCase = pokemon.toLowerCase()
  const resultados = await pokemonsAPI(lowerCase)
  if(!resultados){
    setNoEncontrado(true)
    setCargando(false)
    return;
  }
  else{
    setPokemons([resultados])
  }
  setCargando(false)
  setBuscando(false)
}



  return ( 
  <FavoriteProvider value={{
    favoritePokemon:favoritos,
    updateFavoritePokemon:updateFavoritePokemons
  }}>
  <Header />
  <Busqueda pokemons={pokemons} Buscador={Buscador} />
  {noEncontrado ?
  <h1>Pokemon no encontrado😢</h1>
:
<Pokedex cargando={cargando} pokemons={pokemons} page={page} setPage={setPage} total={total}/>
}

</FavoriteProvider>
    );
}


export default Main;
