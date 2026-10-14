
const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req,res) => {
    return res.send("Welcome to the home page");
});

app.get("/about", (req,res) => {
    console.log(req.query.name);
    return res.send("This is About Page "+"Hy "+req.query.name);
    
});

app.get("/search",(req,res) => {
    return res.send(`Your search result for ${req.query.search_query}`)
});

app.listen(port,()=>console.log("Server Started!")); // callback to console is optional


