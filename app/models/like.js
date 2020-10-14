const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LikeSchema = new Schema({
        userId :{
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        postId: {
            type: Schema.Types.ObjectId,
            ref: 'Post'

        }
})

const Like = mongoose.model('Like', LikeSchema)

module.exports = Like