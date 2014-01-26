// var Blog = require("../models").Blog;

function blog_create(req, res) {
	var C = {};
	if (req.method == "GET") {
		res.render('blog_create', C);
	}
	if (req.method == "POST") {
		console.log(req.models);
		res.redirect(301, "/")
	} else {
		res.status(404);
	}
};

module.exports = {
	blog_create: blog_create
}