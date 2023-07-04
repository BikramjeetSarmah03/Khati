const User = require("../models/userModel");

exports.registerUser = async () => {
  try {
    const { firstName, lastName, email, mobile, password } = req.body;

    const isUser = await User.findOne({ email });

    if (isUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      mobile,
      password,
    });

    res.status(201).json({
      success: true,
      user: newUser,
    });
  } catch (error) {}
};
