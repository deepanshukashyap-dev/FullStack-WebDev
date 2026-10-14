require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { log } = require("node:console");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); //gemini client create

async function callGemini() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent("han bhai kesa hai or bata ");
    //   console.log("Raw Response: ",result);
    const text = result.response.text();
    console.log(text);
  } catch (err) {
    console.log(err);
  }
}
callGemini();



// Main Gemini API ko Node.js se directly call kar sakta hoon
// aur response ka structure samajhta hoon