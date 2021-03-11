import UserModel from '../models/User.model.js'
import StatusCode from '../configurations/StatusCodes.js'

const createUser = async (request, response) => {

    const user = new UserModel({
        username: request.body.username,
        password: request.body.password,
        age: request.body.age
    })

    try {
        const databaseResponse = await user.save()
        response.status(StatusCode.CREATED).send(databaseResponse)
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error while trying to create user',
            stack: error
        })
    }

}

const getAllUsers = async (request, response) => {
    try {
        const databaseResponse = await UserModel.find()
        response.status(StatusCode.OK).send(databaseResponse)
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error while trying to find user',
            stack: error
        })

    }
}

const deleteUser = async (request, response) => {
    const user = request.body.username
    try {
        const databaseResponse = await UserModel.deleteOne({ username: user })
        response.status(StatusCode.OK).send(databaseResponse)
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error while trying to delete user',
            stack: error
        })
    }
}

const updateUser = async (request, response) => {
    const userId = request.params.userId
    const data = {
        username: request.body.username,
        password: request.body.password
    }
    try {
        const databaseResponse = await UserModel.findByIdAndUpdate(userId, data, { new: true })
        response.status(StatusCode.OK).send({ message: 'Successfully updated user by ID', data: databaseResponse })
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error while trying to update user with ID ${userId}`,
            error: error.message
        })

    }


}

const getUserById = async (request, response) => {
    try {
        const databaseResponse = await UserModel.findById(request.params.userId)
        response.status(StatusCode.OK).send(databaseResponse)

    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error while trying to retrieve user by ID' + response.params.userId,
            error: error.message
        })
    }
}

const getUserByUsernameQuery = async (request, response) => {
    try {
        const databaseResponse = await UserModel.find({ username: request.query.username })
        databaseResponse.length !== 0
            ? response.status(StatusCode.OK).send(databaseResponse)
            : response.status(StatusCode.NOT_FOUND).send({
                message: 'Could not find user with username: ' + request.query.username
            })
        error: error.message
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error while trying to retrieve user by username' + request.query.userId,
            error: error.message
        })
    }
}


export default {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
    getUserById,
    getUserByUsernameQuery

}