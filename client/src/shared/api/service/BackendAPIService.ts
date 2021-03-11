import http from '../BackendAPI'
import {iCreateNewUser} from '../../../shared/interface/Interface'

const createUser = (data: iCreateNewUser) => {
    return http.post('/user', data)
}

const getAllUsers = () => {
    return http.get('/user')

}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    createUser,
    getAllUsers
}