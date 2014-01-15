/*
 * GET home page.
 */
module.exports = {
	index: function(req, res) {
		var C = {
			blogs: [{
				title: "asdf",
				content: "hahahah",
			}, {
				title: "foo",
				content: "bar",
			}]
		};
		res.render('index', C);
	},
	user: require('./user'),
	fun: require('./fun')
};