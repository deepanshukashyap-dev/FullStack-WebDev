const { model } = require("mongoose");
const User = require("../models/user");

async function handleGetAllUser(req, res) {
  const allDbUser = await User.find({});
  res.setHeader("X-Name", "Deepanshu");
  res.send(allDbUser);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ msg: "Invalid User" });
  }
  res.json(user);
}

async function handleUpdateUserById(req, res) {
  return res.json({ status: "Pending" });
}

async function handleDeleteUserById(req, res) {
  return res.json({ status: "Pending" });
}

async function handleCreateUserById(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required!" });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log("User Created succesfully..!", result);
  return res.status(201).json({ msg: "User created" }, result);
}

module.exports = {
  handleGetAllUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUserById,
};
