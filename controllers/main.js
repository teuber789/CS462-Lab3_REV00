var User = require('../models/user');



exports.get = function(req, res, username) {

	// Get a list of all users
	User.find(function(err, users) {

		if(err)
			
			res.send(err);

		else {

			var name = (username ? username : 'Guest');
			var statement = 'Hi ' + name + '! Welcome to Joseph\'s App';

			res.render('pages/index', {
		        statement: statement,
		        users: users
		    });

		}

	});

};