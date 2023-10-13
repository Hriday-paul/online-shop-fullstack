const express = require("express");
const { getData, postData, demoControler, getPhoto } = require("../controler/controler");
const router = express.Router();
//const multer = require('multer');
const path = require("path");
var bodyParser = require('body-parser')
const fs = require("fs");
router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))



router.get("/getApidata", getData);

//upload.single('imageFile'),
router.post("/postData", postData);

router.get("/getImage/:id", getPhoto)


router.post('/demoPost', demoControler)
  // const file = req.files.imageFile; // the uploaded file object
  // const fileName = Date.now() + "_" + req.files.imageFile.name
  // const newPath = path.join(__dirname , "/public/" , fileName)
  // const obj = {
  //   name : req.body.name,
  //   image : "",
  // }




  // const fileData = fs.readFileSync(newPath);
  // const binary = Buffer.from(fileData);

  

  // await file.mv(newPath, (err) => {
  //   if (err) {
  //     res.send(err)
  //   } else { res.json({ status: fileName }) }
  // })
  //await res.json(obj)
  // file.mv("../public" + fileName , function(err){
  //     if(err){
  //         res.send(err)
  //     }
  //     else{
  //         res.send("upload done")
  //     }
  // })



module.exports = router;