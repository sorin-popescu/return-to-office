const mongoose = require('mongoose');

const { Schema } = mongoose;

const Desk = mongoose.model('Desk');

const floorModel = new Schema(
    {
        number: { type: String },
        desks: [Desk.schema]
    }
);

module.exports = mongoose.model('Floor', floorModel);