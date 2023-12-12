var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String
  },
  password: String,
  isAdmin: {
      type: Boolean,
      default: false
    }
}, {timestamps: true});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel