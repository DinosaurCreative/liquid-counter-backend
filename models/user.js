const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { isEmail } = require('validator');
const { wrongEmail, wrongUserData } = require('../utils/constants');
const UnauthorizedError = require('../errors/UnauthorizedError');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 2,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator(v) {
        return isEmail(v);
      },
      message: () => wrongEmail,
    },
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  secretKey: {
    type: String,
    unique: true,
    required: true,
  },
  barName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
}, { versionKey: false });

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedError(wrongUserData));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnauthorizedError(wrongUserData));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('User', userSchema);
