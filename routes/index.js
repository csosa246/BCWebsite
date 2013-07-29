
/*
 * GET home page.
 */

//get correct directory path
var filePath = __dirname.replace('routes', 'views/')

exports.index = function(req, res) {
		console.log("From index: " + req.params.name);

	res.sendfile(filePath + 'index.html');
};

exports.partials = function (req, res) {
		console.log("From partials: " + req.params.name);

 	var name = req.params.name;
  	res.sendfile(filePath + 'partials/' + name + '.html');
};