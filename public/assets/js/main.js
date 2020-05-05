$(document).ready(function () {



    $.get("/api/articles")
        .then(res => {

            let articles = res.articles;
            console.log(res.articles);
            let newArticleDiv = $("#newArticles");
            //newArticleDiv.text("hello")
            for (let i = 0; i < articles.length; i++) {
                let article = articles[i];
                let div = $("<div>");
                let h = $("<h3>");
                let p = $("<p>");
                let img = $("<img>")
                let a = $("<a>");
                let input = $(`<textarea rows="5" cols="20" id=${article._id}>`)
                let button = $('<button type="submit">Submit</button>')
                button.on("click", function(event) {
                    event.preventDefault();
                })
                h.text(article["header"])
                p.text(article["paragraph"])
                img.attr("src", article["image"])
                a.attr("href", article["link"])
                a.html(h)
                div.append(img, a, p, input, button)
                $("#newArticles").append(div)
            }
            
        })
        .catch(err => {
            console.log("err", err);
        })
})