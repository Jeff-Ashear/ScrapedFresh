const router = require("express").Router();
const db = require('../../models');


router.get('/', function(req, res) {
    db.Article.find({})
    .then((thearticles) => {
        console.log(thearticles);

        res.render('index');
    })
   
})

router.get('/', function(req, res) {
    db.Comment.find({})
    .then((thecomments) => {
        console.log(thecomments);

        res.render('Comment');
    });
})

module.exports = router; 