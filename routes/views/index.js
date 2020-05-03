const router = require("express").Router();
const db = require('../../models');


router.get('/', function(req, res) {
    res.render('index', {articles: ["Article1", "Article 2"]})
})

module.exports = router; 