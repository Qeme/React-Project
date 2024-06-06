const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

// add second argument 'timestamp: true' to make sure if any new object created, the time will be recorded as well
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// generate static function userdb.create (.create)
// we cant use => function because later we use 'this.'
userSchema.statics.signup = async function (email, password) {
  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("The email already exist");
  }

  // create a salt to generate how long the hashing will be (argument)
  // await because it took some times to generate them
  const salt = await bcrypt.genSalt(10);

  // then put the salt into hash key
  // it took 2 arguments (the thing that you want to hash, the salt or rounds)
  const hash = await bcrypt.hash(password, salt);

  // then, we create a new user based on the email and hashed password
  const user = await this.create({ email, password: hash });

  // return the user information, for testing
  return user;
};

// workouts is the name of the collection in DB
// userSchema is the name of the Schema
module.exports = mongoose.model("userdb", userSchema);
