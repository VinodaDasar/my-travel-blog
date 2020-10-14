const Like = require('../models/comment')
const Post = require('../models/post')
const likeControllers={}

likeControllers.create=async(req,res)=>{
    console.log("user", req.user)
    const id = req.params.id
    let data = await Post.findById({_id: id})
    console.log("data", data)
     const userId = req.user._id
     const like = new Like({
         userId: userId,
         postId: data._id
     })
     await like.save()
               .then((like)=>{
                   //res.json(like)
               })
               .catch((err)=>{
                   res.json(err)
               })
    //console.log("Like", art)
    data.likes.push(like.userId)
    await data.save()
             .then((like)=>{
                 res.json(like)
             })
             .catch((err)=>{
                 res.json(err)
             })
}

likeControllers.destroy=(req,res)=>{
    const id = req.params.id
    const userId=req.user._id
    Post.findById({_id:id})
        .then((dislike)=>{
            //res.json(dislike)
            data.likes.pull(userId)

        data.save()
            .then((dislike)=>{
                res.json(dislike)
            })
        })

        Like.findOne({postId:id})
            .then((dislike)=>{
                console.log("dislike", dislike)
                Like.findByIdAndDelete({_id:likes._id})
                    .then((dis)=>{
                        dis.save()
                        res.json(dis)
                    })
            })     
}


module.exports = likeControllers