const express = require("express");
const { getData, postData, demoControler } = require("../controler/controler");
const router = express.Router();
const multer = require('multer');
const path = require("path");
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        const name = file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        cb(null, name)
    }
})

const upload = multer({
    storage: storage
})


router.get("/getApidata", getData);

router.post("/postData", upload.single('imageFile'), postData);

router.post("/demoPost", demoControler)

module.exports = router;