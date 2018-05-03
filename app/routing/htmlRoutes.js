var path = require('path');

module.exports = function (app) {

    //when user clicks button to /survey, get survey.html
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    //if url is not survey, get home page
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

};