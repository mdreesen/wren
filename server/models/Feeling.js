const { Schema, model } = require('mongoose');
// const reactionSchema = require('./Reaction');
// const dateFormat = require('../utils/dateFormat');

const feelingSchema = new Schema(
  {
    feelingText: {
      type: String,
      required: 'Required',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    email: {
      type: String,
      required: true
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Feeling = model('Feeling', feelingSchema);

module.exports = Feeling;