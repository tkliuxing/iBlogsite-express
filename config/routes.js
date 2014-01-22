var controllers = require('../controllers')

module.exports = function(app) {
	app.get('/', controllers.index);
	app.get('/users', controllers.user);
	app.get('/fun', controllers.fun);
	app.get('/blog/create', controllers.blog_create);
};