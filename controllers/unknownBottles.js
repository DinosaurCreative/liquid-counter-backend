const unknownBottle = require('../models/unknownBottle');
const NotFoundError = require('../errors/NotFoundError');
const {
  itemNotFound, deletedFromUnknownBtls, unknownDbId, itemAddedToUnknownLIst,
} = require('../utils/constants');

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
  unknownBottle.updateOne({ _id: unknownDbId }, { $push: { unknownBottles: newUnknownBtl } })
    .then(() => res.send(itemAddedToUnknownLIst))
    .catch((err) => next(err));
};

module.exports.deleteUnknownBottle = (req, res, next) => {
  unknownBottle.updateMany({
    _id: unknownDbId,
  }, { $pull: { unknownBottles: { _id: req.params.id } } })
    .then((answ) => {
      if (!answ.modifiedCount) {
        throw new NotFoundError(itemNotFound);
      }
      res.send(deletedFromUnknownBtls);
    })
    .catch((err) => next(err));
};
