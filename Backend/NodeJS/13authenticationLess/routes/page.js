const express = require('express');
const router = express.Router();
const {renderSignup,renderLogin,home} = require("../controllers/page.js");
const {restrictTo} = require('../middleware/auth.js');
const Url = require('../models/url.js');

router.get("/admin/urls",restrictTo(["ADMIN"]), async(req, res) => {
    const allUrls = await Url.find({});
    return res.render('home',{
        urls:allUrls,
    });
});

router.get("/",restrictTo(["NORMAL","ADMIN"]),home)
router.get("/login",renderLogin);
router.get("/signup",renderSignup);

module.exports = router;