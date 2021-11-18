const mongoose = require('mongoose');
const { isURL } = require('validator');
const { badUrlErr } = require('../utils/constants');

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
    validate(v) {
      if (!isURL(v)) {
        throw badUrlErr;
      }
    },
  },
  barcode: {
    type: Number,
    required: true,
  },
  alcoType: {
    type: String,
    required: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('bottle', bottleSchema);
