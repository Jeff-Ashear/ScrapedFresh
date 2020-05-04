const axios = require('axios');
const db = require("../models");
const cheerio = require("cheerio");

const fs = require("fs");
let path = "https://www.theonion.com/"
//'https://api.nytimes.com/svc/search/v2/articlesearch.json??q=elections&api-key=sgaGlaiyYIsK8UZwDAPGfp5pmZbMfQyH'


axios.get(path)
.then((resp)=> {
    console.log("Success, returned from response");
    //let docs = resp.docs;

    let $ = cheerio.load(resp.data);

    let articles = [];
//article/a/source et
    $("article a").each(function(i, element) {
        let head = $(this).find("h4").text();
        let href = $(this).attr("href");
        let p = $(this).find('p').text();
        let image = $(this).find('img').attr("srcset");
        //0 - with image, 1 - ad/skip, 2 - the title and content belonging to image
        
        if(image !== undefined) {
            
            console.log("href=", href);
            console.log("headeer - with -image", head)
            console.log("image: ", image.split(" ")[0])
        } else {
            console.log("headeer - no -image", head);
            console.log("href=", href);
            console.log("p:", p)
        }
    })

    // let data = JSON.stringify(articles);
    // fs.writeFileSync('scraped-articles.json', data);
})  
.catch((err) => {
    console.log("There wasa n error", err);
})