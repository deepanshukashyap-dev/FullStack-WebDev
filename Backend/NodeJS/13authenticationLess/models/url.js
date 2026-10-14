const mongoose = require("mongoose");
const { ref } = require("node:process");

const urlSchema = new mongoose.Schema({
    shortId: {
        type:String,
        required:true,
    },
    redirectUrl: {
        type:String,
        required:true,
    },
    visitHistory: [{timestamp:{type: Number}}],
    createdBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
},
{timestamps:true}
);

const URL = mongoose.model("Url",urlSchema);
module.exports = URL;