const Bottle = require('../models/bottle');
const BadRequestError = require('../errors/BadRequesError');
const ConflictError = require('../errors/ConflictError');

module.exports.getBottles = (req, res, next) => {
  Bottle.find({})
    .then((bottles) => res.send({ data: bottles }))
    .catch((err) => {
      next(err);
    });
};

module.exports.createBottle = (req, res, next) => {
  const {
    name,
    volume,
    fullWeight,
    bottleWeight,
    liquidWeight,
    oneMlWeight,
    bottleModel,
    madeIn,
    label,
    barcode,
    alcoType,
  } = req.body;

  Bottle.create({
    name,
    volume,
    fullWeight,
    bottleWeight,
    liquidWeight,
    oneMlWeight,
    bottleModel,
    madeIn,
    label,
    barcode,
    alcoType,
  })
    .then((bottle) => res.send({ data: bottle }))
    .catch((err) => {
      const pathName = err.message.split('`')[1];
      if (err.message.includes('required')) {
        return next(new BadRequestError(`Отсутствуе поле ${pathName}`));
      } if (err.code === 11000) {
        return next(new ConflictError(`Позиция ${err.keyValue.name} c объемом ${err.keyValue.volume} уже содержится в базе данных`));
      }
      return next(err);
    });
};
