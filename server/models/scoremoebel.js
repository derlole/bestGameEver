const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const scoreSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    score:{
        type: Number,
        required: true
    },
    time:{
        type: Number,
        required: true
    },
    ts:{
        type: Date,
        default: Date.now
    },
    avlbcorners:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('score', scoreSchema);