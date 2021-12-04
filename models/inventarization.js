const mongoose = require('mongoose');

const inventarizatioSchema = new mongoose.Schema({
  nameInCharge: {
    String,
    required: true,
  },
  barName: {
    String,
    required: true,
  },
  date: {
    String,
    required: true,
  },
  remainders: [{
    drinkName: {
      String,
      required: true,
    },
    remainder: {
      Number,
      required: true,
    },
  }],
});

module.exports = mongoose.model('Inventarization', inventarizatioSchema);
