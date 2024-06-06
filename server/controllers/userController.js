// call the workouts collection
const userdb = require("../models/userModel");
// to handle _id format (if u use it), need to import back mongoose
const mongoose = require("mongoose");

// post signup
const signupUser = async (req, res) => {
  // take the necessary data from body
  const { email, password } = req.body;

  try {
    // now apply the userdb.signup here
    const user = await userdb.signup(email, password);

    // pass the user information for testing
    res.status(200).json({email, user});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// post login
const loginUser = async (req, res) => {
  try {
    res.status(200).json("login process");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// export the functions
module.exports = {
  signupUser,
  loginUser,
};
