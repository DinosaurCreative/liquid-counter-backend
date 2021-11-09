const Bottle = require('../models/bottle');

module.exports.getBottles = (req, res, next) => {
  Bottle.find({})
    .then((bottles) => res.send({ data: bottles }))
    .catch((err) => console.log(err));
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
  })
  .then((bottle) => res.send({ data: bottle}))
  .catch((err) => {
    console.log(err)
  })
};