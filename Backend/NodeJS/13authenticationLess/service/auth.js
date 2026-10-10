const jwt = require("jsonwebtoken");
const secretKey = "dev@123";

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id, //wo _id jo login ke baad user object ki hogi
      email: user.email,
      role: user.role,
    },
    secretKey
  );
}

//getUser for checking user is logged in or not
function getUser(token) {
  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    console.log("Error: ",err);
  }
}

module.exports = {
  setUser,
  getUser,
};
