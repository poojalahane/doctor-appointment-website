const userModel = require("../models/userModels.js");
const bcrypt = require("bcryptjs");

const registerController = async (req, res) => {
  try {
    console.log(req.body);
    const existingUser = await userModel.find({ email: req.body.email });
    if (existingUser) {
      return res.status(200).send({
        message: `User already exist please login`,
        success: false,
      });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Registered Successfulyy", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

const loginController = () => {};

module.exports = { loginController, registerController };
