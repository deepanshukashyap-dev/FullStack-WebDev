const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const express = require("express");
const { error } = require("node:console");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const port = 3000;
const app = express();


app.use(express.json());
// app.use(express.urlencoded()); //not using this bcz we are sending json through js , not handling form
app.use(express.static("public"));  //Static File Middleware,Is folder ke andar jo bhi files hain (HTML, CSS, JS, images),
// unko directly browser ko serve kar do.

app.post("/api/test", async (req, res) => {
  try {
    console.log(req.body); //prompt js object kyunki json ko middleware ne parse kardiya
    const userPrompt = req.body.prompt; //userPrompt from the frontend

    if (!userPrompt) {
      return res.status(400).json({ error: "Prompt require" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(userPrompt);

    const text = result.response.text();
    console.log("Gemini response: ", text); //gemini response

    return res.json({
      userPrompt: userPrompt,
      response: text,
    });
  } 
  
  catch (error) {
    console.log(error);
  }

});

app.listen(port, () => {
  console.log("Server started on the port: 3000");
});
