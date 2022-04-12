const mongooes = require('mongoose');

const contactUsForm = new mongooes.Schema({
    Fullname: {
        type: String
    },
    Email: {
        type: String
    },
    Phone: {
        type: String
    },
    MPhone: {
        type: String
    },
    Msg: {
        type: String
    },
    added_date: {
        type: Date,
        default: Date.now
    },
    Status: {
        type: Boolean,
        default: true
    }
});

module.exports = contactusForm = mongooes.model('contactUsForm', contactUsForm);