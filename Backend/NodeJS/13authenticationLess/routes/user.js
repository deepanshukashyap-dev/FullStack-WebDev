const express = require("express");
const router = express.Router();
const {handleUserLogin,handleUserSignup} = require("../controllers/user.js")


router.post("/signup",handleUserSignup);
router.post("/login",handleUserLogin);

module.exports = router;