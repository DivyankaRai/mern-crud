const express = require('express')
const router = new express.Router()
const controller = require("../controllers/userController")
const upload = require("../multerconfig/storageconfig")


// routes
router.post("/user/register",upload.single("user_profile"),controller.userpost)
router.get("/user/details",controller.userget)
router.get("/user/details/:id",controller.singleuser)
router.put("/user/edit/:id", upload.single("user_profile"),controller.useredit)
module.exports = router