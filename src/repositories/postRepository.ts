import Post from '../models/post'
import mongoose from 'mongoose'

//need to import commentaries
import { Commentary } from '../models/commentary'
//need to import the post
import { IPost } from '../models/post'
//need to import User
import User from '../models/user'

//func to save post
const savePost = async (body, email) => {
    const author = User.findOne({ email })
    const newPost = new Post ({
        _id : new mongoose.Types.ObjectId(),
        title : body.title,
        date : body.date,
        author : (await author)._id,
        comments : [],
        totalComments : body.totalComments,
        content: body.content
    })

    return await newPost.save()
}

//func to find post by id
const findById = async (id) => {
    return await Post.findById(id)
}

//func to find post by id and modify it
const findbyIdnModify = async (id, body) => {
    const post : IPost = (await findById(id)) as IPost
    post.title = body.title
    post.content = body.content
    return await post.save()
}

//func to find post by id and delete it
const findByIdnDel = async (id) => {
    return await Post.findByIdAndDelete(id)
}

//func to leave a comment inside post
const leaveCommentOnPost = async (id, body, email) => {
    const post : IPost = (await findById(id)) as IPost
    const author = User.findOne({ email })
    const newComent = new Commentary({
        _id : new mongoose.Types.ObjectId(),
        comment : body.comment,
        author : (await author).id,
        date : body.date
    })
    post.comments.push(newComent)
    post.totalComments += 1
    newComent.save()
    return post.save()
}

//export funcs
export default{
    findById,
    findByIdnDel,
    findbyIdnModify,
    leaveCommentOnPost,
    savePost
}