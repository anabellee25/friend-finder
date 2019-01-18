
var path = require('path');
var friends = require('../app/data/friends.js');

// Export API routes
module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {

		var userInput = req.body;
		var userScores = userInput.scores;

		var matchName = '';
		var matchPhoto = '';
		var totalDifference = 60;

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
	
			var diff = 0;
			for (var j = 0; j < userScores.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userScores[j]);
      }
      
			if (diff < totalDifference) {

				totalDifference = diff;
				matchName = friends[i].name;
				matchPhoto = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userInput);

    // Send response to html
    // console.log({status: 'OK', matchName: matchName, matchPhoto: matchPhoto})
		res.json({matchName: matchName, matchPhoto: matchPhoto});
	});
}