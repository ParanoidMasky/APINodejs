import User from '../models/user'
import mongoose from 'mongoose'

//func to find bt email and pass
const findByEmailnPass = async (email, password)=> {
    return await User.findOne({ email, password })
}

//func to find by id
const findById = async (id) => {
    return await User.findById(id)
}

//func to find by id and delete
const findByIdnDel = async (id) => {
    return await User.findByIdAndDelete(id)
}

//func to save user
const saveUser = async (user) => {
    const newUser = new User({
        _id : new mongoose.Types.ObjectId(),
        email : user.email,
        password : user.password
    })
    return await newUser.save()
}

//export funcs
export default {
    findByEmailnPass,
    findById,
    findByIdnDel,
    saveUser
}