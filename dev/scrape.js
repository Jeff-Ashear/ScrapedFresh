
const db = require("../models");


const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/newscraper");

//'https://api.nytimes.com/svc/search/v2/articlesearch.json??q=elections&api-key=sgaGlaiyYIsK8UZwDAPGfp5pmZbMfQyH'

const axios = require('axios');
let path = "https://www.theonion.com/"
const cheerio = require("cheerio");

axios.get(path)
    .then((resp) => {
        console.log("Success, returned from response");
        //let docs = resp.docs;

        let $ = cheerio.load(resp.data);

        let articles = [];
        let article = {};
        //article/a/source et
        $("article a h4, article a img, article a p").each(function (i, element) {
            // case 1: image, header; case 2: image, header, p; case 3: h4, p;
            let keys = Object.keys(article);
            let el = $(this).get(0).tagName
            if (keys.includes("header") && keys.includes("paragraph")) {
                articles.push(article);
                article = {};
            } else if (keys.includes("header") && keys.includes("image") && keys.includes("paragraph")) {
                articles.push(article);
                article = {};
            }else if (keys.includes("header") && keys.includes("image") && el != "p") {
                articles.push(article);
                article = {};
            }

            // let el = $(this).get(0).tagName//.text();
            if (el == "h4") {
                article["header"] = $(this).text();
                article["link"] = $(this).parent().attr("href");
                console.log("header: ", i, $(this).text());
            }
            if (el == "p") {
                article["paragraph"] = $(this).text();
                console.log("p: ", i, $(this).text());
            }
            if (el == "img") {
                let image = $(this).attr("srcset");
                if (image != undefined) {
                    article["image"] = image.split(" ")[0];
                    console.log("image: ", i, image.split(" ")[0]);
                }
            }

            // if (head != ""){

            // }
            // let href = $(this).attr("href");
            // let p = $(this).find('p').text();
            // let image = $(this).find('img').attr("srcset");
            // //0 - with image, 1 - ad/skip, 2 - the title and content belonging to image
            // console.log("href=", href);
            // console.log("headeer - with -image", head)
            // console.log("image: ", image.split(" ")[0])
            // if(image !== undefined) {

            //     console.log("href=", href);
            //     console.log("headeer - with -image", head)
            // console.log("image: ", image.split(" ")[0])
            // } else {
            //     console.log("headeer - no -image", head);
            //     console.log("href=", href);
            //     console.log("p:", p)
            // }
        })

        db.Article
        .remove({})
        .then(() => db.Article.insertMany(articles))
        .then(articles => {
            console.log("The articles were saved")
        })
        .catch((err) => {
            console.log("yikes.... it looks like there was a problem", err);
        })
        
        // let data = JSON.stringify(articles);
        // fs.writeFileSync('scraped-articles.json', data);
    })
    .catch((err) => {
        console.log("There wasa n error", err);
    })