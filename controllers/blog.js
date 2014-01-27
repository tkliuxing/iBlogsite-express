// var Blog = require("../models").Blog;

function blog_create(req, res) {
	var C = {};
	if (req.method == "GET") {
		res.render('blog_create', C);
	}
	if (req.method == "POST") {
		console.log(req.body);
		if (req.body.title && req.body.content) {
			var msg = {
				title: req.body.title,
				body: req.body.content
			};
			req.models.Blog.create([msg], function(err, item) {
				console.log(err);
				res.redirect(301, "/");
			});
		} else {
			res.redirect(301, "/");
		}
	} else {
		res.status(404);
	}
};

module.exports = {
	blog_create: blog_create
}