/*
 * GET home page.
 */

exports.index = function(req, res) {
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
};