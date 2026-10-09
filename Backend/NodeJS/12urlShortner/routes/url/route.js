const express = require("express"); //importing express to create router instance

//importing handlers from the "controllers" to handle requested routes
const {handleGenerateNewShortURL,handleShowAnalytics,handleRedirectShortId} = require("../../controllers/url/controller"); 

const router = express.Router(); //creating router instance for defining routes and mapping handlers

//defining routes and mapping handlers
router.post("/",handleGenerateNewShortURL);
// router.get("/analytics/:shortId",handleShowAnalytics);
router.get("/:shortId",handleRedirectShortId)

module.exports = router; //exporting to use in index.js as a middleware or we say to use as a base route /url