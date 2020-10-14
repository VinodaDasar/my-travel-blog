const mongoose = require('mongoose')
const Schema = mongoose.Schema
const postSchema = new Schema({
    title:{
        type: String,
        required: true,
        minlength: 3
    },
    body:{
        type: String,
        required: true,
        minlength: 3
    },
    photo:{
        type: String
    },
    comments:[{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    likes:[{
        type: Schema.Types.ObjectId,
        ref: 'Like'
    }],
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }
},{timestamps: true})

const Post = mongoose.model('Post', postSchema)

module.exports = Post