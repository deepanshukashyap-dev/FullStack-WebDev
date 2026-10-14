const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//============================================= Routes ============================================================
app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
        <ul>
           ${users.map((user) => `<li>${user.first_name}</li>`).join("")} 
        </ul>
    `;
  res.send(html);
});

app                         //.route helps to group all the methods with same route ,it is a function of express
  .route("/api/users/:id")  //if in future if need to change the route name , too 3 jagha nhe karna (simpy ek jagha)
  .get((req, res) => {
    const id = Number(req.params.id); //this is string, conv to number
    const user = users.find((user) => user.id === id); //retrieving user with dynamic id , object
    console.log(user);
    return res.json(user); //user with dynamic id (object)
  })
  .patch((req, res) => {
    //TODO: edit the user with id
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    //TODO: delete the user with id
    return res.json({ status: "pending" });
  });

app.post("/api/users", (req, res) => {
  //TODO: create a new user with id
  return res.json({ status: "pending" });
  console.log("Creating a new user");
});
  
app.listen(PORT, () => {
  console.log(`Server Started at PORT: ${PORT}`);
});
