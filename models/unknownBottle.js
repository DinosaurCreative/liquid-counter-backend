const mongoose = require('mongoose');

const unknownBottleSchema = new mongoose.Schema({
  unknownBottles: [{
    title: { type: String, required: true },
    volume: { type: Number, required: true },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    date: {
      type: Date,
    },
  }],
}, { versionKey: false });

module.exports = mongoose.model('unknownBottle', unknownBottleSchema);
