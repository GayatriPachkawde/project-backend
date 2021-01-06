const mongoose = require("mongoose");
const User = mongoose.model("User");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");

exports.register = async (req, res) => {
  const { name, password } = req.body;

  if (password.length < 6) {
    throw "Password must be atleast 6 characters long";
  }

  const userExists = await User.findOne({
    name,
    password: sha256(password + process.env.SALt),
  });

  if (userExists) throw `Username ${name} already exists`;

  const user = new User({
    name,
    password: sha256(password + process.env.SALt),
  });

  await user.save();

  res.status(201).json({
    message: `User registered successfully`,
  });
};

exports.login = async (req, res) => {
  const { name, password } = req.body;

  const user = await User.findOne({
    name,
    password: sha256(password + process.env.SALt),
  });

  if (!user) throw "Username/Password did not match";

  const token = await jwt.sign({ id: user.id }, process.env.SECRET);

  res.json({
    message: "User logged in successfully",
    token,
  });
};
