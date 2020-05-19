const router = require("express").Router(); 

const scraperRoutes = require("./scraper");
const articleRoutes = require("./article");
const commentRoutes = require("./comment");

router.get("/", function(req, res){
    res.send("Welcome to the News Scraper API. You can use this without a token. Enjoy");
})

router.use("/scraper", scraperRoutes);
router.use("/articles", articleRoutes);
router.use("/comments", commentRoutes);

module.exports = router;