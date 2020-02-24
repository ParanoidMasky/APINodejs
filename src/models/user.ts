import mongoose, { Schema } from 'mongoose'

const userSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    email: String,
    password : {
        type: String,
        minlength: 5
    }
})

const User = mongoose.model('User', userSchema)
export default User