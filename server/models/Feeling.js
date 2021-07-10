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
    username: {
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

// thoughtSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });

const Feeling = model('Feeling', feelingSchema);

module.exports = Feeling;