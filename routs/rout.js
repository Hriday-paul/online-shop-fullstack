const express = require("express");
const { getData } = require("../controler/controler");
const router = express.Router();

router.get("/getApidata", getData);

module.exports = router;