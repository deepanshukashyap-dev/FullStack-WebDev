const Url = require("../models/url");
const shortid = require("shortid");

async function handleGenerateNewShortUrl(req,res){
    const body = req.body;
    if(!body.url) {
        return res.status(400).render("home");
    }
    const shortId = shortid(8);
    await Url.create({
        shortId,
        redirectUrl: body.url,
        visitHistory:[],
        createdBy:req.user._id,
    });
    return res.render("home",{id:shortId});
}

async function handleRedirectShortid(req,res) {
    const shortId = req.params.shortId;
    const entry = await Url.findOneAndUpdate(
        {shortId},
        {
            $push:{visitHistory:{timestamp:Date.now()}}
        }
    );
    res.redirect(entry.redirectUrl);
}

module.exports = {
    handleGenerateNewShortUrl,
    handleRedirectShortid,
}