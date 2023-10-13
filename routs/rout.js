const express = require("express");
const { getData, postData, demoControler, getPhoto } = require("../controler/controler");
const router = express.Router();
const path = require("path");
var bodyParser = require('body-parser')
router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))



router.get("/getApidata", getData);

//upload.single('imageFile'),
router.post("/postData", postData);

router.get("/getImage/:id", getPhoto)


router.post('/demoPost', demoControler)




module.exports = router;