const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const PORT = 8000;
const app = express();

//Using Middleware to parse the body of the request
app.use(express.urlencoded({ extended: false })); //extended:false means simple key value pairs,and estended:true means nested objects
app.use((req, res, next) => {
  //middleware to append the server-log
  fs.appendFile(
    "serverLog.txt",
    `\n${Date.now()}: ${req.method}: ${req.url}`,
    (err) => {
      if (err) console.log("Something went wrong in middleWare2");
      else next();
    }
  );
});

//======================================================== Routes ================================================================
app.get("/users", (req, res) => {
  const html = `
        <ul>
           ${users.map((user) => `<li>${user.first_name}</li>`).join("")} 
        </ul>
    `;
  res.send(html);
}); //for mobile

app.get("/api/users", (req, res) => {
  res.setHeader("X-MyName", "Deepanshu Kashyap"); //Custom Header(Best practice is to use always X in cusHeadr)
  res.json(users); //all users
}); //for web

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user) return res.status(404).json({error: "User not found!"});
    return res.send(user); //user with dynamic id (object)
  })
  .patch((req, res) => {
    //Updating user details with given id
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    //delete user details with given id
    return res.json({ status: "pending" });
  });

app.post("/api/users", (req, res) => {
  //Creating a user
  const body = req.body; //Getting body from the request,in simple words data sent by client to server
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required!" }); //400 status for missing fields
  } else {
    console.log("Body: ", body);
  }
  users.push({ ...body, id: users.length + 1 }); //Pushing new user to the users array object(JSON file)
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => { //in disk not memory
    if (err) {
      console.error("Error writing file:", err);
    } else {
      return res.status(201).json({ status: "Success" , id : users.length }); //201 status code for creation success
    }
  });
});

//Refer the notes for middleware and routing concepts

app.listen(PORT, () => {
  console.log(`Server Started on PORT: ${PORT}`);
});
