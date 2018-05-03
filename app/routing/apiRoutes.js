//require data from freinds.js/incoming survey results
var friendsData = require('../data/friends.js');

module.exports = function (app){

  //A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  app.get('/api/friends', function(req, res) {
    return res.json(friendsData);
  });

  // API POST request to handle incoming survey results. Also used to handle the compatibility logic.
  app.post('/api/friends', function(req, res) {
  
    var bestMatch = {
      name: "",
      photo: "",
      friendDiff: 100
    };
    console.log(req.body);

    var userData = req.body;
    var userScores = userData.scores;

    //variable to calculate the difference between the user's score and the score of each friend already in friends data
    var totalDiff = 0;

    //loop through all friend possibilities in the database 
    for (var i = 0; i < friendsData.length; i++) {
      totalDiff = 0;
      console.log(totalDiff);
      
      //loop through scores to compare friends
      for (var j = 0; j <= friendsData[i].scores[j]; j++){

        //sum difference between scores
        totalDiff += (Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j])));

        //compare scores for each friend
        if (totalDiff <= best.Match.friendDiff){

          //make a new match
          bestMatch.name = friendsData[i].name;
          bestMatch.name = friendsData[i].photo;
          bestMatch.friendDiff = totalDiff;
        }
      }
    }

    console.log(userData);

    //add a new user 
    friendsData.push(userData);
    
    //return a JSON with the user's best match to modal
    res.json(bestMatch);

  });

}