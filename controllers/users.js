const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const {
  wrongSecreteKey,
  passwordMissing,
  passKeys,
  emailBusy,
  secretKeyBusy,
  cookieRemoved,
} = require('../utils/constants');
const BadRequestError = require('../errors/BadRequesError');
const ConflictError = require('../errors/ConflictError');

const { JWT_SECRET, NODE_ENV } = process.env;

module.exports.createUser = (req, res, next) => {
  const {
    password, name, email, barName, secretKey,
  } = req.body;
  if (!password) {
    next(new BadRequestError(passwordMissing));
  }
  if (passKeys.every((el) => el !== secretKey)) {
    next(new BadRequestError(wrongSecreteKey));
    return;
  }
  bcrypt.hash(password, 10)
    .then((hash) => {
      User.create({
        name, email, barName, password: hash, secretKey,
      })
        .then((user) => {
          res.status(201).send({
            email, barName, name, _id: user._id,
          });
        })
        .catch((err) => {
          if (err.message.includes('email_1')) {
            next(new ConflictError(emailBusy));
            return;
          } if (err.message.includes('secretKey_1')) {
            next(new ConflictError(secretKeyBusy));
            return;
          }
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.login = (req, res, next) => {
  const { password, email } = req.body;
  User.findUserByCredentials(email, password)
    .then((user) => {
      const { _id, name } = user;
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'secret-key', { expiresIn: '7d' });
      res.cookie('_id', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: 'None',
        // secure: true,
      }).send({ _id, name, email });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.signOut = (req, res, next) => {
  res.clearCookie('_id', {
    sameSite: 'None',
    secure: true,
  }).send({ message: cookieRemoved });
  next();
};
