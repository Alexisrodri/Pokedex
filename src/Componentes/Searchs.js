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
            if(e.target.value.length === 0) {
                Buscador(null)
            }
    }
    
    const BuscadorClick = async(e) => {
        Buscador(buscar)
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