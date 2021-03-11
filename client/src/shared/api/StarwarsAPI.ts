import Axios from 'axios'

const URL = 'https://swapi.dev/api/'
const StarwarsAPI = Axios.create ({
baseURL: URL

})

export default StarwarsAPI