var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

//module.exports = 

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

// Displays a single friend, or returns false
app.get("/api/friends/:friend", function(req, res) {
  var chosen = req.params.friend;

  console.log(chosen);

  //for (var i = 0; i < friends.length; i++) {
  //  if (chosen === friends[i].routeName) {
  //    return res.json(friends[i]);
  //  }
 // }
  return res.json(false);
});

//* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
  
    console.log(newFriend);
  
    // We then add the json the user sent to the character array
    friends.push(newFriend);
  
    // We then display the JSON to the users
    res.json(newFriend);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});