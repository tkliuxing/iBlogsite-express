var path = require('path');
var express = require('express');
var settings = require('./settings');
// var models = require('./models/');

module.exports = function(app) {
	app.configure(function() {
		var static_path = path.join(settings.path, 'public');
		var views_path = path.join(settings.path, 'views');
		console.log(static_path);
		app.set('port', process.env.PORT || 3000);
		app.set('views', views_path);
		app.set('view engine', 'jade');
		app.use(express.logger({
			format: 'dev'
		}));
		app.use(express.favicon());
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(express.cookieParser('your secret here'));
		app.use(express.session());
		// app.use(function(req, res, next) {
		// 	models(function(err, db) {
		// 		if (err) return next(err);
		// 		req.models = db.models;
		// 		req.db = db;
		// 		return next();
		// 	});
		// }),
		app.use(app.router);
		app.use(require('less-middleware')({
			src: static_path,
			compress: true
		}));
		app.use(express.static(static_path));
	});
	// global attribute
	app.locals({
		SITE_TITLE: 'My App'
	});
	// development
	app.configure('development', function() {
		app.use(express.errorHandler());
	});
};