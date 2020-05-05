const mongoose = require("mongoose");
const db = require("../../models");
const router = require("express").Router(); 

router.get("/", function(req, res) {
    db.Article.find({})
    .then(articles => {
        res.send({
            success: true, 
            message: "Article Retrieved",
            articles: articles
        });
    })
    .catch(err=> {
        console.log("err", err);
    })
})

module.exports = router; 