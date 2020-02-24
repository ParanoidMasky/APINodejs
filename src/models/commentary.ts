import moongose, { Schema } from 'mongoose'

const commentarySchema = new moongose.Schema({
    _id : Schema.Types.ObjectId,
    comment: String,
    author: { type: Schema.Types.ObjectId, ref: 'User'},
    date: String
})

export const Commentary = moongose.model('Comment', commentarySchema)