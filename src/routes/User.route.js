import UserController from '../controllers/User.controller.js'

const routes = (app) => {
    app.post('/user', UserController.createUser)
    app.get('/user', UserController.getAllUsers)
    app.delete('/del', UserController.deleteUser)
    app.put('/user/:userId', UserController.updateUser)
    app.get('/search/:userId', UserController.getUserById)
    app.get('/searchuser', UserController.getUserByUsernameQuery)
}

export default {
    routes
}