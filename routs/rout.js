const express = require("express");
const { getData, postData } = require("../controler/controler");
const router = express.Router();
const multer = require('multer');
const path = require("path");


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

module.exports = router;