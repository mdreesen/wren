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
    firstname: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        unique: false,
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
    preferredName: {
      type: String,
      required: false,
      trim: true
    },
    language: {
      type: String,
      required: false,
      trim: true
    },
    dateOfBirth: {
      type: String,
      required: false,
      trim: true
    },
    maidenName: {
      type: String,
      required: false,
      trim: true
    },
    ssn: {
      type: String,
      required: false,
      trim: true
    },
    maritalStatus: {
      type: String,
      required: false,
      trim: true
    },
    ethnicity: {
      type: String,
      required: false,
      trim: true
    },
    occupation: {
      type: String,
      required: false,
      trim: true
    },
    religion: {
      type: String,
      required: false,
      trim: true
    },
    highestEducation: {
      type: String,
      required: false,
      trim: true
    },
    livingWill: {
      type: String,
      required: false,
      trim: true
    },
    organDonor: {
      type: String,
      required: false,
      trim: true
    },
    culturalPreferences: {
      type: String,
      required: false,
      trim: true
    },
    primaryAddress: {
      type: String,
      required: false,
      trim: true
    },
    secondaryAddress: {
      type: String,
      required: false,
      trim: true
    },
    referral: {
      type: String,
      required: false,
      trim: true
    },
    primaryPhone: {
      type: String,
      required: false,
      trim: true
    },
    secondaryPhone: {
      type: String,
      required: false,
      trim: true
    },
    doNotContactRoute: {
      type: String,
      required: false,
      trim: true
    },
    grantPermission: {
      type: String,
      required: false,
      trim: true
    },
    preferredMethodOfContact: {
      type: String,
      required: false,
      trim: true
    },
    emergencyContact: {
      type: String,
      required: false,
      trim: true
    },
    // User can be associated with a birthworker
    associateWithWorker: [{
      type: Schema.Types.ObjectId,
      ref: 'Birthworker'
    }]
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

userSchema.virtual('birthworkerCount').get(function() {
  return this.associateWithWorker.length;
});

const User = model('User', userSchema);

module.exports = User;