const mongoose = require("mongoose");
async function connectDB(url){
    try{
        await mongoose.connect(url);
        console.log("DB connected successfully");
    }
    catch(error){
        console.log("Something went wrong: ",error);
    }
}
module.exports = {connectDB};