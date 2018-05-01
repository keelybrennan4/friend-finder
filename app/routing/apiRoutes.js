var friendData = require('../data/friends.js');

module.exports = function (app){

  //* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  app.get('/api/friends', function(req, res) {
    return res.json(friendsData);
  });

  // API POST request to handle incoming survey results. 
  // This route will also be used to handle the compatibility logic.
  app.post('/api/friends', function(req, res) {
  
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
  
    console.log(newFriend);
  
    // We then add the json the user sent to the character array
    friends.push(newFriend);
  
    // We then display the JSON to the users
    res.json(newFriend);
});


}