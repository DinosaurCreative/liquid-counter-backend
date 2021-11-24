const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

const { JWT_SECRET, NODE_ENV } = process.env;

module.exports = (req, res, next) => {
  const authorization = req.headers.cookie;
  if (!authorization || !authorization.startsWith('_id=')) {
    next(new UnauthorizedError('Авторизуйтесь'));
    return;
  }
  const token = authorization.replace('_id=', '');
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'secret-key');
  } catch (err) {
    next(new UnauthorizedError('Ошибка авторизации'));
  }
  req.user = payload;
  next();
};
