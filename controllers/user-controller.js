const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
//@desc Register user
//@route /api/users/register
// @access public

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const findEmail = await User.findOne({ email });
  if (findEmail) {
    res.status(400);
    throw new Error("Email already exist");
  }

  //hashed password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(`Hashed password ${hashedPassword}`);

  const user = User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

//@desc login user
//@route /api/users/login
// @access public

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Login successful" });
});

//@desc Get current user
//@route /api/users/current-user
// @access public
const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
