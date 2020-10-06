const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Post = require('../models/post')
const usersController ={}

usersController.register=(req,res)=>{
    const body = req.body
    const user=new User(body)
    //password encryption 
    bcryptjs.genSalt()
    .then((salt)=>{
        bcryptjs.hash(user.password, salt)
                .then((encrypted)=>{
                    user.password = encrypted
                    user.save()
                         .then((user)=>{
                             res.json(user)
                         })
                         .catch((err)=>{
                             res.json(err)
                         })
                })
    })
    
}

usersController.login = (req, res)=>{
    const body = req.body
    User.findOne({email: body.email})
     .then((user)=>{
        if(!user){
            res.json({
                errors:'invalid email or password'
            })
        }
        bcryptjs.compare(body.password, user.password)
                .then((match)=>{
                    if(match){
                        //token generation
                        const tokenData={
                            _id: user._id,
                            email: user.email,
                            username: user.username
                        }
                        const token = jwt.sign(tokenData, 'dct123', {expiresIn: '2d'})
                        res.json({
                            token: `Bearer ${token}`
                        })
                    }
                    else{
                        res.json({erros:'invalid email or password'})
                    }

                })
     })
}

usersController.account = (req, res) => {
  res.json(req.user)
}


usersController.list=(req, res)=>{
    User.find()
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        res.json(err)
    })
}

usersController.forgetpassword=(req,res)=>{
    const email = JSON.stringify(req.body)
    User.findOne({email: req.body.email})
        .then((user)=>{
            if(user)
            {
                const formData={
                    id: user._id
                }
                const token=jwt.sign(formData, process.env.key,{expiresIn: '1d'})
                transporter.sendMail({

                    to:user.email,
                    from: "justtravelouscommunity@gmail.com",
                    subject: "reset password",
                    html:`<h4> Click on   link to  <a href=http://localhost:3000/just-trav/reset/${token}> click here</a> to reset the password</h4>`
                })
                res.json("check the mail")
            }
            else{
                res.json({errors: "invalid email adddress"})
            }
        })
}

usersController.newPassword=(req,res)=>{
    const token=req.body.token
    const body=req.body
    const users = new User(body)

    const tokenData = jwt.verify(token, process.env.key)
    User.findById({_id: tokenData.id})
        .then((user)=>{
            if(user)
            {
                user.password=req.body.password
                   user.save()
                        .then((saveduser)=>{
                            res.json({message:"password reset successfull"})
                        })
            }
            else{
                res.json({errors: "invalud resent link"})
            }
        })
}


module.exports = usersController