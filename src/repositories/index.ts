import mongoose from 'mongoose'

const dataBase = 'ApiDB' 

//conect DB
const connectDB = () => {
    return mongoose.connect('mongodb://localhost:27017/' + dataBase , { useNewUrlParser: true })
}

export { connectDB }