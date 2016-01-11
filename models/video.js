var mongoose = require('mongoose');

var VideoSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    src: { type: String, required: true },
    length: { type: Number, required: true, min: 0 },
    playcount: { type: Number, min: 0 },
    ranking: { type: Number, min: 0 }
}, { timestamps: { createdAt: 'timestamp' } });

var Video = mongoose.model('Video', VideoSchema);

module.exports = Video;