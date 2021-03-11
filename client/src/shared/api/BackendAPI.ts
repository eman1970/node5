import Axios from 'axios'

const BackendAPI = Axios.create({
    baseURL:'http://localhost:3002'
})

export default BackendAPI