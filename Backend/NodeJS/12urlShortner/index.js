const express = require("express");
const path = require("path"); //to work with file and directory paths (for ejs setup)
const cookieParser = require("cookie-parser");

const urlRoutes = require("./routes/url/route");
const pageRoutes = require("./routes/page/route"); //static router which handles static request to render pages only..
const userRoutes = require("./routes/user/route")
const { connectDB } = require("./connection/url");
const {restrictTologgedInUserOnly} = require("./middlewares/auth");

const app = express();
const PORT = 8001;

//view engine setup (EJS) to render dynamic HTML pages and send to user, we can use other view engines also like pug,hbs etc..
app.set("view engine", "ejs");
app.set("views", path.resolve("./views")); //setting views directory for ejs files,
//1st views is the name of the folder where ejs files are stored
//2nd ./views is the relative path of the views folder from the current working directory

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //to parse form data
app.use(cookieParser());

//routes
app.use("/url", restrictTologgedInUserOnly, urlRoutes); //base route--> /url
app.use("/", pageRoutes);    //static router
app.use("/user",userRoutes);

//connection
async function startServer() {
  await connectDB("mongodb://localhost:27017/urlShortner-db");

  app.listen(PORT, () => {
    console.log("Server Started : ", PORT);
  });
}
startServer();
