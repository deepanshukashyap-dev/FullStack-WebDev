const URL = require("../../models/url");


async function renderHome(req, res) {
  const allUrls = await URL.find({
    createdBy: req.user._id,//fetch only those urls which are created by the logged in user , why thi is giving error ? because req.user is undefined , how to fix it ? use auth middleware in the route
  }); //allUrls is an array of all url objects from db
  res.render("home",{
    urls: allUrls, 
  });
};

function renderAbout(req, res) {
  res.render("about");
};

function renderSignup(req, res) {
  return res.render("signup");
};

function renderLogin(req, res) {
  return res.render("login");
};
module.exports = {
  renderHome,
  renderAbout,
  renderSignup,
  renderLogin,
};
