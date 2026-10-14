const { restrictTologgedInUserOnly } = require("../../middlewares/auth");
const express = require("express");
const {
  renderHome,
  renderAbout,
  renderSignup,
  renderLogin,
} = require("../../controllers/page/controller");

const router = express.Router();

router.get("/",restrictTologgedInUserOnly, renderHome);
router.get("/about",renderAbout);
router.get("/signup", renderSignup);
router.get("/login", renderLogin);

module.exports = router;
