const express = require("express");
const router = express.Router();
const { handleUserSignUp, handleUserLogin} = require("../../controllers/user/controller")

router.post("/signup", handleUserSignUp); // user/signup post request
router.post("/login",handleUserLogin);// user/login post request

module.exports = router;