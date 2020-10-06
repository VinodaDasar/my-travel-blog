const Comment = require('../models/comment')
const Post = require('../models/post')
const cmtCltr={}

cmtCltr.create = async(req,res)=>{
    console.log("req user", req.user)
    const id = req.params.id // id from the url //post_id 
    const data = await Post.findOne({_id:id})
    const body = req.body
    const comment = new Comment(body)
    comment.userId = req.user._id 
    comment.postId = data._id
    await comment.save()
    .then((cmt)=>{
        //res.json(cmt)
    })
   .catch((err)=>{
        res.json(err)
    })

    data.comments.push(comment._id)

    await data.save()
    .then((data)=>{
        res.json(data)
    })
}


//delete particular comment
cmtCltr.destroy = (req,res)=>{
    const id = req.params.id 
    //res.json(id)//comment_id
    Comment.findById({_id:id})
     .then((cmt)=>{
         Post.findById({_id: cmt.postId})
             .then((data)=>{
                 res.json(data)
                 data.comments.pull({_id:id})
                 data.save()
                     .then((art)=>{
                         res.json(art)
                     })
             })
     })
     Comment.findByIdAndDelete({_id:id})
            .then((cmt)=>{
                cmt.save()
                res.json(cmt)
            })
}

//list all the comments
cmtCltr.list=(req,res)=>{
    Comment.find()
    .then((cmt)=>{
        res.json(cmt)
    })
    .catch((err)=>{
        res.json(err)
    })
}


module.exports= cmtCltr