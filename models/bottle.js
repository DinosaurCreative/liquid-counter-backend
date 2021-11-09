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
  liquidWeight: {
    type: Number,
    required: true,
  },
  oneMlWeight: {
    type: Number,
    required: true,
  },
  bottleModel: {
    type: String
  },
  madeIn: {
    type: String,
    required: true
  },
  label: {
    type: String,
    validate(v) {
      if (!isURL(v)) {
        throw badUrlErr;
      }
    },
  }
});

module.exports = mongoose.model('bottle', bottleSchema);
