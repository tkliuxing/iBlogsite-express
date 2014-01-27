module.exports = {
	index: function(req, res) {
		req.models.Blog.find(['id', 'Z'], function(err, messages) {
			if (err) {
				console.log(err);
				if (err.code === '42P01') {
					req.models.Blog.sync();
				}
				res.status(500);
			}
			var C = {
				blogs: messages
			};
			res.render('index', C);
		});
	},
	user: require('./user'),
	fun: require('./fun'),
	blog_create: require('./blog').blog_create
};