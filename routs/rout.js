const express = require("express");
const { getData, postData } = require("../controler/controler");
const router = express.Router();
//const multer = require('multer');
const path = require("path");
var bodyParser = require('body-parser')
//const fs = require("fs");
router.use(bodyParser.json({limit: '50mb'}));
router.use(bodyParser.urlencoded({limit: '50mb', extended: true}))



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/images')
//     },
//     filename: function (req, file, cb) {
//         const name = file.fieldname + "_" + Date.now() + path.extname(file.originalname)
//         cb(null, name)
//     }
// })

// const upload = multer({
//     storage: storage
// })

//jlklj


router.get("/getApidata", getData);

//upload.single('imageFile'),
router.post("/postData",  postData);



router.post('/demoPost', async function(req, res) {
    // const file = req.files.imageFile; // the uploaded file object
    // const fileName = Date.now() + "_" + req.files.imageFile.name
    // const newPath = path.join(__dirname , "/public/" , fileName)
    // const obj = {
    //   name : req.body.name,
    //   image : "",
    // }


    const file = req.files.imageFile;
    const fileName = Date.now() + "_" + file.name ;
    const prevPath = path.join(__dirname, "..") 
    const newPath = prevPath + "/public/images/" + fileName;
  
    await file.mv(newPath, (err)=>{
      if(err){
        res.send(err)
      }else{res.json({status : fileName})}
    })
    //await res.json(obj)
    // file.mv("../public" + fileName , function(err){
    //     if(err){
    //         res.send(err)
    //     }
    //     else{
    //         res.send("upload done")
    //     }
    // })
  });


module.exports = router;