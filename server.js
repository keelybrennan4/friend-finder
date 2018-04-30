//use to link css styling at the top of each sheet
app.use(express.static(path.join(__dirname,'public')))

//dependencies 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

//express 
require('/apiroutes.js')(app);

var friendData = require(path.join(__dirname, 'data/friendData.js'));

var PORT = process.env.PORT || 8080;

app.get('/', function(req, res){
    res.send('hi!');

});



// Sets up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
