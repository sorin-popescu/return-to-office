const mongoose = require('mongoose');

const { Schema } = mongoose;

const deskModel = new Schema(
    {
        name: { type: String },
        employee: { type: String },
        status: { type: String },
    }
);

module.exports = mongoose.model('Desk', deskModel);