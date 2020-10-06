const {Schema,model}=require('mongoose')
const CommentSchema=new Schema({
      body:{
           type:String
      },
    postId:{
            type:Schema.Types.ObjectId , 
             ref:'Post'
             },
     userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
          },
      createdAt:{
              type:Date,
              default:Date.now
      }
      
})
module.exports=model('Comment',CommentSchema)
