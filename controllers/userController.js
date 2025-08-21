const users = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// register controller
exports.registerController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      res.status(409).json("User already exists");
    } else {
      const hashedPswd = await bcrypt.hash(password, 10);
      const newUser = new users({
        username,
        email,
        password: hashedPswd,
      });
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// login controller
exports.loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      const existingPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      console.log(existingPassword);

      if (existingPassword) {
        const token = jwt.sign(
          { userId: existingUser._id },
          process.env.JWT_SECRET
        );
        console.log(token);

        res.status(200).json({ existingUser, token });
      } else {
        res.status(401).json("Incorrect email or password");
      }
    } else {
      res.status(404).json("Incorrect email or password");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
