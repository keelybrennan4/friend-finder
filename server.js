//use to link css styling at the top of each sheet
//app.use(express.static(path.join(__dirname,'public')))

var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

//body parser application to receive data back in json 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

//require api routes in server file
require('./app/routing/apiRoutes.js')(app);
//require html routes in server file and will pass app in using express 
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
});
