module.exports = function Route(app){
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
	 res.render("index");
	})
	// post route for adding a data from a survey
	app.post('/result', function(req, res) {
		submitted_info = {
			name: req.body.name,
			dojo: req.body.dojo,
			flang: req.body.flang,
			comment: req.body.comment
		};
		console.log(submitted_info)
	 	res.render("results",{user_data: submitted_info});
	})
};