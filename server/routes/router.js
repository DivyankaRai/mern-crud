const express = require('express')
const router = new express.Router()
const controller = require("../controllers/userController")
const upload = require("../multerconfig/storageconfig")


// routes
router.post("/user/register",upload.single("user_profile"),controller.userpost)

module.exports = router