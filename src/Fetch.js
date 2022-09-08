export const pokemonsAPI = async (pokemon)  => {
    try{
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);  
    const data = await response.json();
    return data; 
    }catch(err){}
}

export const resultPokemons = async(limit=24,offset=0) =>{
    try{
        const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const data = await fetch(URL)
    const res = await data.json()
    return res; 
    }catch(err){}
}

export const dataPokemons = async (url) => {
    try{
    const data = await fetch(url)
    const res = await data.json()
    return res; 
    }catch(err){}
}