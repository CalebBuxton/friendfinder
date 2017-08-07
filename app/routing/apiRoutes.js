var friends = require("../data/friends");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(reserved);
	});

	app.post("/api/friends", function(req, res) {
		if (reserved.length < 5) {
			reserved.push(req.body);
			res.json(true);
		}
		else {
			waiting.push(req.body);
			res.json(false);
		}
	});

	app.post("/api/clear", function(req, res) {
		reserved = [];
		waiting = [];

		console.log(reserved)
	})
}