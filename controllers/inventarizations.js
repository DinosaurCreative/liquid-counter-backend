const Inventarization = require('../models/inventarization');
const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequesError');
const { inventaMissing } = require('../utils/constants');

module.exports.getInventarizations = (req, res, next) => {
  Inventarization.find({})
    .then((inventas) => res.send({ data: inventas }))
    .catch((err) => {
      next(err);
    });
};

module.exports.createInventarization = (req, res, next) => {
  const {
    nameInCharge,
    barName,
    date,
    remainders,
  } = req.body;

  Inventarization.create({
    nameInCharge,
    barName,
    date,
    remainders,
  })
    .then((inventa) => res.status(201).send({ data: inventa }))
    .catch((err) => {
      // const pathName = err.message.split('`')[1];
      // if (err.message.includes('required')) {
      //   return next(new BadRequestError(`Отсутствуе поле ${pathName}`));
      // }
      next(err);
    });
};

module.exports.deleteInventarization = (req, res, next) => {
  Inventarization.findOneAndRemove(req.params.id)
    .orFail(new NotFoundError(inventaMissing))
    .then((inventa) => inventa.send({ message: `Инвентаризация бара ${inventa.barName} от ${inventa.data} - удалена` }))
    .catch((err) => next(err));
};
