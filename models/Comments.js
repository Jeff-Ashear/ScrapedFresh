const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const CommentSchema = new Schema({
    article: {type: Schema.Types.ObjectId, ref: 'Article'},
    body: String
})

const Comment = mongoose.model('Comment', CommentSchema);