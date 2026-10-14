require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");

const port = 3000;
const app = express();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get("/test", async (req, res) => {
  const userPrompt = req.query.prompt;

  if (!userPrompt) {
    return res.send("please provide prompt ?prompt=");
  }

  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const result = await model.generateContent(userPrompt);

  const text = result.response.text();

  console.log("Gemini response: ", text);
  return res.send(text);
});

app.listen(port, () => {
  console.log("server is started");
});
