const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title: String,
    description: String,
    link: String,
    image: String
})

let Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;