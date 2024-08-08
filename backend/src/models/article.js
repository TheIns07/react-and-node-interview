const mongoose = require( "mongoose");

const articleSchema = new mongoose.Schema({
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: Date
});

module.exports = mongoose.model('Article', articleSchema);