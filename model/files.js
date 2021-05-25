const mongoose = require('mongoose');

const streamSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    vendor: {
        type: String,
        required: false
    },
    duration: {
        type: Number,
        required: false
    }
}, {timestamps: true});

module.exports = mongoose.model('Stream', streamSchema);