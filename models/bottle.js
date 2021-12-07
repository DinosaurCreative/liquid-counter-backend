const mongoose = require('mongoose');
const { isURL } = require('validator');
const { badUrlErr, barcodeError, allowedItemsTypes } = require('../utils/constants');

const bottleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  fullWeight: {
    type: Number,
    required: true,
  },
  bottleWeight: {
    type: Number,
    required: true,
  },
  bottleModel: {
    type: String,
  },
  madeIn: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return isURL(v);
      },
      message: () => badUrlErr,
    },
  },
  barcode: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return v.toString().length === 13;
      },
      message: () => barcodeError,
    },
  },
  alcoType: {
    type: String,
    required: true,
    enum: allowedItemsTypes,
  },
  bottleCapWeight: {
    type: Number,
    required: true,
  },
}, { versionKey: false });

bottleSchema.index({ name: 1, volume: 1 }, { unique: true });

module.exports = mongoose.model('Bottle', bottleSchema);
