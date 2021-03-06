const Bottle = require('../models/bottle');
const BadRequestError = require('../errors/BadRequesError');
const ConflictError = require('../errors/ConflictError');
const NotFoundError = require('../errors/NotFoundError');
const { bottleIdMissing } = require('../utils/constants');

module.exports.getBottles = (req, res, next) => {
  Bottle.find({})
    .then((bottles) => res.send({ data: bottles }))
    .catch((err) => {
      next(err);
    });
};

module.exports.createBottle = (req, res, next) => {
  const {
    title,
    volume,
    fullWeight,
    bottleWeight,
    bottleModel,
    madeIn,
    label,
    barcode,
    alcoType,
    bottleCapWeight,
  } = req.body;

  Bottle.create({
    title,
    volume,
    fullWeight,
    bottleWeight,
    bottleModel,
    madeIn,
    label,
    barcode,
    alcoType,
    bottleCapWeight,
  })
    .then((bottle) => res.status(201).send({ data: bottle }))
    .catch((err) => {
      const pathName = err.message.split('`')[1];
      if (err.message.includes('required')) {
        return next(new BadRequestError(`Отсутствуе поле ${pathName}`));
      } if (err.code === 11000) {
        console.log(err);
        return next(new ConflictError(`Позиция ${err.keyValue.title} ${err.keyValue.volume} уже содержится в базе данных`));
      }
      return next(err);
    });
};

module.exports.deleteBottle = (req, res, next) => {
  Bottle.findOneAndRemove(req.params.id)
    .orFail(new NotFoundError(bottleIdMissing))
    .then((bottle) => res.send({ message: `Позиция ${bottle.title} ${bottle.volume} удалена!` }))
    .catch((err) => next(err));
};

module.exports.updateBottle = (req, res, next) => {
  const {
    title,
    volume,
    fullWeight,
    bottleWeight,
    bottleModel,
    madeIn,
    label,
    barcode,
    alcoType,
    bottleCapWeight,
  } = req.body;

  Bottle.findOneAndUpdate(
    req.params.id,
    {
      title,
      volume,
      fullWeight,
      bottleWeight,
      bottleModel,
      madeIn,
      label,
      barcode,
      alcoType,
      bottleCapWeight,
    },
    { runValidators: true, new: true },
  )
    .then((bottle) => res.send({ message: `Позиция ${bottle.title} ${bottle.volume} была изменена!` }))
    .catch((err) => next(err));
};
