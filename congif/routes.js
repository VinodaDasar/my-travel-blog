const express = require('express')
const router = express.Router()
const usersController = require('../app/controllers/usersCltr')
const { authenticateUser } = require('../app/middlewares/authentication')
const postControllers = require('../app/controllers/postCltr')
const cmtCltr = require('../app/controllers/commentCltr')
const upload = require('../app/middlewares/uploadPicture')
const likeControllers = require('../app/controllers/likeCtlr')

//users log in and register
router.post('/just-trav/register', usersController.register)
router.post('/just-trav/login', usersController.login)

router.get('/just-trav/allusers', usersController.list)

router.get('/just-trav/account', authenticateUser , usersController.account)
router.get('/just-trav/myposts', authenticateUser, postControllers.myPosts)
router.post('/just-trav/createnew', authenticateUser, upload.single('photo') ,postControllers.create)
router.get('/just-trav/listall', authenticateUser, postControllers.listAll)
router.put('/just-trav/editpost/:id', authenticateUser, postControllers.update)
router.delete('/just-trav/deletepost/:id', authenticateUser, postControllers.destroy)

//likes and dislikes
router.post('/just-trav/post/likes/:id', authenticateUser, likeControllers.create)
router.delete('/just-trav/post/dislikes/:id', authenticateUser, likeControllers.destroy)

//comments
router.post('/just-trav/comment/:id', authenticateUser, cmtCltr.create)
router.delete('/just-trav/deletecomment/:id', authenticateUser, cmtCltr.destroy)
router.get('/just-trav/listallcomments', authenticateUser, cmtCltr.list)

module.exports = router

