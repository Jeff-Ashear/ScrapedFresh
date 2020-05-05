const router = require("express").Router(); 

const scraperRoutes = require("./scraper");
const articleRoutes = require("./article");

router.get("/", function(req, res){
    res.send("Welcome to the News Scraper API. You can use this without a token. Enjoy");
})

router.use("/scraper", scraperRoutes);
router.use("/articles", articleRoutes);

module.exports = router;