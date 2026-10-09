const User = require("../../models/user");
// const { v4: uuidv4 } = require("uuid");//to generate unique session ids(statefull auth)
const { setUser } = require("../../service/auth"); //for token assingment(jwt stateless auth)

async function handleUserSignUp(req, res) {
  //handles signup and store the user name,email,pass in userDB
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/login"); //after signup redirect to login page
}

async function handleUserLogin(req, res) {
  //handles validity of user and storing session id in cookie to remember user
  const { email, password } = req.body; //from the user post request
  console.log("Email:", email, " Password:", password); //testing
  const user = await User.findOne({ email, password }); //returns user object if found else null
  console.log("User: ", user); //testing(user hai kon , _id imp)
  if (!user) {
    return res.render("login", {
      //username or password match nhe hua DB se
      error: "Invalid Username or Password!!", //render the same login page , and with object having "error"
    });
  }
  //****Controller logic for statefull auth , generating session id and storing in map with user****
  // const sessionId = uuidv4(); //if alright generate session id to be stored in cookie
  // setUser(sessionId,user);  //store user against session id in hashmap (in service auth.js - hashmap )
  //storing the cookkie is used in auth middleware to check if user is logged in or not
  // res.cookie("sessionId",sessionId); //set cookie in user's browser with session id
  //only the problem is if the server restarted the map is cleared and user has to login again , hash map me value post request par hi aaygi,
  //and wo cookie me store ho jaygi,server restart hone pr map clear hojayga leken cookie me sessionId to hoga,lekin map me
  // wo sessionId ka koi user nhi hoga isliye user ko dubara login karna padega.

  const token = setUser(user);
  res.cookie("sessionId", token); //sessionId name isliye use nhe kiya kyunki statefull se stateless par shift kiya hai toh baaki ka code disturb na ho
  return res.redirect("/");
}

module.exports = {
  handleUserSignUp,
  handleUserLogin,
};
    