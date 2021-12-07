const Inventarization = require('../models/inventarization');
const NotFoundError = require('../errors/NotFoundError');
const { inventaMissing } = require('../utils/constants');

module.exports.getInventarizations = (req, res, next) => {
  Inventarization.find({})
    .then((inventas) => inventas.map((item) => {
      const {
        nameInCharge, barName, date, _id,
      } = item;
      return {
        nameInCharge,
        barName,
        date,
        _id,
      };
    }))
    .then((data) => res.send(data))
    .catch((err) => next(err));
};

module.exports.getCertainInventarization = (req, res, next) => {
  Inventarization.findById(req.params.id)
    .orFail(new NotFoundError(inventaMissing))
    .then((inventa) => res.send(inventa))
    .catch((err) => next(err));
};

module.exports.createInventarization = (req, res, next) => {
  const {
    nameInCharge,
    barName,
    date,
    remainders,
    creator = req.user._id,
  } = req.body;

  Inventarization.create({
    nameInCharge,
    barName,
    date,
    remainders,
    creator,
  })
    .then((inventa) => {
      res.status(201).send({ data: inventa });
    })
    .catch((err) => next(err));
};

module.exports.deleteInventarization = (req, res, next) => {
  Inventarization.findByIdAndRemove(req.params.id)
    .orFail(new NotFoundError(inventaMissing))
    .then((inventa) => res.send({ message: `Инвентаризация бара ${inventa.barName} от ${inventa.date} - удалена!` }))
    .catch((err) => next(err));
};
