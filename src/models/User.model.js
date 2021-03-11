import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = Schema({
    username: {
        type: String,
        unique: true,
        allowNull: false,
        required: true,
    },
    age: {
        type: Number,
        min: [18, 'You need to be above 18'],
        max: [90, 'Sorry!'],
        required: false
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

const UserModel = mongoose.model('user', userSchema)
export default UserModel