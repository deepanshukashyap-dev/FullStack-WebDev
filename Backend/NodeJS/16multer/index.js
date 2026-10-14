const path = require("path");
const express = require("express");
const multer = require("multer");

const app = express();
const PORT = 8000;

//Storage
// const upload = multer({dest:"uploads/"});//jo bhi user file upload karega usko uploads folder me daal do
const storage = multer.diskStorage({
    destination:function(req,file,cb){//req is for user , file-the file to upload , cb-callback
        return cb(null, "./uploads");
    },
    filename: function(req,file,cb){
        return cb(null, `${Date.now()} - ${file.originalname}`);
    },
});
const upload = multer({storage});

//view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//middleware
app.use(express.urlencoded({ extended: false }));

//route
app.get("/", (req, res) => {
  return res.render("home");
});

app.post("/upload",upload.single("profileImage"), (req, res) => {
    console.log("Body: ",req.body);
    console.log(req.file);

    return res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
