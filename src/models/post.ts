import mongoose, { Schema } from 'mongoose'

export interface IPost extends mongoose.Document {
    title: string,
    date: string,
    author: any,
    comments: [any],
    totalComments: number,
    content: string
}

const postSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    date: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    totalComments: Number,
    content: String
})

const Post = mongoose.model('Post', postSchema)

export default Post