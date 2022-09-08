import React,{useState} from "react"

const Busqueda = (props) => {
    const {Buscador} = props
    const [buscar,setBuscar] = useState('');

    const Enter = (e) => {
        if(e.key === "Enter"){
            BuscadorClick();
        }
    }

    const buscador = (e) => {
            setBuscar(e.target.value)
    }
    
    const BuscadorClick = async(e) => {
        Buscador(buscar)
        console.log('enter');    
    }


    return( 
        <section>
        <div className="cont-buscador">
        <input className="Buscador" placeholder="Busca un pokemon..." onChange={buscador} onKeyDown={Enter}></input>
        <button className="buscador-btn" onClick={BuscadorClick}>🔍</button>
        </div>
        </section>
    )
}

export default Busqueda;