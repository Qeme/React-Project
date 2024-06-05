const mongoose = require("mongoose");
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

// workouts is the name of the collection in DB
// userSchema is the name of the Schema
module.exports = mongoose.model("userdb", userSchema);
