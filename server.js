const express = require ("express");
const exphandlebars = require ("express-handlebars");

const mongoose = require ("mongoose");

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));


app.engine('handlebars', exphandlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

const routes = require("./routes");
app.use(routes);

var MONGODB_URI= process.env.MONGODB_URI || "mongodb://localhost/newscraper";

mongoose.connect(MONGODB_URI);


app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
})