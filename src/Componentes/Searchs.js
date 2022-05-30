import React,{useState} from "react"
import { pokemonsAPI } from "../Fetch";

const Busqueda = (props) => {
    const [buscar,setBuscar] = useState('');
    const [pokemon, setPokemon] = useState();

    const Enter = (e) => {
        if(e.key === "Enter"){
            BuscadorClick();
        }
    }

    const Buscador = (e) => {
            setBuscar(e.target.value)
    }
    
    const BuscadorClick = async(e) => {
        const data = await pokemonsAPI(buscar)
        setPokemon(data)    
}


    return( 
        <section>
        <div className="cont-buscador">
        <input className="Buscador" placeholder="Busca un pokemon..." onChange={Buscador} onKeyDown={Enter}></input>
        <button className="buscador-btn" onClick={BuscadorClick}>🔍</button>
        </div>
        </section>
    )
}

export default Busqueda;