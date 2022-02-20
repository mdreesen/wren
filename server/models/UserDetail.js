const { Schema, model } = require('mongoose');

const userDetailSchema = new Schema(
  {
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
  },
  {
    toJSON: {
      getters: true
    }
  }
);

// set up pre-save middleware to create password
// This checks to see if the password is new or has been modified
// userDetailSchema.pre('save', async function(next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// compare the incoming password with the hashed password
// userDetailSchema.methods.isCorrectPassword = async function(password) {
//   return bcrypt.compare(password, this.password);
// };

const UserDetail = model('UserDetail', userDetailSchema);

module.exports = UserDetail;