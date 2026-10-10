const Url = require('../models/url');

function renderSignup(req,res){
    return res.render("signup");
}
function renderLogin(req,res){
    return res.render("login");
}

async function home(req,res) {
    const allUrls = await Url.find({
        createdBy:req.user._id,
    });
    // if(!req.user) { //if not logged in checkForAuth middleware makes req.user=null
    //     return res.redirect("/login");
    // }
    return res.render("home",{
        urls:allUrls,
    });
}

module.exports = {
    renderLogin,
    renderSignup,
    home,
}