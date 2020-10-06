const multer =require('multer')
// const path=require('path')

// let pa=path.dirname(__dirname)
// console.log("paht",pa)
const storage = multer.diskStorage({
    
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(req.file, new Date().toISOString().replace(/[\/\\:]/g, "_")+file.originalname);
  }
});
 const upload=multer({storage:storage})
 module.exports=upload

