function blog_create(req, res) {
	var C = {};
	res.render('blog_create', C);
};

module.exports = {
	blog_create: blog_create
}