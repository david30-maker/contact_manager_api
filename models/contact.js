const monngoose = require('mongoose');

const ContactSchema = new monngoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = monngoose.model('Contact', ContactSchema);