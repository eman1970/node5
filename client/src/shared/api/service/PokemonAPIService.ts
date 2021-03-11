import http from '../PokemonAPI'

const searchPokemon = (search: string) => {
return http.get(`/pokemon/${search}`)


}

const getAllPokemon = () => {
    return http.get('/pokemon?limit=1118')
}

export default {
    searchPokemon,
    getAllPokemon
    
}
