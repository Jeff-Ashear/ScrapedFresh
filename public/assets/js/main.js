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
                    let articleId = $(`#${article._id}`).attr("id");
                    let comment = $(`#${article._id}`).val().trim();
                    console.log("article id: ", articleId)
                    console.log("Look a comment: ", comment);
                    $.ajax({
                        method: "POST",
                        url: "/api/comments",
                        data: {
                            article: articleId,
                            body: comment
                        }
                    }).then((res) => {
                        console.log(res);
                        window.location.reload();
                    })
                    .catch(err => {
                        console.error(err);
                    })
                });

                let ul = $("<ul></ul>");
                $.ajax({
                    method: 'GET',
                    url: '/api/comments/' + article._id,
                })
                    .then(function(res) {
                        res.comments.forEach(comment => {
                            ul.append("<li>" + comment.body + "</li>");
                        });
                    })
                    .catch(function(err) {
                        console.error(err)
                    })

                h.text(article["h4"])
                p.text(article["p"])
                img.attr("src", article["img"])
                a.attr("href", article["link"])
                a.html(h)
                div.append(img, a, p, input, button, ul)
                $("#newArticles").append(div)
                $("#comments").append(comments)
            }
            
        })
        .catch(err => {
            console.log("err", err);
        })
});

