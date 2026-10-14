const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const express = require("express");
const test = require("node:test");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const port = 3000;
const app = express();

app.use(express.json());

app.post("/test", async (req, res) => {
  const userPrompt = req.body.prompt;

  if (!userPrompt) {
    return res.status(400).send("Prompt is required");
  }

  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const result = await model.generateContent(userPrompt);

  const text = result.response.text();

  console.log(text);
  return res.json({ //structured JSON 
    prompt: userPrompt,
    geminiResponse: text,
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// POST request se prompt bhej kar
// Gemini API ko backend ke through call kar sakta hoon
// aur response client tak bhej sakta hoon

// res.json()
// Ab Backend structured JSON bhejega ,
//Frontend / client us JSON ko use karega by parsing it like:

// Ab frontend ka role samjho (important mental shift)

// Frontend JS karega:

// const res = await fetch("/test", {...});
// const data = await res.json();

// console.log(data.answer);

// Matlab:

// Backend = JSON

// Frontend = page

// Frontend ka role (simple words)

// Frontend:

// Request bhejta hai

// Response leta hai

// Us response ko JS object banaata hai

// Screen par dikhata hai

//  const res = await fetch("/api/gemini", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },

// Server, /api/gemini route par POST request bhej raha hoon”

// ⚠️ IMPORTANT

// GET ya POST server nahi guess karta

// Tum frontend se batate ho

// method: "POST"

// res.json({
//   answer: text,
// });
// Iska matlab:JS object ko JSON string me convert karta hai HTTP response me bhejta hai





// Ab frontend ke paas normal JS object hai
// document.getElementById("output").innerText = data.answer;
// 👉 Isi tarah frontend JSON → UI karta hai



// Backend APIs return JSON data, frontend consumes it via fetch, parses it using res.json(), and renders it on the UI