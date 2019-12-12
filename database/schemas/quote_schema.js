const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
    quote: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = QuoteSchema;
