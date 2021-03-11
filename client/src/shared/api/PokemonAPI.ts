import Axios from 'axios'

const URL = 'https://pokeapi.co/api/v2/'
const PokemonAPI = Axios.create({ 
    baseURL: URL
})
export default PokemonAPI

 