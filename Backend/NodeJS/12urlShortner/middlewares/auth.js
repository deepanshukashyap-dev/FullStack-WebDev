const {getUser} = require("../service/auth");

async function restrictTologgedInUserOnly(req,res,next) {
    // const sessionId = req.cookies.sessionId;//statefull me sessionId name use hua hai 
    const token = req.cookies.sessionId; //stateless ke liye we use token keyword (meaningfull)

  // ** old statefull version =  token --> sessionId **

    if(!token){  
        return res.redirect("/login");
    }
    //Now verify using jwt.verify with secret key(stateless part)
    const user = getUser(token); //get user from the map using sessionId from cookie, agar server restart hua hoga to map me kuch 
    // hoga nhi isliye user null hoga and redirect to login jabki cookie me sessionId hoga leken map me wo sessionId ka koi user nhi hoga.
    if(!user){
        return res.redirect("/login");
    }
    console.log("Authenticated User: ", user); //best practice to log authenticated user details
    req.user = user; //attach user to req object so that next middlewares and routes can access the user
    next();
}
module.exports = {
    restrictTologgedInUserOnly,
}