const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");
const { ref } = require("process");

const urlSchema = new mongoose.Schema(
  {
    shortId: { //from the package automatically
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: { //from the user (post request)
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,//reference to user model
      ref:"user",//model name is user
    }
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema); //model name urls in db

module.exports = URL;  //exporting for use in controller 
