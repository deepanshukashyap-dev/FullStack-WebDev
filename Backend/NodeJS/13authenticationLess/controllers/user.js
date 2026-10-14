const userModel = require("../models/user");
const {setUser} = require("../service/auth.js");

async function handleUserSignup(req,res){
    const {name,email,password} = req.body;
    await userModel.create({
        name,
        email,
        password,
    })
    return res.redirect("/login");
}

async function handleUserLogin(req,res){
    const {email,password} = req.body;
    const user = await userModel.findOne({email,password});
    if(!user) {
        return res.render("login",{error:"Either password or email is incorrect"})
    }
    console.log("Login success Found User: ",user); //user object

    const token = setUser(user);
    res.cookie("token",token);
    return res.redirect("/");
    // res.json({ token }); // token me _id , email hai for header bearer authorization
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}