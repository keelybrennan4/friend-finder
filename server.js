//dependencies
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;


//sets up express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//require api routes in server file
require('./app/routing/apiRoutes.js')(app);
//require html routes in server file and will pass app in using express 
require('./app/routing/htmlRoutes.js')(app);

//allows html to have access to our public folder on the server
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
});