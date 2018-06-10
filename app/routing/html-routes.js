
var path = require('path');



module.exports = function (app) {
    //////////////////////////////////////////////////////////////////////////////////
    // HTML GET Requests

    // Sends user to the Home Page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    })

    // sends user to survey HTML
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    })

    // No matching route found - home
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

}