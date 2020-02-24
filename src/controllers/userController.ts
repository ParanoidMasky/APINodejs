import { Router } from 'express'
import jwt from 'jsonwebtoken'
import userRepository from '../repositories/userRepository'

export const userController = Router ()

//verify token func
const checkToken = (req, res, next) => {
    const token = req.headers.authorization
    jwt.verify(token, 'super-key-super-secret', (err, data) =>{
        if (err) {
            res.status(400).json({ err })
        }else {
            next()
        }
    })
}

//login func (with token generator)
userController.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await userRepository.findByEmailnPass(email, password)
    if (user) {
        jwt.sign({ email }, 'super-key-super-secret', (err, token) =>{
            res.status(200).json({ token, message: 'Logged'})

        })
    }else{
        res.status(404).json({ err: "User doesn't exist" })
    }
})

//find user by ID func
userController.get('/:id', checkToken, async (req, res) => {
    const id = req.params.id
    const user = await userRepository.findById(id)
    if(user) {
        res.status(200).json({ message : "OK", user})
    }else{
        res.status(404).json({ err: "User not found!" })
    }
})

//delete user by ID func
userController.delete('/:id', checkToken, async (req, res) => {
    const id = req.params.id 
    const user = await userRepository.findByIdnDel(id)
    if(user){
        res.status(200).json({ message : "User deleted" })
    }else{
        res.status(404).json({ message : "User not found, cannot delete" })
    }
})

// add user func
userController.post('/', async (req, res) => {
    const user = await userRepository.saveUser(req.body)
    if (user){
        res.status(200).json({ message : 'User registered', user })
        
    }else{
        res.status(400).json({ message : 'Unable to register User'})
    }
})