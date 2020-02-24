import { Router } from 'express'
import jwt from 'jsonwebtoken'
import postRepository from '../repositories/postRepository'


export const postController = Router()

//check token func
const checkToken = (req, res, next) => {
    const token = req.headers.authorization

    jwt.verify(token, 'super-key-super-secret', (err, data) => {
        if (err){
            res.status(400).json({ err })
        }else{
            next()
        }
    })
}

//release a post func.
postController.post('/', checkToken, async (req, res) => {
    const decodeToken = jwt.decode(req.headers['authorization'])
    const post = await postRepository.savePost(req.body, decodeToken.email)

    if(post){
        res.status(200).json({ message : "Post saved!", post })
    }else{
        res.status(400).json({ message : "Failed to save post" })
    }
})

//Find post by ID func
postController.get('/:id', checkToken, async (req, res) => {
    const id = req.params.id
    const post = await postRepository.findById(id)
    if(post){
        res.status(200).json({message : 'Post found! ', post})
    
    }else{
        res.status(200).json({message : 'Cannot find post ' })
    }
})

//modify post func
postController.patch('/:id', checkToken, async (req, res) => {
    const id = req.params.id
    const post  = await postRepository.findbyIdnModify(id, req.body)
    if(post){
        res.status(200).json({ message : 'Post edited sucessfully! ', post})
    }else{
        res.status(400).json({ message : 'cannot find'})
    }
})

//delete post func
postController.delete('/:id', checkToken, async (req, res) => {
    const id = req.params.id 
    const post = await postRepository.findByIdnDel(id)
    if(post){
        res.status(200).json({ message : 'Post deleted sucessfully! '})
    }else{
        res.status(400).json({ message : 'Unable to delete Post' })
    }
})

//leave commentary on post func
postController.post('/:id/comment', checkToken, async (req, res) => {
    const id = req.params.id
    const decodeToken = jwt.decode(req.headers['authorization'])
    const post = await postRepository.leaveCommentOnPost(id, req.body, decodeToken.email)
    if (post){
        res.status(200).json({ message : 'Sucessfully posted! ', post })
    }else{
        res.status(400).json({ message : ' Unable to post commentary ' })
    }
})