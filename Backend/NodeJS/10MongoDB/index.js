const express = require("express");

const fs = require("fs");
const mongoose = require("mongoose");


const app = express();
const PORT = 8000;

//====================================== Connection =======================================
mongoose
  .connect("mongodb://localhost:27017/MyDb-1") //DB created of name MyDb-1
  .then(() => console.log("Mongoo Connected Succesfully!"))
  .catch((err) => console.log("Mongoose Problem", err));
//Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
//Model
const User = mongoose.model("users", userSchema); //DB having the model name "users"
//type os User is mongoose.model

//============================ MiddleWare ==================================================
//MiddleWare-plugin
app.use(express.urlencoded({ extended: false })); //to parse body from the req from the user
app.use((req, res, next) => {
  fs.appendFile(
    "./serverLog.txt",
    `\n${Date.now()}: ${req.method}: ${req.url}`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Server Log updated successfully");
        next();
      }
    }
  );
});

//============================ Routes ==================================================
app.get("/users", async(req, res) => {
  const allDbUsers = await User.find({}); //By default: user.find()===user.find({})
  console.log(allDbUsers);
  //typeof allDbUsers is object or array of objects?
  // ans: array of objects 
  const html = `
        <ul>
            ${allDbUsers
              .map(
                (user) =>
                  `<li>${user.firstName}</li> - ${user.email} - ${user.jobTitle}`
              )
              .join("")}
        </ul>
    `;
  res.send(html);
});

app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  res.setHeader("X-Name","Deepanshu");
  res.json(allDbUsers);
});


app
  .route("/api/users/:id")
  .get(async(req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    } 
    res.json(user);
  })
  .patch((req, res) => {
    //Updating user details with given id
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    //delete user details with given id
    return res.json({ status: "pending" });
  });

app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const result = await User.create({
    //jo bhi user create karega wo return kardega user object
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    jobTitle: body.job_title,
    gender: body.gender,
  });
  console.log(typeof(result),result);
  return res.status(201).json({ msg: "User created" });
});

//Server Start
app.listen(PORT, () => {
  console.log(`Server Started on the PORT: ${PORT}`);
});
