# ScrapedFresh
A news scraper app using Express, Express-Handlebars, Mongoose, Cheerio, and Axios.



Relevant links:

Deployed:

    https://scrapedfresh.herokuapp.com/ 
    https://jeff-ashear.github.io/ScrapedFresh/

Repo

    https://git.heroku.com/scrapedfresh.git

Portfolio:
    https://jeff-ashear.github.io/UpdatedPortfolio/

API Keys etc:

key:
sgaGlaiyYIsK8UZwDAPGfp5pmZbMfQyH

secret:
SRBS2WOB2XmYP2QM


1.The purpose of the app:

      This app upon page load automatically scrapes the article api from The Onion website and posts them to the database.  It then queries the db and appends the articles from its table to the page along with a comment field.  Users can then see the headline, a thumbnail, a link (taking one to the origianl article to the Onion's webpage), as well as being able to post a comment.  The comment is sent to a new db table, associated with the article's id.  Each user is able to see all comments previously posted for each article.

2.  Notes on organization:

    This app is organized around a basic MCV archictectural structure.  There are three models: Atricle, Comments, and Index.js each of which formats information to be posted in it's respective db table.  The controllers are built on the api routes, except for the scraper.  The scraper requires the mongoose and cheerio npm packages.  Using axios and cheerio, it concatonates a query with the api key, and gathers the relevant information from the response.  Index.js in the api folder handles the requirements for the rest of the routing in the other api files.  Article.js, comment.js, scraper.js all fetch and post to the database from the front end.  The view is built using handlebars.

3. Instructions for using the app:

    Upon loading the page, the scraper automatically scrape will grab articles and post them to the db.  Then the view will render all articles from the db, with their associated links, thumbnails, and comments.  The user may then click any article to read it; as well as read all previous comments posted about that article. To post a comment, merely type it in the field and click submit.  The comment will be posted to the db and the page will reload to display this comment.

4. Video of this app in use has yet to be created.

5. Links to the deployed site:

     https://scrapedfresh.herokuapp.com/ 
     https://jeff-ashear.github.io/ScrapedFresh/

     links to the repo:

      https://git.heroku.com/scrapedfresh.git

6. Technologies used:

    Mongoose is used to communicate with mySQL to querry and post to the db.  Handlebars generates the views.  The cheerio npm is used to interacte with The Onion News' api.  Express and node.js serve the app.  The app is hosted on Heroku with the MLab plugin to host the DB.

7. This app was developed by Jeff Ashear.