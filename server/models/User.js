const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// The User Schema uses regex to validate the email

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    firstname: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    // may not need this but going to keep this here
    Birthworker: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Birthworker'
      }
    ],
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
// This checks to see if the password is new or has been modified
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

// May think about adding friends to this
// userSchema.virtual('friendCount').get(function() {
//   return this.friends.length;
// });

const User = model('User', userSchema);

module.exports = User;