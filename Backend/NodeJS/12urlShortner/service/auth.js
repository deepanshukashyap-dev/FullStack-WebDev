const jwt = require("jsonwebtoken");
const secret = "dev@#$%";

//Statefull auth service logic
// const sessionIdToUserMap = new Map();
// function setUser(id, user){  //for statefull Authentication
//     sessionIdToUserMap.set(id, user);
// }
// function getUser(id){
//     return sessionIdToUserMap.get(id);
// }


//Stateless auth service logic
function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret
  ); //token assignment for the user
} //move to controller


// function getUser(token){
//     return jwt.verify(token, secret);
// }
//best practice
function getUser(token) {
  if (!token) return null;//token not exists when user is not logged in
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
}

module.exports = {
  setUser, //sign the user with secret key and further send to in cookies using user controller
  getUser, //verify the user using the secret key
};
