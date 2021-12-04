const mongoose = require('mongoose');
const { isURL } = require('validator');
const { badUrlErr, barcodeError } = require('../utils/constants');

const bottleSchema = new mongoose.Schema({
  name: {
    String,
    required: true,
  },
  volume: {
    Number,
    required: true,
  },
  fullWeight: {
    Number,
    required: true,
  },
  bottleWeight: {
    Number,
    required: true,
  },
  bottleModel: {
    String,
  },
  madeIn: {
    String,
    required: true,
  },
  label: {
    String,
    required: true,
    validate: {
      validator(v) {
        return isURL(v);
      },
      message: () => badUrlErr,
    },
  },
  barcode: {
    String,
    required: true,
    validate: {
      validator(v) {
        return v.toString().length === 13;
      },
      message: () => barcodeError,
    },
  },
  alcoType: {
    String,
    required: true,
  },
  bottleCapWeight: {
    Number,
    required: true,
  },
}, { versionKey: false });

bottleSchema.index({ name: 1, volume: 1 }, { unique: true });

module.exports = mongoose.model('Bottle', bottleSchema);
