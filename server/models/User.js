const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    password: {
        type: String
    },
    createdat: {
        type: Date,
        default: Date.now
    }
})