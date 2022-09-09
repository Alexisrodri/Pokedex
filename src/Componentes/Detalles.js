import { useEffect, useState } from 'react'
import { Link } from 'wouter';
import { Header } from './Header';


const Detalles = (props) => {
    const Pokemon = props.params.name

const[pokemon,setPokemons]=useState([''])
const[loading,setLoading] = useState(true)

useEffect(()=>{
    pokemonsAPI()
},[Pokemon])


const pokemonsAPI = async ()  => {
    try{
    setLoading(true)
    let url = `https://pokeapi.co/api/v2/pokemon/${Pokemon}`;
    const response = await fetch(url);  
    const data = await response.json();
    setPokemons(data)
    setLoading(false)
    }catch(err){}
}




return(
    <div>
    <Header />        
    <Link href="/" className='Link Link-detail'>Inicio</Link>
    {loading ? 
        <h3 className="Cargando">Cargando Pokemon...</h3>
        :
        <section className='section-detail'>
        <picture className="detail-img">
        <h3 className='poke-name' >{pokemon.name} N.º{pokemon.id}</h3>
        <img src={pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default } alt={pokemon.name}/>
        </picture>
        <article className='detail-info'>
        <div className='detalles'> 
        <h2>altura: <span>{pokemon.height/10} metros</span></h2>
        <h2>Peso: <span>{pokemon.weight/10} Kg</span></h2>
        </div>
        <article className='tipos'>
        <div className='habilidades'>
        <p>Habilidades</p>
        {pokemon.abilities.map((abilitie,idx) => {
            return (
                <div className="details" key={idx}>{abilitie.ability.name}</div>
                )
        })}
        </div>
        <div className='tipo'>
        <p>Tipo:</p>
        {pokemon.types.map((tipo,idx) => {
            return <div className="details" key={idx}>{tipo.type.name}</div>
        })}
        </div>
        </article>
        </article>
        </section>
    }
    
    </div>
)
}

export default Detalles;