const {GoogleGenerativeAI} = require("@google/generative-ai");
require("dotenv").config();
console.log("KEY:", process.env.GEMINI_API_KEY);

const express = require("express");

const app = express();
const port = 3000;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get("/listen", async(req,res) => {
    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
    })

    const result = await model.generateContent("write a short note on relationship");
    const text = result.response.text();

    console.log(text);
    res.send(text);
})

app.listen(port, () => {
    console.log("Server Started on the port: 3000");
})
