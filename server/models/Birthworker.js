const { Schema, model } = require('mongoose');

const BirthWorkerSchema = new Schema({
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
const BirthWorker = model('BirthWorker', BirthWorkerSchema);

// export the BirthWorker Model
module.exports = BirthWorker;

