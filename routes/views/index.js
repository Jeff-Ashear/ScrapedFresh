const router = require("express").Router();
const db = require('../../models');


router.get('/', function(req, res) {
    db.Article.find({})
    .then((thearticles) => {
        console.log(thearticles);

        res.render('index');
    })
   
})

module.exports = router; 