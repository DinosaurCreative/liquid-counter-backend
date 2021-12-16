const mongoose = require('mongoose');
const { allowedItemsTypes } = require('../utils/constants');

const inventarizatioSchema = new mongoose.Schema({
  nameInCharge: {
    type: String,
    required: true,
  },
  barName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  remainders: [{
    drinkName: {
      type: String,
      required: true,
    },
    remainder: {
      type: Number,
      required: true,
    },
    isUnknown: {
      type: Boolean,
      required: true,
    },
    drinkType: {
      type: String,
      required: true,
      enum: allowedItemsTypes,
    },
    fullBottle: {
      type: Number,
    },
    openedBottle: {
      type: Number,
    },
  }],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('Inventarization', inventarizatioSchema);
