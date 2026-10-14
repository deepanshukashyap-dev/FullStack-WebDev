const mongoose = require("mongoose");
async function connectDB(url){
    try{
        await mongoose.connect(url);
        console.log("DB connected Succesfully!!");
    }catch(err){
        if(err){
            console.log("Something Went Wrong!")
        }
    }
    
}
module.exports = {
    connectDB,
}