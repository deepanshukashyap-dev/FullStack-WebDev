const express = require("express");
const router = express.Router();

const {
  handleGetAllUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUserById,
} = require("../controllers/user");

//Routes...
router.route("/")
    .get(handleGetAllUser)
    .post(handleCreateUserById);
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
