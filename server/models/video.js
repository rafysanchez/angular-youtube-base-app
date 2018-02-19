const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    title: String,
    url: String,
    description: String
});

module.exports = mongoose.model('video', videoSchema);