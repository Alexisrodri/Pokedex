import React,{ useState, useEffect } from 'react';
import './App.css';
import { Header } from './Componentes/Header';
import Pokedex from './Componentes/Pokedex';
import  Busqueda  from './Componentes/Searchs';
import { FavoriteProvider } from './Context/PokemonesFavoritos';
import { resultPokemons, dataPokemons, pokemonsAPI} from './Fetch';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [cargando,setCargando] = useState(true);
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(0)
  const [favoritos, setFavoritos] = useState([])
  const [noEncontrado, setNoEncontrado] = useState()

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
  }catch(error){} 
  }

  useEffect(()=>{
    fecthPokemons()
  },[page])

const updateFavoritePokemons = (name) => {
  const actualizarFav = [...favoritos]
  const Addfavorito = favoritos.indexOf(name)
  if(Addfavorito > 0 ){
    actualizarFav.splice(Addfavorito, 1)
  }else{
    actualizarFav.push(name)
  }
  setFavoritos(actualizarFav)
}

const Buscador = async(pokemon) => {
  setCargando(true)
  const resultados = await pokemonsAPI(pokemon)
  if(!resultados){
    setNoEncontrado(true)
  }else{
    setPokemons([resultados])
  }
  setCargando(false)
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


export default App;
