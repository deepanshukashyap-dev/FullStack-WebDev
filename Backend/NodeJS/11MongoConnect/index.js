const express = require("express");
const mongoose = require("mongoose");
const { logReqRes } = require("./middlewares/user"); 
const userRouter = require("./routes/user");

const connectDb = require("./connection/user");

const PORT = 8000;
const app = express();

//MiddleWare..
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

//Base-router
app.use("/api/user", userRouter);


//DB Connect
async function startServer(){
  connectDb("mongodb://localhost:27017/oneWinner");

  app.listen(PORT, () => {console.log(`Server Started PORT: ${PORT}`)} );
}
startServer();
