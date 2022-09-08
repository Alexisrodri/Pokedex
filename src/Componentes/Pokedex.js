import React from "react";
import { Link } from "wouter";
import Paginacion from "./Paginacion";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {

const {cargando ,pokemons, page, setPage, total} = props;

const lastPages = () => {
const pages = Math.max(page - 1, 0)
setPage(pages)
}

const nextPages = () => {
    const pages = Math.min(page + 1,total)
    setPage(pages)
}
    return(
        <section className="Pokedex">
        <div className="cont-text">
        <Link href="/" className="Link-inicio">Inicio</Link> 
        <Paginacion pages={page} totalPages={total} clickLeft={lastPages} clickRight={nextPages}/>
        </div>
        {cargando ? 
        <h3 className="Cargando">Cargando Pokemones...</h3>
        :
        <div className="Grid-pokedex">
        {pokemons.map((pokemon,idx)=>{
            return <Pokemon pokemon={pokemon} key={pokemon.name}/>
        })}
        </div>
    }
        </section>
        )
}

export default Pokedex