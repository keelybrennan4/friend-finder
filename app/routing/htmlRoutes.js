// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

//* A GET Route to `/survey` which should display the survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});
 
//* A default, catch-all route that leads to `home.html` which displays the home page. 
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});