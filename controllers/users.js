const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { wrongSecreteKey, passwordMissing, wrongUserData } = require('../utils/constants');
const BadRequestError = require('../errors/BadRequesError');
const UnauthorizedError = require('../errors/UnauthorizedError');

const { JWT_SECRET, NODE_ENV } = process.env;

module.exports.createUser = (req, res, next) => {
  const {
    password, name, email, secretKey,
  } = req.body;
  if (!password) {
    next(new BadRequestError(passwordMissing));
  }
  if (secretKey !== 'koreanBanana') {
    next(new BadRequestError(wrongSecreteKey));
    return;
  }
  bcrypt.hash(password, 10)
    .then((hash) => {
      User.create({
        name, email, password: hash,
      })
        .then(() => {
          res.send({ email, name });
        })
        .catch((err) => {
          console.log(err);
          next(err);
        });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports.login = (req, res, next) => {
  const { password, email } = req.body;
  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'secret-key');
      res.cookie('_id', token, {
        maxAge: 3600000 * 24 * 1,
        httpOnly: true,
        sameSite: 'None',
        secure: true,
      }).send({ name: user.name, email: user.email });
    })
    .catch((err) => {
      if (err.message.includes()) {
        next(new UnauthorizedError(wrongUserData));
        return;
      }

      next(err);
    });
};

module.exports.signOut = (req, res/* , next */) => {
  res.clearCookie('_id', {
    sameSite: 'None',
    secure: true,
  }).send({ message: 'Куки удалены' });
  // next();
};
