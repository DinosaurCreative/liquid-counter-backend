const Inventarization = require('../models/inventarization');
const NotFoundError = require('../errors/NotFoundError');
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
      next(err);
    });
};

module.exports.deleteInventarization = (req, res, next) => {
  Inventarization.findByIdAndRemove(req.params.id)
    .orFail(new NotFoundError(inventaMissing))
    .then((inventa) => res.send({ message: `Инвентаризация бара ${inventa.barName} от ${inventa.date} - удалена!` }))
    .catch((err) => next(err));
};
