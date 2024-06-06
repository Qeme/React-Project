// call the workouts collection
const userdb = require("../models/userModel");
// call jwt package
const jwt = require("jsonwebtoken");
// to handle _id format (if u use it), need to import back mongoose
const mongoose = require("mongoose");

//create a function to create the token whenever the user login/signup
// we take the _id as argument to be part of the token
const createToken = (_id) => {
  /* 
    1. use jwt.sign , we pass _id as payload information (dont put any sensitive data)
    2. second argument, the secret string that you only know
    3. the expired time taken for the token to exist and deceased
  */
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// post signup
const signupUser = async (req, res) => {
  // take the necessary data from body
  const { email, password } = req.body;

  try {
    // now apply the userdb.signup here
    const user = await userdb.signup(email, password);

    // create a token by passing the user._id
    const token = createToken(user._id);

    // pass the user information for testing
    res.status(200).json({ email, user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// post login
const loginUser = async (req, res) => {
  // grab the email and password
  const { email, password } = req.body;

  try {
    const user = await userdb.login(email, password);

    // create token
    const token = createToken(user._id)

    res.status(200).json({email, user, token});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// export the functions
module.exports = {
  signupUser,
  loginUser,
};
