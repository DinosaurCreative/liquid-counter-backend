const unknownBottle = require('../models/unknownBottle');

module.exports.getUnknownBottles = (req, res, next) => {
  unknownBottle.find({})
    .then((unknownBottles) => res.send(unknownBottles))
    .catch((err) => next(err));
};

module.exports.createUnknownBottle = (req, res, next) => {
  const newUnknownBtl = req.body.map((item) => ({
    drinkName: item.drinkName,
    volume: item.volume,
    creator: req.user._id,
  }));
  unknownBottle.updateOne({ _id: '61af2b32305bcb86bcdae133' }, { $push: { unknownBottles: newUnknownBtl } })
    .then(() => res.send('Товар внесён в список на добавление в базу данных.'))
    .catch((err) => next(err));
};

module.exports.deleteUnknownBottle = (req, res, next) => {
  unknownBottle.findByIdAndRemove(req.params.id)
    .then((answ) => res.send(`Товар ${answ} удален из списка неизвестных товаров`))
    .catch((err) => next(err));
};

module.exports.deleteUnknownBottle = (req, res, next) => {
  unknownBottle.findByIdAndRemove(req.params.id)
    .then((answ) => res.send(`Товар ${answ} удален из списка неизвестных товаров`))
    .catch((err) => next(err));
};
