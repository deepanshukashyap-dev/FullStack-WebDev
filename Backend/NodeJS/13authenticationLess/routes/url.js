const express = require("express");
const router = express.Router();
const {handleGenerateNewShortUrl,handleRedirectShortid} = require("../controllers/url");

router.post("/",handleGenerateNewShortUrl);
router.get("/:shortId",handleRedirectShortid);
module.exports = router;