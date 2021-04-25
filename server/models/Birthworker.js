const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// The birthworker Schema uses regex to validate the email

const birthworkerSchema = new Schema(
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
    // Users that will be associated with the birthworker
    associatedUser: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
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
birthworkerSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
birthworkerSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

// May think about adding friends to this
birthworkerSchema.virtual('Users').get(function() {
  return this.associatedUser.length;
});

const Birthworker = model('Birthworker', birthworkerSchema);

module.exports = Birthworker;