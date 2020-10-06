const Post = require('../models/post')
postControllers={}

//create new post
postControllers.create = (req,res)=>{
    const body = req.body
    const post = new Post(body)
    //console.log(JSON.stringify(req))
    console.log("req", req)
    console.log("req file", req.file)
    post.userId =  req.user._id
    post.photo = req.file.path
    post.save()
        .then((post)=>{
            res.json(post)
        })
        .catch((err)=>{
            res.json(err)
        })
}

//list all the posts
postControllers.listAll=(req,res)=>{
    Post.find()
    .populate("comments")
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//list all posts of an user
postControllers.myPosts=(req,res)=>{
    Post.find({userId: req.user._id})
    .populate("userId", "_id username")
        .then((mypost)=>{
            res.json(mypost)
        })
        .catch((err)=>{
            res.json(err)
        })
}

//update particular posts
postControllers.update=(req,res)=>{
    const id = req.params.id
    const body = req.body
    Post.findByIdAndUpdate({userId: req.user._id, _id:id},{$set: body},{new: true, runValidators: true})
        .then((posts)=>{
            res.json(posts)
        })
        .catch((err)=>{
            res.json(err)
        })
}

//delete particluar posts
postControllers.destroy=(req,res)=>{
    const id = req.params.id
    Post.findByIdAndDelete({_id: id})
        .then((posts)=>{
            res.json(posts)
        })
        .catch((err)=>{
            res.json(err)
        })
}


module.exports = postControllers