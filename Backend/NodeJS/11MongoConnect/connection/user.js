const mongoose = require("mongoose");
async function connectDb(url) {
  try {
    await mongoose.connect(url);
    console.log("DB connected Successfully!!");

  } catch (err) {       
    console.log("Something went wrong!!", err);
  }
}

module.exports = connectDb;