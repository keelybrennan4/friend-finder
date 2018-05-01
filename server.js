var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

//app.get('/', function (req, res){
//    res.send("hello");
//})

//body parser application to receive data back in json 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//require html routes in server file and will pass app in using express 
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
});



//use to link css styling at the top of each sheet
//app.use(express.static(path.join(__dirname,'public')))

//var friendData= require(path.join(__dirname, 'app/data/friends'));

// Require api and html routes 
//require(path.join(__dirname, 'app/routing/apiRoutes.js'))(app);
//require(path.join(__dirname, 'app/routing/htmlRoutes.js'))(app);
