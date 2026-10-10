const {getUser} = require("../service/auth");

function checkForAuth(req,res,next){//Authentication
    // const authorizationHeaderValue = req.headers["authorization"];
    req.user = null;
    const tokenCookie = req.cookies?.token;
    if(!tokenCookie) 
        return next();
    console.log("tokenCookie: ",tokenCookie)
    const token = tokenCookie; //jwt token
    const user = getUser(token); //verify using JWT
    
    console.log("Authenticate User: ",user); //_id , email , role
    req.user = user;
    return next();
}

function restrictTo(roles = []) {//Authorization
    return function(req,res,next) {
        if(!req.user) {
            return res.redirect("/login");
        }
        if(!roles.includes(req.user.role)) return res.end("You are unauthorized");//this check the restrict to whom
        console.log("role: ",req.user)//_id , email , role
        return next(); //if user is authorized
    }
}

module.exports = {
    checkForAuth,
    restrictTo,
}