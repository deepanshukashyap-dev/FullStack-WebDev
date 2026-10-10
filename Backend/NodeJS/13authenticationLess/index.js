const express = require('express');
const path = require("path");
const cookieParser = require("cookie-parser");

const urlRoute = require('./routes/url.js');
const userRoute = require('./routes/user.js');
const pageRoute = require('./routes/page.js');
const {connectDB} = require("./connection/url.js");
const {checkForAuth,restrictTo} = require("./middleware/auth.js");


const PORT = 3000;
const app = express();

//ejs template engine
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));


// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(checkForAuth);

//Routes
app.use("/url",restrictTo(["NORMAL","ADMIN"]),urlRoute); 
app.use("/user",userRoute);
app.use("/",pageRoute);

//connection
async function startServer() {
    await connectDB("mongodb://localhost:27017/urlShortner-New");

    app.listen(PORT, () => console.log("Server Started ") );
}
startServer();