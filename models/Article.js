const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    link: {type: String, default: ""},
    header: {type: String, default: ""},
    image: {type: String, default: ""},
    paragraph: {type: String, default: ""}
    });

let Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;