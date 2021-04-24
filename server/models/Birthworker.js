const { Schema, model } = require('mongoose');

const BirthworkerSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
// Create the BirthWorker Model using the BirthWorkerSchema
const Birthworker = model('BirthWorker', BirthworkerSchema);

// export the BirthWorker Model
module.exports = Birthworker;

